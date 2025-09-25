import passport from "passport";
import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import { JWT_SECRET } from "../utils/jwt.js"

const JWTStrategy = Strategy;
const JWTExtract = ExtractJwt;

export const initializePassport = () => {

    const cookieExtractor = req => {
        let token = null;
        if (req && req.cookies) {
            token = req.cookies['token'];
        }
        return token;
    }

    passport.use('jwt', new JWTStrategy({
        jwtFromRequest: JWTExtract.fromExtractors([cookieExtractor]),
        secretOrKey: JWT_SECRET
    }, async (jwt_payload, done) => {
        try {
            return done(null, jwt_payload,{messages:'Esto es un error'});
        } catch (error) {
            return done(error);
        }
    }))
}



