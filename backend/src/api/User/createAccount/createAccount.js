import { prisma } from "../../../../generated/prisma-client";
import bcrypt from 'bcrypt';
const SALTROUNDS = 10;

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { email, password } = args;
       let s = await prisma.secrets({
         where:{email:email}
       });
       const { id,secret,auth } = s[0];
       if(auth){
         const encryptedPassword = await bcrypt.hash(password,SALTROUNDS);
         const user = await prisma.createUser({
           email,
           encryptedPassword
         });
         return user;
       } else {
        throw Error();
       }
     }
   }
 };
