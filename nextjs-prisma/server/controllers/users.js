// import prisma from "@/lib/prisma";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient()

export async function createUser() {
    try {
        const user = await prisma.users.create({
            data: {
                name: "Dibyendu",
                email: "abc@gmail.com",
                password: "1234"
            }
        })
    }
    catch (err) {
        console.error("Connection lost", err)
    }
}
createUser() 