import {Strategy,ExtractJwt,StrategyOptions} from 'passport-jwt'
import { SECRET_KEY } from '../config/globalConstants'
import User from '../models/User'

const opts: StrategyOptions = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:SECRET_KEY
}
export default new Strategy(opts, async (payload,done)=>{
    try {
        const user = await User.findById(payload._id)
        if(user){
            return done(null,user)
        }
        return done(null,false) 
    } catch (error) {
        console.log(error)
    }
})