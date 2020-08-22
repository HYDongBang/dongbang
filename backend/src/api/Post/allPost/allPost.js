import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allPost: async () => prisma.posts()
    },
}
