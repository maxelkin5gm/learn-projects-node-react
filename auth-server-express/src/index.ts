import dotenv from 'dotenv'
import Express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import {rootRouter} from "./router/rootRouter";
import {errorMiddleware} from "./middlewares/errorMiddleware";
import {LogUtility} from "./utilities/LogUtility";
import {Database} from "./datebase/Database";


dotenv.config()
export const db = new Database()

const app = Express()
const PORT = process.env.PORT || 8080

// middlewares
app.use(Express.json());
app.use(cookieParser())
app.use(cors({credentials: true, origin: process.env.CORS_ORIGIN}))


app.use('/api', rootRouter);

app.use(errorMiddleware)


app.listen(PORT, () => LogUtility.info(`Server started ---> http://localhost:${PORT}`))