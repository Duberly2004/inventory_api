import express from 'express'
import { API_PORT, API_URL } from './config/globalConstants'
import indexRoutes from './routes/index.routes'
import morgan from 'morgan'
import passport from "passport";
import passportMiddleware from "./middlewares/passport";
import './db'
const app = express()
app.use(morgan('dev'))
app.use(express.json())
passport.use(passportMiddleware);
app.use('/api/',indexRoutes)
app.listen(API_PORT,()=>console.log(API_URL))