import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allClub: async () => prisma.clubs()
        //$fragment()
    }
}