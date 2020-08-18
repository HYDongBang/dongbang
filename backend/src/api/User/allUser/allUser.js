import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allUser: async () => prisma.users()
    }
}
