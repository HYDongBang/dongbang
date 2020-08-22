import { generateSecret, sendSecretMail } from "../../../utils";
import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     requestSecret: async (_, args, { request }) => {
       const { email } = args;
       const existUser = await prisma.$exists.user({email});
       if (!existUser) {
         const secret = generateSecret();
         try {
           await prisma.createSecret({email,secret});
           await sendSecretMail(email, secret);
           return "이메일 인증값을 입력하세요";
         } catch (error) {
           console.log(error);
         }
       } else {
         return "이미 가입된 이메일 입니다."
       }
     }
   }
 };
