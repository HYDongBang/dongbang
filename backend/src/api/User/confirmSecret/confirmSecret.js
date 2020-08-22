import { prisma } from "../../../../generated/prisma-client";


 export default {
   Mutation: {
     confirmSecret: async (_, args) => {
       const { email,getSecret } = args;
       let s = await prisma.secrets({
         where:{email:"csyoon1472@gmail.com"}
       });
       const { id,secret } = s[0];
      if(secret==getSecret){
        await prisma.deleteSecret({id:id});
        return true;
      }else {
        return false;
      }
     }
   }
 };
