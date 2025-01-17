import { prisma } from "../../../../generated/prisma-client";
import bcrypt from 'bcrypt';
const SALTROUNDS = 10;

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { email, password, Name, studentNumber, phoneNumber, university, major} = args;
       let s = await prisma.secrets({
         where:{email:email}
       });
       console.log(s[0]);
       console.log(email);
       const { auth } = s[0];
       if(auth==undefined){
        throw Error();
      } else {
         const encryptedPassword = await bcrypt.hash(password,SALTROUNDS);
         const user = await prisma.createUser({
           email,
           encryptedPassword,
           Name,
           studentNumber,
           phoneNumber,
           university,
           major
         });
         return user;
       }
     }
   }
 };
