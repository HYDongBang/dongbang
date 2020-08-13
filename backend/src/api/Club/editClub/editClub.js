import { prisma } from "../../../../generated/prisma-client";
const DELETE = "DELETE";
const EDIT = "EDIT";
export default {
    Mutation:{
        editClub: async(_, args, {request}) => {
            const { name, id, description, bio, action } = args;
            const club = await prisma.$exists.club({id}) // 추후에 user: { id: user.id}
            if(club){
                if(action === EDIT){
                return prisma.updateClub(
                    {
                        data:{description, bio, name},
                        where: { id }
                    }
                )
                }else if (action == DELETE){
                    return prisma.deleteClub({id});
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