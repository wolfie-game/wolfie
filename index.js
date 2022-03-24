const {app} = require('./build/server.js')
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log('Application is started on localhost:', PORT)
})
