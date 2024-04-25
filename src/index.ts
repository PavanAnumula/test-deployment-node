import express from "express";

const app = express();

app.get("/", (req,res) => {
	res.send("Super , Your node app is deployed");
});


app.listen(8080,()=>{
    console.log("app is listening on port 30000")
})