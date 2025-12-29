import express from "express" 
import authRoute  from "./Api/auth/auth.routes.js"
import cookieParser from "cookie-parser";
import userRoute  from "./Api/users/user.routes.js"
import patientRoute from "./Api/patients/patients.routes.js"
import doctorRoute  from "./Api/doctors/doctors.routes.js"








const app = express();

app.listen(3000,(req,res)=>{
     console.log("listening to port number 3000")
})
app.use(express.json());



app.use(cookieParser());

app.use(authRoute)
app.use(userRoute)
app.use(patientRoute)
app.use(doctorRoute)