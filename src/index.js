import { connectDB } from "./db/connection.db.js";
import { app } from "./app.js";
import {config} from 'dotenv'

config()

connectDB().then(()=> {
    app.use(cors())
    app.listen(8080, ()=> {
        console.log('Server is listening on PORT 8080')
    })
}).catch(()=> {
    console.log('Unable to start the server')
})