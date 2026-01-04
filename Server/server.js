import express from "express" 
import cookieParser from "cookie-parser";
import multer from "multer"

//routes 
import { errorHandler } from "./middleware/errorhandler.js";
import authRoute  from "./Api/auth/auth.routes.js"
import userRoute  from "./Api/users/user.routes.js"
import patientRoute from "./Api/patients/patients.routes.js"
import doctorRoute  from "./Api/doctors/doctors.routes.js"
import assigmentRoute from "./Api/assigment/assignments.routes.js"
import diagnosisRoute from "./Api/medical-record/diagnoses/diagnosis.routes.js"
import labRoute   from "./Api/medical-record/lab-results/labresults.routes.js"
import appointmentRoute  from "./Api/appointment/appointments.routes.js"
import allergyRoute      from "./Api/allergy/allergy.route.js"
import emergencyRoute   from "./Api/emergency-info/emergencyInfo.routes.js"







const app = express();

app.listen(3000,(req,res)=>{
     console.log("listening to port number 3000")
})
app.use(express.json());

app.use(cookieParser());
app.use(emergencyRoute)

app.use(authRoute)
app.use(userRoute)
app.use(patientRoute)
app.use(doctorRoute)
app.use(assigmentRoute)
app.use(diagnosisRoute)
app.use(labRoute)
app.use(appointmentRoute)
app.use("/allergy",allergyRoute)

app.use(errorHandler);   