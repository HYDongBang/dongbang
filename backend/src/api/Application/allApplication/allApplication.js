import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allApplication: async () => prisma.applications()
    },
}