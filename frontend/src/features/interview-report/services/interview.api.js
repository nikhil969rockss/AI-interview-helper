import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

/**
 * @description - Generate an interview report, by taking ```resume pdf``` or ```self description``` and ```job description```
 * @param {object} formData - formData which contain resume, jobDescription and selfDescription
 *
 */
export async function generateInterviewReport(formData) {
  try {
    const response = await api.post("/interview", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}

/**
 * @description Get interview report by ``interview id```
 * @param {string} {interviewId}
 * @returns Object of interview report
 */
export async function getInterviewReportById({ interviewId }) {
  try {
    const response = await api.get(`/interview/report/${interviewId}`);
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 * @description Get all the ```interviews report generated``` of the user
 * @returns Array of interview reports
 */
export async function getInterviewReports() {
  try {
    const response = await api.get("/interview/reports");
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
    return null;
  }
}

/**
 *
 * @param {string} interviewId - generated interview Id
 * @edescription Generate resume pdf for the given job description
 */
export async function generateResumePdf({ interviewId }) {
 
  try {
    const response = await api.post(
      `/interview/resume/pdf/${interviewId}`,
      null,
      { responseType: "blob" },
    );
    console.log(response)

    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (error) {
    console.log(error);
    return null;
  }
}
