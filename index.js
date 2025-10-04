import express from 'express'

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/',(req , res)=>{
    return res.json({message : "Welcome localhost"})
})
app.listen(PORT , ()=>{
    console.log(`Sever running on port ${PORT}`)
})