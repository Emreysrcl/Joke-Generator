import axios from "axios";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/" , async  (req,res)=>{
  try{
    const result = await axios.get("https://v2.jokeapi.dev/joke/Any");
    res.render("index.ejs",{
    category : result.data.category,
    
    joke: result.data.joke,
    setup : result.data.setup  ,
    delivery : result.data.delivery
    });
  }
  catch(error){
    console.log(error.result.data);
    res.status(500);
  }
})
  

app.listen(port , ()=>{
    console.log(`Server is running on http://localhost:${port}`);
})