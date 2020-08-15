import { prisma } from "../../../../generated/prisma-client";

const DELETE = "DELETE";
const EDIT = "EDIT";

export default {
    Mutation:{
        editQuestion: async(_, args, {request}) => {
            const { subject, id, action } = args;
            const question = await prisma.$exists.question({id}) 
            // 추후에 user: { id: user.id}
            if(question){
                if(action === EDIT){
                    return prisma.updateQuestion(
                        {
                            data:{subject},
                            where: { id }
                        }
                    )
                }else if (action == DELETE){
                    return prisma.deleteQuestion({id});
                }
            }else{
                throw Error("You can't do that");
            }
        }
    }
}

//localhost 수정
// # mutation{
//     #   editQuestion(
//     #     id:"ckdld680s0idb09853g5av4k5",
//     #     subject: "주로 사용하는 언어는 무엇인가요?"
//           action: EDIT
//     #   ){
//     #     id,
//     #   }
//     # }

// 삭제는 그냥 id부여 후, action:DELETE만 하면 됨
// 필기 onDelete: CASCADE