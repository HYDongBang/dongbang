import { prisma } from "../../../../generated/prisma-client";

 export default {
   Query: {
     testRoom: (_, __, { request, isAuthenticated }) => {
      return prisma.rooms({where: {
        AND:[
    {participants_some:{id:"ckdzhb2ostqlg0a35qj1iwyv6"}},
    {participants_some:{id:"ckdsxp2nsjrnv0a32yxnb4538"}}
  ]}
})
     }
   }
 };
