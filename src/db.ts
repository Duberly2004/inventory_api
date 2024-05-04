import mongosee from 'mongoose';
import { DB_URI } from './config/globalConstants';

mongosee.connect(DB_URI);
const conection = mongosee.connection
conection.once('open',()=>{
    console.log('Database connected')
})
conection.on('error',()=>{
    console.log("Error database connect")
    process.exit()
})