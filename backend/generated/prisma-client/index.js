"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Club",
    embedded: false
  },
  {
    name: "Room",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Application",
    embedded: false
  },
  {
    name: "Notification",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Post",
    embedded: false
  },
  {
    name: "Comment",
    embedded: false
  },
  {
    name: "SubComment",
    embedded: false
  },
  {
    name: "Secret",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `http://localhost:4466`
});
exports.prisma = new exports.Prisma();
