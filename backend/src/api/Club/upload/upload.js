import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     upload: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { clubId, url } = args;
       const exist = await prisma.$exists.file({club:{id:clubId}})
       console.log(exist);
       if(exist){
         await prisma.deleteManyFiles({
         club:{id:clubId}
         });
       }
         await prisma.createFile({
               url: url,
               club: {
                 connect: {
                   id: clubId
                 }
               }
             });
         return prisma.club({id:clubId});
     }
   }
 };
/*
mutation{
  upload(clubId:"ckdt2l415kl4v0a32kczefr6s" url:"22sddsd" ){
    name
    id
    imgExist
  }
}
*/
