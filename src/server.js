import "./env";
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";
import "./passport";
import { authenticateJwt } from "./passport";


const PORT = process.env.PORT || 4000;

const server = new GraphQLServer({
    schema, // typeDefs
    context: ({ request }) => ({ request }) // resolver
  });

server.express.use(logger("dev"));
server.express.use(authenticateJwt);

server.start({ port: PORT }, () =>
  console.log(`Server running on  http://localhost:${PORT}`)
);
