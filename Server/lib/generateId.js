import crypto from "crypto";

function generateUpi(role) {
  const prefixMap = {
    patient: "P",
    doctor: "DR",
    lab: "L",
    diagnosis: "D",
    admin: "A",
  };

  const prefix = prefixMap[role.toLowerCase()] ?? "H";

  const timestamp = (Date.now() % 100000).toString(36).toUpperCase(); // 3–4 chars
  const random = crypto.randomBytes(2).toString("hex").toUpperCase(); // 4 chars

  return `${prefix}${timestamp}${random}`.slice(0, 10); 
}

export default generateUpi;