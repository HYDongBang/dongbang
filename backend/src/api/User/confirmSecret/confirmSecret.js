import { prisma } from "../../../../generated/prisma-client";


 export default {
   Mutation: {
     confirmSecret: async (_, args) => {
       const { email,getSecret } = args;
       let s = await prisma.secrets({
         where:{email:email}
       });
       const { id,secret } = s[0];
      if(secret==getSecret){
        const auth = true;
        await prisma.updateSecret({
          where: { id: id },
          data: { auth }
        })
        return true;
      }else {
        return false;
      }
     }
   }
 };
