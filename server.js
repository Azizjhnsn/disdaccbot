const express = require('express');
require('dotenv').config()
const App = express()
const Port = process.env.PORT || 4005



App.listen(Port, ()=>{
    console.log(`Server runnig on port: http://localhost:${Port}`);
})