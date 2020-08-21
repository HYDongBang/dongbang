import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     upload: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { url } = args;
       const { user } = request; 
       const club = await prisma.user({id:user.id}).isMaster();
       const clubId = club.id
       const exist = await prisma.$exists.file({club:{id:clubId}})
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
