import * as dotenv from "dotenv";

dotenv.config();

const configs = {
        accessTokenSigningOptions:{
        issuer:'mychats',
        expiresIn:'5m',
        algorithm:'RS256'
    },
    accessTokenVerifyOptions:{
        issuer:'mychats',
        expiresIn:'5m',
        algorithm:'RS256'
    },
    refreshTokenSigningOptions:{
        issuer:'mychats',
        expiresIn:'1y',
        algorithm:'RS256'
    },
    refreshTokenVerifyOptions:{
        issuer:'mychats',
        expiresIn:'1y',
        algorithm:'RS256'
    },
    keys:{
        accessTokenPublicKey:process.env.ACCESS_TOKEN_PUBLIC_KEY,
        accessTokenPrivateKey:process.env.ACCESS_TOKEN_PRIVATE_KEY,
    
        refreshTokenPrivateKey:process.env.REFRESH_TOKEN_PRIVATE_KEY,
        refreshTokenPublicKey:process.env.REFRESH_TOKEN_PUBLIC_KEY,
    },
   
    salt:process.env.SALT,

    port:process.env.PORT
    
}

export default configs