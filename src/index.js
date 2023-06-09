const express = require('express');
const { ServerConfig, Logger } = require('./config')
const bodyParser = require('body-parser');
const apiRoutes = require('./routes');
const app = express();

app.use(bodyParser.json());
bodyParser.urlencoded({extended:true});
console.log(`${ServerConfig.PORT}`)
app.use('/api', apiRoutes);
app.listen(ServerConfig.PORT, ()=>{
    console.log(`started successfully on port : ${ServerConfig.PORT}`);
    Logger.info("Successfully started the server", "root", {})
});
