import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allComment: async () => prisma.comments()
    },
}
