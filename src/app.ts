import express, { Application, NextFunction, Request, Response } from 'express'
import cors from 'cors'

import globalErrorHandler from './app/middlewares/globalErrorHandler'
import cookieParser from 'cookie-parser'
import httpStatus from 'http-status'
import router from './app/routes'

const app: Application = express()

app.use(cors())
app.use(cookieParser())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/api/v1/', router)

app.get('/', (req, res) => {
  res.send('Welcome to Book Catalog')
})
app.use(globalErrorHandler)

app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
    success: false,
    message: 'Not Found',
    errorMessages: [
      {
        path: req.originalUrl,
        message: 'API Not Found',
      },
    ],
  });
  next();
});


export default app
