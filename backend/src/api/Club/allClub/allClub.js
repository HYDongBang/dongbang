import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allClub: async () => prisma.clubs()
    },

    // Question: {
    //     clubs(parent){
    //         return prisma.question({id: parent.id}).club();
    //     }
    // }
}
