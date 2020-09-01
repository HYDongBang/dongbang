import { prisma } from "../../../../generated/prisma-client";
// application
// user, club  
export default {
    Mutation:{
        deleteMember: async(_, args, {request, isAuthenticated}) => {
            const { uid } = args;
            const { user } = request;
            const clubMaster = await prisma.user({id:user.id}).isMaster().master();
            //해당 클럽의 마스터인지 확인 
            console.log(clubMaster);
            if(clubMaster.id === user.id ){
                    // user의 club에 해당 클럽 추가해주기
                    const club = await prisma.user({id:user.id}).isMaster();
                    console.log(club);
                    await prisma.updateUser({
                        data:{ 
                            clubs: 
                                { 
                                    disconnect:[{
                                        id: club.id,
                                    }],
                                },
                            },
                        where: { id: uid },
                    })
                    await prisma.createNotification({
                        user: {connect: {
                            id: uid
                        }},
                        content: `${club.name}동아리에 탈퇴당했씁니다.`
                    })
                    return await prisma.user({id:uid});
            }
            else{
                throw Error("You are not Club Master of Application")
            }
        }
    }
}