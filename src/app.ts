import express, { Request, Response, NextFunction } from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/welcome', (req: Request, res: Response, next: NextFunction) => {
//     res.send('welcome!')
// })

const api = require('./routes/init')
app.use('/api', api)

app.listen('8000', () => {
    console.log(`
  ################################################
      🛡️  Server listening on port: 8000  🛡️
  ################################################
`)
})