import { prisma } from "../../../../generated/prisma-client";

export default {
    Query: {
        allQuestion: async () => prisma.questions()
        //$fragment()
    }
}