const express = require ('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000;

app.use(bodyParser.json());

let tasks=[];

app.get('/', (req,res)=>{
    res.json(tasks);
})

app.post('/task',(req,res)=>{
    const {task} = req.body;
    if(task){
        tasks.push(task);
        res.json({
            message:"Task added successfully",
            tasks
        })
    }
    else{
        res.json({
            message:"Error! Taks not found"
        })
    }
})

app.delete('/task/:id',(req,res)=>{
    const taskId = parseInt(req.params.id);
    if(!isNaN(taskId) && taskId>=0 && taskId<=tasks.length){
        tasks.splice(taskId,1);
        res.json({
            message:"Tasks update successfully",
            tasks
        })
    }
    else{
        res.json({
            message:"No task found"
        })
    }
})

app.listen(port,()=>{
    console.log(`Listening on port: ${port}`);
});