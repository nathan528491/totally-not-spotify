import {NextApiRequest, NextApiResponse} from "next"
import jwt from "jsonwebtoken"
import prisma from "./prisma"

export const validateRoute = (handler) => {
    return async (req: NextApiRequest, res: NextApiResponse) => {
        const token = req.cookies.ACCESS_TOKEN

        if (token) {
            let user

            try {
                const {id} = jwt.verify(token, "hello")
                user = await prisma.user.findUnique({
                    where: {id},
                })

                if (!user) {
                    throw new Error("User Not Found")
                }
            } catch (error) {
                res.status(401)
                res.json({error: "Not Authorized"})
                return
            }

            return handler(req, res, user)
        }

        res.status(401)
        res.json({error: "Not Authorized"})
    }
}

export const validateToken = token => {
    return jwt.verify(token, "hello")
}