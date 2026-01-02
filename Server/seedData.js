import prisma from "./lib/prisma.js"
import generateUpi from "./lib/generateId.js";
import bcrypt from "bcrypt"



async function main() {
  // 1. Create a Facility (Admins must belong to on
  const password ="securePass123!"
 const passwordHash = await bcrypt.hash(password, 10);
 const  updateAdmin = await   prisma.user.update({
    where :{id:1},
    data:{passwordHash}

 })

 

}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
