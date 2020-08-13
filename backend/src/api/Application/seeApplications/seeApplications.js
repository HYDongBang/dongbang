import { prisma } from "../../../../generated/prisma-client"


export default {
    Query: {
        seeApplications: (_,{clubId}, {request}) => {
            return prisma.applications({
                where: {
                    clubId: clubId
                }
            })
        }
    }
}

