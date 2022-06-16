import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import cookie from "cookie"
import {NextApiRequest, NextApiResponse} from "next"
import prisma from "../../lib/prisma"

export default async (req: NextApiRequest, res: NextApiResponse) => {
    // const prisma = new PrismaClient()
    const salt = bcrypt.genSaltSync()
    const {email, password} = req.body

    let user

    try {
        user = await prisma.user.create({
            // @ts-ignore
            data: {
                email,
                password: bcrypt.hashSync(password, salt),
            }
        })
    } catch (e) {
        res.status(401)
        res.json({error: "Email already in use"})
        return
    }

    const token = jwt.sign({
        email: user.email,
        id: user.id,
        time: Date.now(),
    },
    "hello",
    {expiresIn: "8h"})

    res.setHeader(
        "Set-Cookie",
        cookie.serialize("ACCESS_TOKEN", token, {
            httpOnly: true,
            maxAge: 60 * 60 * 8,
            path: "/",
            sameSite: "lax",
            secure: process.env.NODE_ENV === "production",
        })
    )
    res.json(user)
}