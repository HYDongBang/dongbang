import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createQuestion: async(_, args, {request, isAuthenticated}) => {
            isAuthenticated(request);
            const { user } = request;
            const club = await prisma.user({id:user.id}).isMaster();
            const clubId = club.id
            const { subject, type, options} = args;
            const question = await prisma.createQuestion({
                subject,
                type,
                options:{set:options},
                owner: {
                    connect: {
                        id: clubId
                    }
                }
            })
            return question;
        }
    }
}

// playground
// # mutation {
//     #   createQuestion(data:{
//     #     owner:{
//     #       connect:{id:"ckdld680s0idb09853g5av4k5"},
//     #     },
//     #     subject: "지원동기는 무엇인가요?",
//     #     type: "essay"
//     #   }){
//     #     id
//     #   }
//     # }

// localhost
