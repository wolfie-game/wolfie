const {app} = require('./build/server.js')
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log('Application is started on localhost:', PORT)
})
