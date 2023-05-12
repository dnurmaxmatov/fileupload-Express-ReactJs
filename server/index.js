import express from 'express'
import fileUpload from 'express-fileupload'
import cors from 'cors'
import path from 'path'
const app=express()
app.use(express.json())
app.use(cors())
app.use(fileUpload())


app.post('/',async (req,res)=>{
    console.log(req.files);
    const file=req.files.screenshot
    const fileName=Date.now()+'_'+req.files.screenshot.name;
    let uploadPath=path.join(process.cwd(),  "uploads", fileName)
    console.log(uploadPath);
    await file.mv(uploadPath, (error)=>{
        if(error){
            console.log('aaa');
            return res.send(error)

        }
    })
    return res.send('ok')
})
app.get('/', (req,res)=>{
    res.send('Up and running')
})

app.listen(4000, ()=>{console.log('Server is running 4000');})