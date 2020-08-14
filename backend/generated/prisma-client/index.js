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
    name: "Notification",
    embedded: false
  },
  {
    name: "Application",
    embedded: false
  },
  {
    name: "Club",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  },
  {
    name: "Question",
    embedded: false
  },
  {
    name: "Room",
    embedded: false
  },
  {
    name: "Message",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/zxcvb5434-9d2756/dongbang/dev`
});
exports.prisma = new exports.Prisma();
