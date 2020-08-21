import { prisma } from "../../../../generated/prisma-client"

export default {
    Query: {
        seeMyApplications: async (_, args, {request, isAuthenticated}) => {
            const { user } = request;
            isAuthenticated(request);
            return prisma.applications({
                where: {
                    user: user
                }
            });
        }
    }
}

