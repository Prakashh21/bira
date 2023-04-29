
import { createJWT, hashPassword } from "@/lib/auth";
import { NextApiRequest, NextApiResponse } from "next";
import {serialize} from 'cookie'
import { db } from "@/lib/db";

export default async function register(req: NextApiRequest , res: NextApiResponse){

console.log("logging in request object of register api",req.body.firstName)
console.log("logging in request object of register api",req.body.lastName)
console.log("logging in request object of register api",req.body.password)
const samplePass = await hashPassword(req.body.password)
console.log("logging in request object of register api -----> ", samplePass)
    if(req.method === 'POST'){
        const user = await db.user.create({
            data: {
                email: req.body.email,
                password: await hashPassword(req.body.password),
                firstName: req.body.firstName,
                lastName: req.body.lastName
            },
        })

        const jwt = await createJWT(user)

        res.setHeader(
            "Set-Cookie",
            serialize(process.env.COOKIE_NAME, jwt, {
              httpOnly: true,
              path: "/",
              maxAge: 60 * 60 * 24 * 7,
            })
          );
          res.status(201);
          res.json({});
    }else {
        res.status(402)
        res.json({})
    }
}

