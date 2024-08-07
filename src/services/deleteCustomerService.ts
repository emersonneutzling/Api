import prismaClient from "../prisma";

interface deleteCustomerProps{
    id:string;
}

class deleteCustomerService{
    async execute({ id }: deleteCustomerProps){
        if(!id){
            throw new Error("Solicitação invalida.")
        }

        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id
            }
        })
        if(!findCustomer){
            throw new Error("Cliente não existe!")
        }

        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id
            }
        })

        return { message: "Deletado com Sucesso!" }
    }
}

export { deleteCustomerService }