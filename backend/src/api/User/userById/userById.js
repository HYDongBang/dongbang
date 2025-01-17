import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        userById: async (_, {id}) => {
            return prisma.user({id});
        }
    }
}
