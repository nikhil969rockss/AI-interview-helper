const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { promptBuilderForResume, promptBuilder } = require("../utils/promptBuilder");
const interviewReportSchema = require("../validations-schemas/interviewSchema");
const { generatePdfFromHtmlContent } = require("./generatePdf.service")


const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

/**
 * @param {object} - { resume, selfDescription, jobDescription } - object containing resume, selfDescription and jobDescription   
 * @param {number} retries - number of retries if model fails to generate the require schema report
 * @returns - generated interview report
 */
async function generateInterviewReport(
  { resume, selfDescription, jobDescription },
  retries = 3,
) {
  const prompt = promptBuilder({ resume, selfDescription, jobDescription });

  try {
    for (let i = 0; i < retries; i++) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-3.1-flash-lite-preview",
          contents: prompt,
          config: {
            responseMimeType: "application/json",
            responseSchema: z.toJSONSchema(interviewReportSchema),
          },
        });
        let text = response.text;

        text = text.replace(/```json/g, "").replace(/```/g, "");

        const valitedResult = interviewReportSchema.safeParse(JSON.parse(text));

        if (!valitedResult.success) {
          console.log("retrying again");
          console.log(valitedResult.error);
          throw new Error("Invalid response from the model");
        }

        return valitedResult.data;
      } catch (error) {
        if (i == retries - 1) throw error;
      }
    }
  } catch (error) {
    if (error?.status == 503 || error?.code === 503) {
      return {
        status: 503,
        message: "Unable to get response, Model is in high demand",
      };
    }
    if (error?.status == 429 || error?.code === 429) {
      return {
        status: 429,
        message: "Model is exhausted for today, try again tomorrow",
      };
    }
    console.log("Failed to generate response", error);
    return { status: 400, message: error.message };
  }
}


async function generateResumePdf({ resume, jobDescription, selfDescription }) {
  try {
    const resumePdfSchema = z.object({
      html: z.string().describe("The HTML content of the resume which can be converted to PDF using any library like puppeteer ")
    })

    const prompt = promptBuilderForResume({ resume, jobDescription, selfDescription })
    const response = await ai.models.generateContent({
      model: "gemini-3.1-flash-lite-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: z.toJSONSchema(resumePdfSchema)

      }
    })
    const parsed = JSON.parse(response.text)
    console.log(parsed)

    const pdfBuffer = await generatePdfFromHtmlContent(parsed["html"])

    console.log(pdfBuffer)

    return {pdfBuffer}

  } catch (error) {
    if (error?.status == 503 || error?.code === 503) {
      return {
        status: 503,
        message: "Unable to get response, Model is in high demand",
      };
    }
    if (error?.status == 429 || error?.code === 429) {
      return {
        status: 429,
        message: "Model is exhausted for today, try again tomorrow",
      };
    }
    console.log("Failed to generate response", error);
    return { status: 400, message: error.message };

  }

}

module.exports = { generateInterviewReport, generateResumePdf };
