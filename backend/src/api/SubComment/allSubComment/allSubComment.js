import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allSubComment: async () => prisma.subComments()
    },
}
