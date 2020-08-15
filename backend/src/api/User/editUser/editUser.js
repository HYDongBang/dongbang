import { prisma } from "../../../../generated/prisma-client";

 export default {
   Mutation: {
     editUser: (_, args, { request, isAuthenticated }) => {
       isAuthenticated(request);
       const { Name, studentNumber, phoneNumber, sex, avatar } = args;
       const { user } = request;
       return prisma.updateUser({
         where: { id: user.id },
         data: { Name, studentNumber, phoneNumber, sex, avatar }
       });
     }
   }
 };