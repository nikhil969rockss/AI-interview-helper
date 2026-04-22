# GenAI Resume & Interview Helper

A full-stack interview preparation assistant that combines AI-powered resume parsing, interview report generation, and user authentication. The project includes a React frontend and an Express/MongoDB backend integrated with the Google Gemini AI API.

## 🚀 Project Overview

This application helps users prepare for interviews by:

- Registering and logging in securely
- Uploading a resume PDF or providing a self-description
- Supplying a job description
- Generating AI-driven interview reports
- Saving and retrieving past interview reports
- Generating a resume PDF based on user input and job context

## 📁 Folder Structure

- `backend/`
  - `server.js` — Backend entrypoint
  - `src/app.js` — Express app configuration
  - `src/config/database.js` — MongoDB connection setup
  - `src/routes/` — Auth and interview API routes
  - `src/controllers/` — Request handlers for auth and interview flows
  - `src/models/` — Mongoose models for users, reports, and token blacklist
  - `src/services/` — AI report generation, PDF creation, and resume parsing
  - `src/middlewares/` — Authentication, file upload, and validation middleware
  - `sample.env` — Example environment variables

- `frontend/`
  - `src/App.jsx` — Root app wrapper and providers
  - `src/app.routes.jsx` — React Router configuration
  - `src/features/` — Feature-specific hooks, context, pages, components, and API services
  - `src/features/auth/` — Login/register flow, auth context, and protected routes
  - `src/features/interview-report/` — Interview report workflow and UI components

## ✨ Key Features

- User authentication with JWT cookies
- Protected backend API routes
- Resume PDF upload support
- AI-based interview report generation
- Report history + saved interview summaries
- On-demand resume PDF generation from saved reports
- Responsive React UI using Vite and Tailwind CSS

## 🧰 Tech Stack

- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: React, React Router, Vite, Tailwind CSS
- Authentication: JWT + cookie-based sessions
- AI: Google Gemini via `@google/genai`
- File upload: Multer
- PDF parsing: `pdf-parse`
- PDF generation: Puppeteer

## ⚙️ Installation

### 1. Backend Setup

```bash
cd backend
npm install
```

Copy environment variables:

```bash
cp sample.env .env
```

Then update `.env` with your own values:

- `MONOURI` — MongoDB connection string
- `PORT` — Backend port (example: `3000`)
- `NODE_ENV` — `development`
- `JWT_SECRET` — secret for token signing
- `GOOGLE_API_KEY` — Gemini API key

Start the backend:

```bash
npm run dev
```

### 2. Frontend Setup

```bash
cd frontend
npm install
```

Copy environment variables:

```bash
cp .env.example .env
```

Or create `.env` with the following variables:

```env
VITE_DEV_URL=http://localhost:3000
VITE_PROD_URL=https://your-backend-production-url
VITE_TEST_EMAIL=test@gmail.com
VITE_TEST_PASSWORD=123456
```

Start the frontend:

```bash
npm run dev
```

Open the dev server URL shown in the console, usually `http://localhost:5173`.

## 🧪 Running the App

1. Create `.env` files in both `backend/` and `frontend/` directories with required variables (see Environment Variables section).
2. Start the backend first:
   ```bash
   cd backend
   npm run dev
   ```
3. In a new terminal, start the frontend:
   ```bash
   cd frontend
   npm run dev
   ```
4. Open the frontend URL in your browser, usually `http://localhost:5173`.
5. Register a new user or login with test credentials.
6. Create an interview report by uploading a resume or entering a self-description along with a job description.
7. View saved reports and generate resume PDFs.

## 📌 Environment Variables

### Backend (`.env`)

```env
MONOURI=<Your MongoDB connection string>
PORT=3000
NODE_ENV=development
JWT_SECRET=<Your JWT secret key>
GOOGLE_API_KEY=<Your Google Gemini API key>
```

### Frontend (`.env`)

```env
VITE_DEV_URL=http://localhost:3000              # Backend URL for development
VITE_PROD_URL=https://your-backend-url         # Backend URL for production
VITE_TEST_EMAIL=test@gmail.com                 # Optional test credentials
VITE_TEST_PASSWORD=123456                      # Optional test credentials
```

The frontend uses Vite's `import.meta.env` to access environment variables prefixed with `VITE_`.

## 📌 API Endpoints

### Auth

- `POST /api/auth/register` — register a new user
- `POST /api/auth/login` — login with username/email and password
- `GET /api/auth/logout` — logout and clear session
- `GET /api/auth/get-me` — get current user details

### Interview

- `POST /api/interview/` — create a new interview report
- `GET /api/interview/report/:interviewId` — fetch a saved report
- `GET /api/interview/reports` — list user interview reports
- `POST /api/interview/resume/pdf/:interviewId` — generate and download a resume PDF

## 📝 Notes

- The backend uses cookie-based JWT authentication, so the frontend automatically includes credentials via axios config.
- The frontend dynamically switches between `VITE_DEV_URL` and `VITE_PROD_URL` based on your configuration.
- The interview feature requires `resume`, `selfDescription`, and `jobDescription` together.
- Resume generation and report workflows depend on the Google Gemini API, so valid API credentials are essential.
- Test credentials can be set in `.env` for quick testing during development.

## 💡 Recommended Improvements

- Add client-side form validation and better error display
- Add pagination for saved interview reports
- Add real-time upload progress and report download feedback
- Add unit tests for backend controllers and frontend components

## 📚 Contribution

If you want to extend this project:

1. Fork the repository
2. Create a new branch
3. Implement your feature
4. Open a pull request with a clear summary of changes

---

Built to help job seekers generate AI-powered interview preparation materials and streamline resume review workflows.
