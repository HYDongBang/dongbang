import { prisma } from "../../../../generated/prisma-client"

export default {
    Query: {
        seeClubApplications: async (_, args, {request, isAuthenticated}) => {
            const { user } = request;
            isAuthenticated(request);
            const club = await prisma.user({id:user.id}).isMaster()
            if(club == null){
                throw Error("You are not master");
            }
            return prisma.applications({
                where: {
                    club: club
                }
            });
        }
    }
}

