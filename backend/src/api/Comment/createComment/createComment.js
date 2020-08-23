import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createComment:  async(_, args, { request, isAuthenticated }) => {
            const { user } = request;
            isAuthenticated(request);

            // 클럽멤버인지 확인하는 코드 필요
            //const member = await prisma.club({id: cid}).members();
            //console.log(member)

            const { pid, content } = args;
            const comment = await prisma.createComment({ 
                post: { connect:{
                    id : pid
                }},
                user: { connect:{
                    id : user.id
                }},
                content : content,
            })

            // 추후에 글쓴이에게 노티피케이션 보냄
            // 답글 기능을 만들어야 하나?
            // const club = await prisma.club({id: cid}).name();
            //     if(type === NOTIFICATION){
            //     await prisma.createNotification({
            //         user: {connect: {
            //             id: user.id
            //         }},
            //         content: `${club}동아리에 지원이 완료되었습니다.`
            //     })
            // }
            //     await prisma.createNotification({
            //         user: {connect: {
            //             id: masterId
            //         }},
            //         content: `${user.name}님이 동아리에 지원했습니다..`
            //     })
            return comment;
        }
    }
}

// playground
// # mutation {
//     #   createClub(data:{
//     #     name:"멋쟁이사자처럼",
//     #     bio:"동방만들자",
//     #     description:"프리즈마자료가너무적잖아",
//     #     master:{connect:{id:"ckdlc5ca90eqw0985bvn663di"}},
//     #     type:"타입",
//     #   }){
//     #     id
//     #   }
// # }

//localhost:4000
// mutation {
// createClub(name:"dd", bio:"bio", description: "desc", type:"type", id:"ckdpitulzm4sm0a50jc5xt1n5") {
//     id
//   }
// }