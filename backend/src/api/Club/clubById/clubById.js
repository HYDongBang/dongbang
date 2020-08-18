import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        clubById: async (_, {id}) => {
            return prisma.club({id});
        }
    }
}
