import multer from "multer";
import path from "path";


// could linary       ewwill be impleme nted here 
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/lab-reports/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = path.extname(file.originalname);

    cb(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

export default upload;
