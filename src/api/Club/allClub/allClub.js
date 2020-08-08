import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allClub: async () => {
            console.log(await prisma.clubs());
            return "HELLO";
        }
    }
}