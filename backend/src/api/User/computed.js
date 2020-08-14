import { prisma } from "../../../generated/prisma-client";

 export default {
   User: {
     isMaster: (parent) => prisma.user({id:parent.id}).isMaster()
   },
   Club: {
     imgExist: (parent, _, {request}) => {
       const user = {request};
       const targetclub = prisma.user({id:user.id}).isMaster;
       return prisma.$exists.file({
       club:targetclub.id
       });
     }
   } 
 };
