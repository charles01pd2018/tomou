import jwt from 'next-auth/jwt';

export const onAuth =  async ( req, res, next ) => {
    const token = await jwt.getToken( { req, secret: process.env.JWT_SECRET } );

    if ( token ) { // user is already signed in, allow access
        req.user = token;
        next(); 
    } else { // user is not signed in, do not allow access
        res.status(401).end();
    }
}