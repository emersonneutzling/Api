import { FastifyRequest, FastifyReply } from "fastify";
import { listCustomerService } from "../services/listCustomerService";

class listCustomerController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listCustomersService = new listCustomerService();

        const customers = await listCustomersService.execute();

        reply.send(customers);
    }
}

export {listCustomerController}