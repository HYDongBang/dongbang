import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     createAccount: async (_, args) => {
       const { email, phoneNumber, studentNumber, Name, isMaster="", sex="" } = args;
       const user = await prisma.createUser({
         email,
         phoneNumber,
         studentNumber,
         Name,
         isMaster,
         sex
       });
       return user;
     }
   }
 };
