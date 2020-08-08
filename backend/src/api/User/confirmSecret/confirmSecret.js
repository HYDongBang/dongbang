import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     confirmSecret: async (_, args) => {
       const { email, password } = args;
       const user = await prisma.user({ email });
       if (user.encryptedPassword === hashedPassword) {
         return true;
       } else {
         throw Error("Wrong email/secret combination");
       }
     }
   }
 };
