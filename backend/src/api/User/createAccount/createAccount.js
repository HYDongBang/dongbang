import { prisma } from "../../../../generated/prisma-client";
import bcrypt from 'bcrypt';
const SALTROUNDS = 10;

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { email, password, auth} = args;
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
