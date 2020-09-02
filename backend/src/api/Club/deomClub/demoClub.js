import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        demoClub: async(_, args) => {
            const { name, bio,email } = args;
            const type = "학술"
            const user = await prisma.users({where:{email:email}});
            const id = user[0].id;
            const application_description="default";
            const description="default";
            console.log(id);
            const club = await prisma.createClub({
                name,
                bio,
                description,
                type,
                application_description,
                master: {
                    connect: {
                        id
                    }
                },
                members: {
                    connect: [{
                        id
                    }]
                }
            })
            return club;
        }
    }
}
