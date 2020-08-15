import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        clubById: async (_, {id}) => {
            console.log(id);
            return prisma.club({id});
        }
    },
}