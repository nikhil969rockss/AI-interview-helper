import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

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
  }
}

export async function getInterviewReportById({ interviewId }) {
  try {
    const response = await api.get(`/interview/report/${interviewId}`);
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}

export async function getInterviewReports() {
  try {
    const response = await api.get("/interview/reports");
    if (response.status >= 400) {
      throw new Error(response.message);
    }
    return response.data;
  } catch (err) {
    console.log(err);
  }
}
