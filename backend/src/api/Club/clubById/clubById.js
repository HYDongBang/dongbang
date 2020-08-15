import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        clubById: async (_, {id}) => {
            console.log(id);
            console.log(prisma.club({id}));
            return prisma.club({id});
        }
    }
}
