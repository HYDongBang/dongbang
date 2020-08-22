import { prisma } from "../../../../generated/prisma-client";


 export default {
   Mutation: {
     deleteSecret: async (_, args) => {
       const { email } = args;
       const existSecret = await prisma.$exists.secret({email});
       console.log(existSecret);
       if (existSecret) {
         let s = await prisma.secrets({
           where:{email:"csyoon1472@gmail.com"}
         });
         const { id } = s[0];
        await prisma.deleteSecret({id:id});
        return true;
      }else {
        return false;
      }
     }
   }
 };
