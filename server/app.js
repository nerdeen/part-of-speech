const express=require('express');
const http= require('http');
const words=require('../TestData.json');
const app= express();
const server= http.createServer(app);
const port = 3001;
server.listen(port, () => console.log("Listening on port 3001"));
const cors=require("cors");
// get the wordlist from the json file
const corsOptions ={
  origin:'*', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200,
}

app.use(cors(corsOptions))
const randomWords=()=>{
    var ChoosenWords=[];
    var temp_ids=[];
    var temp_pos=[];
    while(temp_ids.length<10){
        var randomItem = words.wordList[Math.floor(Math.random()*words.wordList.length)];
        if (temp_ids.indexOf(randomItem.id) == -1){
            temp_pos.push(randomItem.pos);
            temp_ids.push(randomItem.id);
            ChoosenWords.push(randomItem);
        }
    }
    return(ChoosenWords);
}
const calculateRank=(percentageScore)=>{
    var Rank=0;
    console.log("percentageScore",percentageScore);
    for (let i=0 ; i<words.scoresList.length;i++){
      if(percentageScore>words.scoresList[i]){
        Rank+=1;
      }
    }
    console.log("Rank",Rank);
    Rank=Math.round((Rank/words.scoresList.length)*100);
    return Rank;
  }
  
app.get('/words',(req,res)=>{
    ChoosenWords=randomWords();
    res.send(ChoosenWords);
});

app.post('/rank/:score',(req,res)=>{
    var score=req.params.score;
    var Rank=calculateRank(score); 
    console.log("rank in server:",Rank);
    res.send([Rank]);  
});