import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allClub: async () => prisma.clubs()
        //$fragment()
    },
    Club: {
        questions(parent){
            return prisma.club({id: parent.id}).questions()
        },
        // master(parent){
        //     return prisma.club({id: parent.id}).master();
        // }
    },
    // Question: {
    //     clubs(parent){
    //         return prisma.question({id: parent.id}).club();
    //     }
    // }
}