import { prisma } from "../../../generated/prisma-client";
import { GraphQLDateTime } from "graphql-iso-date";

 export default {
   User: {
     isMaster: (parent) => prisma.user({id:parent.id}).isMaster(),
     applications: (parent) => prisma.user({id:parent.id}).applications(),
     rooms: (parent) => prisma.user({id:parent.id}).rooms(),
     notifications: (parent) => prisma.user({id:parent.id}).notifications(),
     clubs: (parent) => prisma.user({id:parent.id}).clubs()
   },
   Club: {
     questions: (parent) => prisma.club({id: parent.id}).questions(),
     master: (parent) => prisma.club({id: parent.id}).master(),
     applications: (parent) => prisma.club({id: parent.id}).applications(),
     clubImage: (parent) => prisma.club({id: parent.id}).clubImage(),
     members: (parent) => prisma.club({id: parent.id}).members()
   },
   Room: {
     participants: (parent) => prisma.room({id: parent.id}).participants(),
     messages: (parent) => prisma.room({id: parent.id}).messages(),
   },
   Message: {
     from: (parent) => prisma.message({id: parent.id}).from(),
     to: (parent) => prisma.message({id: parent.id}).to(),
     room: (parent) => prisma.message({id: parent.id}).room()
   },
   Question: {
     owner: (parent) => prisma.question({id: parent.id}).owner()
   },
   Application: {
     user: (parent) => prisma.application({id: parent.id}).user(),
     club: (parent) => prisma.application({id: parent.id}).club()
   },
   Notification: {
     user: (parent) => prisma.notification({id: parent.id}).user()
   },
   File: {
     club: (parent) => prisma.file({id: parent.id}).club()
   },
 };
