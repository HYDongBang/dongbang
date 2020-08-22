import { prisma } from "../../../../generated/prisma-client";

export default {
    Mutation: {
        createClub: async(_, args) => {
            const { name, bio, description, type, id } = args;
            const club = await prisma.createClub({ 
                name, 
                bio, 
                description, 
                type,
                master: {
                    connect: {
                        id
                    }
                },
                members: {
                    connect: [{
                        id
                    }]
                }
            })
            return club;
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