import { FastifyRequest, FastifyReply } from "fastify";
import { createCustomerService } from "../services/createCustomerService";

class createCustomerController{
    async handle(request:FastifyRequest, reply:FastifyReply){
        const {name, email} = request.body as {name:string, email:string};
        console.log(name);
        console.log(email);

        const customerService = new createCustomerService()
        const customer = await customerService.execute({name, email});

        reply.send(customer)
    }
}

export {createCustomerController}