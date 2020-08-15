import { prisma } from "../../../../generated/prisma-client";
const PASS = "PASS";
const CHECK = "CHECK";

export default {
    Mutation:{
        editApplication: async(_, args, {request}) => {
            const { id, action } = args;
            console.log(id, action);
            const application = await prisma.$exists.application({id}) // 추후에 user: { id: user.id}
            if(application){
                if(action === PASS){
                    // user의 club에 해당 클럽 추가해주기
                    
                    // await prisma.createNotification({
                    //     user: {connect: {
                    //         id: uid
                    //     }},
                    //     content: `${club}동아리에 지원이 완료되었습니다.`
                    // })

                    return prisma.updateApplication(
                        {
                            data:{isPass:true},
                            where: { id }
                        }
                    )
                }else if (action == CHECK){
                    return prisma.updateApplication(
                        {
                            data:{checked:true},
                            where: { id }
                        }
                    )
                }
            }else{
                throw Error("You can't do that");
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