const { GoogleGenAI } = require("@google/genai");
const { z } = require("zod");
const { zodToJsonSchema } = require("zod-to-json-schema");
const promptBuilder = require("../utils/promptBuilder");
const interviewReportSchema = require("../validations-schemas/interviewSchema");

const ai = new GoogleGenAI({
  apiKey: process.env.GOOGLE_API_KEY,
});

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

module.exports = generateInterviewReport;
