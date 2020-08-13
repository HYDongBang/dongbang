import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        userById: async (_, {id}) => {
            console.log(id);
            return prisma.user({id});
        }
    }
}