import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createApplication:  async(_, args, { request, isAuthenticated }) => {
            const { user } = request;
            isAuthenticated(request);
            
            const { cid, answers } = args;
            const application = await prisma.createApplication({ 
                user: { connect:{
                    id : user.id
                }},
                club: { connect:{
                    id : cid
                }},
                answer : { set : answers },
            })
            const masterId = await prisma.club({id: cid}).master().id();
            const club = await prisma.club({id: cid}).name();
            await prisma.createNotification({
                user: {connect: {
                    id: user.id
                }},
                content: `${club}동아리에 지원이 완료되었습니다.`
            })
            await prisma.createNotification({
                user: {connect: {
                    id: masterId
                }},
                content: `${user.name}님이 동아리에 지원했습니다..`
            })
            return application;
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