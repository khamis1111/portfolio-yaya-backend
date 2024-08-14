const userInfoRoute = require('./userInfoRoute')
const workRoute = require('./workRoute')
const contactRoute = require('./contactRoute')
const diaryRoute = require('./diaryRoute')
const reelsRoute = require('./reelsRoute')
const reelsCommentsRoute = require('./reelsCommentsRoute')
const authRoutes = require('./authRoutes')

const routesMount = (app) => {
    app.use('/api/v1/userInfo', userInfoRoute)
    app.use('/api/v1/work', workRoute)
    app.use('/api/v1/contact', contactRoute)
    app.use('/api/v1/diary', diaryRoute)
    app.use('/api/v1/reels', reelsRoute)
    app.use('/api/v1/reelsComments', reelsCommentsRoute)
    app.use('/api/v1/auth', authRoutes)
}

module.exports = routesMount