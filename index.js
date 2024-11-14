const express=require("express");
const app=express();

let port=8080;
app.listen(port,()=>{
    console.log(`app is listening on ${port}`);
});

// app.use((req,res)=>
// {
//     console.log("request recieved");
//     let code="<h1>Fruits</h1><ul><li>apple</li><li>pineapple</li></ul>";
//     res.send(
//         // {
//         //    name:"Apple" ,
//         //     color:"red",
//         // }
//         code
//     );
// });

app.get("/",(req,res)=>
{
    res.send("you contacted root path");
});

app.get("/apple",(req,res)=>
{
    res.send("you contacted apple path");
});

app.get("/orange",(req,res)=>
{
    res.send("you contacted orange path");
});

app.get("*",(req,res)=>
{
    res.send("This path is not defined");
});

app.get("/:username/:id",(req,res)=>
{
    // console.log(req.params);
    // res.send("hello i am root")
    let {username,id}=req.params;
    res.send(`welcome to the @${username}.`)
});

app.get("/search",(req,res)=>
{
    // console.log(req.query);
    let { q}=req.query;
    res.send(`search results for Q:=${q}`);
})