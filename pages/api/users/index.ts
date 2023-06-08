import { NextApiRequest, NextApiResponse } from "next"

import prisma from "@/libs/prismadb"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if (req.method !== 'GET') return res.status(405).end(
        JSON.stringify(`Method ${req.method} Not Allowed`)
    )

    try {
        const users = await prisma.user.findMany({
            orderBy: {
                createdAt: 'desc'

            }
        })
        return res.status(200).json(users)
    } catch (error) {
        console.error(error)
        res.status(400).end()
    }    

}