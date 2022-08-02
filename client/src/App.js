import Button from "./components/Button";
import ProgressBar from "./components/ProgressBar";
import Header from "./components/Header";
import Rank from "./components/Rank";
import {useState,useEffect} from 'react'
import {getWords,getRank} from './Requests';
import './index.css';

function App() {
  useEffect(()=>{
    const getWordList=async()=>{
      const res=await getWords();
      setWordList(res);
    }
    getWordList();
  },[])
  
  const setRank=async(percentageScore)=>{
    const res=await getRank(percentageScore);
    setMyRank(res);
    }
    
  var percentageScore = 0;
  const [showCorrect, setShowCorrect] = useState(false);
  const [showIncorrect, setShowIncorrect] = useState(false);
  const [finalQuestion, setFinalQuestion] = useState(false);
  const [progress,setProgress]=useState(0);
  const [score,setScore]=useState(0); 
  const [counter, setCounter] = useState(0);
  const [myrank,setMyRank]=useState(0);
  const [wordList,setWordList]=useState([]);
  // calculating score and progress 
  const onclick=(event)=>{
    if (counter<10){
      setCounter(count => count + 1);
      console.log("counter: ",counter);
      setProgress(((counter+1)/10)*100);
      if (wordList[counter].pos===event.currentTarget.id){
        setShowIncorrect(false);
        setShowCorrect(true);
        setScore(sc=>sc+1);
      }
      else{
        setShowCorrect(false);
        setShowIncorrect(true);
      } 
    }
    if (counter===9){
      setFinalQuestion(true);
      percentageScore=((score)/10)*100;
      setRank(percentageScore);
    }
  }
  // repeat quiz if user wants to
  const repeatQuiz=()=>{
    setFinalQuestion(false);
    window.location.reload(true);
  }
  return (

      <div className="App">
        <Header  className="headerstyle" />
        <div className="word">
          {wordList.length&&(counter<10)&&<p>{wordList[counter].word}</p>}
        </div>
  
        <div className="btn_div">
          <Button className={"btn"} id="verb" color={'#e51d74'} text={'verb'} onClick={onclick}/>
          <Button className={"btn"} id= "noun" color={'#f5aa00'} text={'noun'} onClick={onclick}/>
          <Button className={"btn"} id="adjective" color={'#78b517'} text={'adjective'} onClick={onclick}/>
          <Button className={"btn"} id="adverb" color={'#026bb0'} text={'adverb'} onClick={onclick}/>
        </div>

        <div className="h_div" >
          <h2 style={{color:'#78b517'}}>{showCorrect? "correct!":""}</h2>
          <h2 style={{color:'#e51d74'}}>{showIncorrect? "incorrect!":""}</h2>
        </div>

        <ProgressBar bgcolor="#ef6c00" finalScore={progress} />
        <Rank trigger={finalQuestion} rank={myrank} color={'#026bb0'} onClick={repeatQuiz} />
      </div>
  );
}

export default App;
