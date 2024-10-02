import 'dotenv/config'
import express from 'express'
import { clerkClient, getAuth, requireAuth } from '@clerk/express'
import cors from 'cors'

const app = express()
app.use(cors());
app.use(express.json());

app.get('/protected', requireAuth({ signInUrl: '/sign-in' }), async (req, res) => {
    const { userId } = getAuth(req)
    const user = await clerkClient.users.getUser(userId)
    console.log(user) //what happens?
    return res.json({ user })
})

app.get('/sign-in', (req, res) => {
    // Assuming you have a template engine installed and are using a Clerk JavaScript SDK on this page
    res.render('sign-in')
})

app.listen(3000, () => {
    console.log(`Example app listening at http://localhost:3000`)
})