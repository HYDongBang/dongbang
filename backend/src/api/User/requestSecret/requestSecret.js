import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     requestSecret: async (_, args, { request }) => {
       const { email } = args;
       const secret = generateSecret();
       try {
         await prisma.createSecret({email,secret});
         await sendSecretMail(email, secret);
         return secret;
       } catch (error) {
         console.log(error);
       }
     }
   }
 };
