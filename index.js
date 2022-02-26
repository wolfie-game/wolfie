const {app} = require('./build/server.js')
const PORT = process.env.PORT || 9001

app.listen(PORT, () => {
    console.log('Application is started on localhost:', port)
})
