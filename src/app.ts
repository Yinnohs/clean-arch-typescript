import express from "express";
import cors from 'cors'
import morgan from 'morgan'
import helmet from "helmet"; 

const app = express()



app.use(helmet())
app.use(cors({origin:'*'}))
app.use(morgan('short'))


export { app }

