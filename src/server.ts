import config from "../knexfile";
import initializeDb from "./config/database/db";
import { User } from "./models/user/User";
import { Model } from "objection";


async function main(){
    // const insert = await User.query().insert({
    //     email:"test@mail.com",
    //     display_name:'Test',
    //     password_hash:'dummy',
    //     about_me:"About me, I am cool",
    //     location:'Accra, Ghana'
    // })

    initializeDb()

    const results = await User.query()

    console.log(results)

    
}

main()