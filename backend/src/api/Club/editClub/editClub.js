import { prisma } from "../../../../generated/prisma-client";
const DELETE = "DELETE";
const EDIT = "EDIT";
export default {
    Mutation:{
        editClub: async(_, args, {request, isAuthenticated}) => {
            const {name , description, application_description, bio, action} = args;
            isAuthenticated(request);
            const { user } = request;
            const club = await prisma.user({id:user.id}).isMaster();
            const clubId = club.id
            if(club){
                if(action === EDIT){
                return prisma.updateClub(
                    {
                        data:{description, bio, name, application_description},
                        where: { id:clubId }
                    }
                )
                }else if (action == DELETE){
                    return prisma.deleteClub({clubId});
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
