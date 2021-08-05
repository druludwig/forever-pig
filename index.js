const express = require("express");
const app = express();

const PORT = process.env.PORT || 3001

app.get('/', (req,res)=>{
    res.send("This thing is on")
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});