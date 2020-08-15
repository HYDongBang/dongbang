import { prisma } from "../../../../generated/prisma-client";
const CHECK = "CHECK";
const DELETE = "DELETE";

export default {
    Mutation:{
        editNotification: async(_, args, {request}) => {
            const { id, action } = args;
            const notification = await prisma.$exists.notification({id}) // 추후에 user: { id: user.id}
            if(notification){
                if(action === CHECK){
                return prisma.updateNotification(
                    {
                        data:{checked: true},
                        where: { id }
                    }
                )
                }else if (action == DELETE){
                    return prisma.deleteNotification({id});
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