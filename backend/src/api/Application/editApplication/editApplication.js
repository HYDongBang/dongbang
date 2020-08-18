import { prisma } from "../../../../generated/prisma-client";
const PASS = "PASS";
const CHECK = "CHECK";
const FAIL = "FAIL";
const DELETE = "DELETE";

// application
// user, club  

export default {
    Mutation:{
        editApplication: async(_, args, {request, isAuthenticated}) => {
            const { id, action } = args;
            const { user } = request;
            const clubMaster = await prisma.application({id}).club().master();
            //해당 클럽의 마스터인지 확인 
            if(clubMaster.id === user.id ){
                if(action === PASS){
                    // user의 club에 해당 클럽 추가해주기
                    const club = await prisma.application({id}).club();
                    const applicant = await prisma.application({id}).user();
                    await prisma.updateUser({
                        data:{ 
                            clubs: 
                                { 
                                    connect:[{
                                        id: club.id,
                                    }],
                                },
                            },
                        where: { id: applicant.id },
                    })
                    await prisma.createNotification({
                        user: {connect: {
                            id: applicant.id
                        }},
                        content: `${club}동아리에 합격하셨습니다.`
                    })
                    return prisma.updateApplication(
                        {
                            data:{status:PASS},
                            where: { id }
                        }
                    )
                }else if (action == CHECK){
                    return prisma.updateApplication(
                        {
                            data:{status:CHECK},
                            where: { id }
                        }
                    )
                }
                else if (action == FAIL){
                    const club = await prisma.application({id}).club();
                    const applicant = await prisma.application({id}).user();
                    await prisma.createNotification({
                        user: {connect: {
                            id: applicant.id
                        }},
                        content: `${club}동아리에 불합격하셨습니다.`
                    })

                    return prisma.updateApplication(
                        {
                            data:{status:FAIL},
                            where: { id }
                        }
                    )
                }
                else if (action == DELETE){
                    return prisma.updateApplication(
                        {
                            data:{status:DELETE},
                            where: { id }
                        }
                    )
                }
                else{
                    throw Error("Maybe your action is wrong");
                }
            }else{
                throw Error("You are not Club Master of Application")
            }
        }
    }
}

//localhost 수정
// # mutation{
//     #   editClub(
//     #     id:"ckdld680s0idb09853g5av4k5",
//     #     name: "멋쟁이 호랑이처럼"
//           action: EDIT
//     #   ){
//     #     id,
//     #     name
//     #   }
//     # }

// 삭제는 그냥 id부여 후, action:DELETE만 하면 됨

// 필기 onDelete: CASCADE