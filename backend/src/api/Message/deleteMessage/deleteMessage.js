import { prisma } from "../../../../generated/prisma-client";
export default {
    Mutation:{
        deleteMessage: async(_, args, { request, isAuthenticated }) => {
            const { id } = args;
            const Message = await prisma.$exists.message({id})
            if(Message){
                return prisma.deleteMessage({id});
            }else{
                throw Error("You can't do that");
            }
        }
    }
}
