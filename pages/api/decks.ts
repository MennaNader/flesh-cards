// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import PrismaClient from 'prisma';

type Data = {
    name: string
}

const prisma = new PrismaClient()

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<Data>
) => {
    try{
    await prisma.deck.create({
        data: {
          name: req.body.name
        },
      })
      
      const decks = await prisma.deck.findMany()

    res.status(200).json({ decks })
    }
    catch(e){
        res.status(500).json({ e })
    }
}

export default handler