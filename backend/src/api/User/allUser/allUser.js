import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allUser: async () => prisma.users()
    },
    User: {
        notifications(parent){
            return prisma.user({id: parent.id}).notifications()
        },
        applications(parent){
            return prisma.user({id: parent.id}).applications()
        }
    },
}