const express = require('express')
const ExpressMongoSanitize = require('express-mongo-sanitize')
const xss = require('xss-clean')
const helmet = require('helmet')
const { rateLimit } = require('express-rate-limit')
const cors = require('cors')
const compression = require('compression')
const dotenv = require('dotenv')
const path = require('path')
const hpp = require('hpp')

const database = require('./config/database')
const routesMount = require('./routes')
const ApiError = require('./utils/apiError')

const app = express()

// Env
dotenv.config({ path: 'config.env' })
// Parse Str as Json Middleware
app.use(express.json())

// Enable other domains to access myApp
app.use(cors());
app.options('*', cors());
app.enable('trust proxy');

// Upload Img
app.use(express.static(path.join(__dirname, 'uploads'))) /* Serve Img */

// Protect Parameters
app.use(hpp({ whitelist: ['age', 'price', 'paid', 'restOfPrice'] }));

// To remove data using Data Sanitize:
app.use(ExpressMongoSanitize());
app.use(xss())

// Use Helmet!
app.use(helmet());

// Compress all response
app.use(compression())

// const limiter = rateLimit({
//     windowMs: 5 * 60 * 1000, // 5 minutes
//     limit: 20, // Limit each IP to 20 requests per `window` (here, per 5 minutes)
//     standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
//     legacyHeaders: false, // Disable the `X-RateLimit-*` headers
//     message: { status: "Fail", msg: `Too many requests have been made. Please wait 10 minutes` }
// })
// app.use('/api', limiter) /* use with all requests start with /api */

// Mongoose DB
database()

// Routes
routesMount(app)

// Error Handles
app.all('*', (req, res, next) => {
    const err = new Error(`Can't find ${req.originalUrl}`)
    next(new ApiError(err), 400)
})
app.use((err, req, res, next) => {
    res.status(400).json(
        process.env.NODE_ENV === "development" ?
            {
                status: err.status || "error",
                message: err.message,
                stack: err.stack
            } :
            {
                status: err.status || "error",
                message: err.message,
            }
    )
})

const server = app.listen(process.env.PORT, () => {
    console.log("Working....")
})

process.on('unhandledRejection', (err) => {
    console.log(`Rejection Error: ${err}`)
    server.close(() => { process.exit(1) })
})
