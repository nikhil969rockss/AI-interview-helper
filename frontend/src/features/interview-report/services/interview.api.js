import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export async function generateInterviewReport({
  resume,
  selfDescription,
  jobDescription,
}) {
  try {
    const response = await api.post("/interview", {
      resume,
      selfDescription,
      jobDescription,
    });
  } catch (error) {}
}
