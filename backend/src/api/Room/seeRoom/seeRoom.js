import { prisma } from "../../../../generated/prisma-client";
import { ROOM_FRAGMENT } from "../../../fragments";

 export default {
   Query: {
     seeRoom: async (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { clubId } = args;
       const { user } = request;
       const canSee = await prisma.$exists.room({
         AND:[
     {participants_some:{id:user.id}},
     {participants_some:{id:clubId}}
   ]}
 );
       if (canSee) {
         return prisma.rooms({where: {
           AND:[
       {participants_some:{id:user.id}},
       {participants_some:{id:clubId}}
     ]}
   })
       } else {
         throw Error("You can't see this");
       }
     }
   }
 };
