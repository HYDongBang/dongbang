import { prisma } from "../../../../generated/prisma-client";
const UPDATE = "UPDATE";
const DELETE = "DELETE";
export default {
    Mutation:{
        editSubComment: async(_, args, {request, isAuthenticated}) => {
            const { id, action, content } = args;
            const { user } = request;
            const writer = await prisma.subComment({id}).user();

            if(writer.id === user.id ){
                if(action === UPDATE){
                    return await prisma.updateSubComment({
                        data:{ 
                            content,
                        },
                        where: { id },
                    })
                }else if (action == DELETE){
                    return prisma.updateSubComment(
                        {
                            data:{status:DELETE},
                            where: { id }
                        }
                    )
                }
                else{
                    throw Error("Maybe your action input is wrong");
                }
            }else{
                throw Error("You are not Writer of this SubComment")
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