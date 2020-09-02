import { prisma } from "../../../../generated/prisma-client";
import bcrypt from 'bcrypt';
const SALTROUNDS = 10;

 export default {
   Mutation: {
     createUser: async (_, args) => {
       const { email } = args;
         const encryptedPassword = await bcrypt.hash(email,SALTROUNDS);
         const university = "한양대";
         const major = "정보시스템";
         const user = await prisma.createUser({
           email,
           encryptedPassword,
           university,
           major
         });
         return user;
       }
     }
 };
