import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply} from "fastify";
import { createCustomerController } from "./controllers/createCustomerController";
import { listCustomerController } from "./controllers/listCustomerController";



export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return{ ok: true}  
    })

    fastify.post("/customer", async (request: FastifyRequest, reply: FastifyReply) => {
        return new createCustomerController().handle(request, reply)
    })

    fastify.get("/customers", async (request: FastifyRequest, reply: FastifyReply) => {
        return new listCustomerController().handle(request, reply)
    })
}