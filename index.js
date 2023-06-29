// importing json server
const jsonserver = require('json-server')
// create json server app
const server = jsonserver.create()
// set up file/route for db.json
const router = jsonserver.router('db.json')
// middleware
const middleware = jsonserver.defaults()
// set up port
const port = process.env.PORT || 3000
// router and middleware
server.use(middleware)
server.use(router)
// usin port
server.listen(port,()=>{
    console.log(`server app started${port}`);
})
