# HealthNet

A full-stack healthcare management system for centralizing patient records, medical history, and emergency response.

## Key Features

- **RBAC Support**: Custom portals for Patients, Doctors, Admins, Lab Techs, and First Responders.
- **Emergency Portal (QR Safe)**: Token-based QR code access for first responders to view vital patient data instantly.
- **Medical Records**: Integrated management of diagnoses, lab results (PDF upload/export), allergies, and chronic conditions.
- **Appointments**: Real-time scheduling and tracking of patient-doctor consultations.
- **Facility Management**: Centralized registry for hospitals, clinics, and specialized labs.

## Tech Stack

- **Frontend**: React 19 (Vite), Tailwind CSS 4, Radix UI, Axios, Lucide Icons, Day.js.
- **Backend**: Node.js, Express 5, Prisma ORM (PostgreSQL), Zod (Validation).
- **Integrations**: Cloudinary (File Storage), Nodemailer (Email), JWT (Authentication).

## Project Structure

- `/Server`: Express backend with Prisma schema and REST API.
- `/frontend`: React application with role-based routing and modular UI.

## Getting Started

### Prerequisites
- Node.js 20+
- PostgreSQL instance

### Backend Setup
1. `cd Server`
2. `npm install`
3. Create `.env` from template:
   ```env
   DATABASE_URL="postgresql://..."
   JWT_SECRET="..."
   CLOUDINARY_URL="..."
   SMTP_HOST="..."
   ```
4. `npx prisma generate`
5. `npx prisma migrate dev`
6. `node server.js` (Runs on port 3000)

### Frontend Setup
1. `cd frontend`
2. `npm install`
3. `npm run dev` (Runs on port 5173)

## Deployment
- **Frontend**: Configured for Vercel (`vercel.json`).
- **Backend**: Standard Express compatibility for Render/Heroku.
