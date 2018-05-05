function AnswerButton(props){
   var style={
     width:"100%",
     height:50,
   }
    //console.log(props)
  return(
      <div>
          {
        props.ans.map((value,index)=>{return <button style={style} key={index} onClick={ ()=>props.clickHandle(index)}>{value}</button>

       })
          }
      </div>
  )
}

function QuestionPanel(props){
  let style={textAlign: "center",
             width:"50%",
             float:"left"
            }
 // console.log(props.ans[0])
  return(
    <div style={style}>
      <h2 >{props.que}</h2>
      <AnswerButton ans={props.ans} clickHandle={props.clickHandle}/><br></br>
    </div>
  )
}

function ResultPanel(props){
    let style={textAlign: "center",
               marginTop: "100px",
             width:"50%",
             height:"100%",
             float:"right"
            }
    return(
    <div style={style}>
      <h3 >Correct:{props.correct} </h3>
      <h3 >Incorrect:{props.incorrect}</h3>
    </div>
  )
}

class LayoutBoard extends React.Component{
  constructor(props){
    super(props);
    this.state={
      counter:0,
      correct:0,
      finish:false,
      question:props.appData,}
    this.clickHandle=this.clickHandle.bind(this)
    //console.log(props.appData[0].options)
  }
  clickHandle(index){
    //console.log("index"+ index)
    var nextQuestion={
      counter:this.state.counter+1
    }
    //console.log(this.state.question[this.state.counter].answer)
    if(index == this.state.question[this.state.counter].answer){
      nextQuestion.correct=this.state.correct+1
    }


    //console.log(this.state.counter+"  "+this.state.question.length+" "+this.state.finish)
    if(!(this.state.counter < this.state.question.length-1)){
      nextQuestion.finish=true
    }
    this.setState(nextQuestion)
  }

  render(){

          return(

      <div >
        {(!this.state.finish)?
          <div>
            <QuestionPanel que={this.state.question[this.state.counter].question} ans={this.state.question[this.state.counter].options} clickHandle={this.clickHandle}/>
            <ResultPanel correct={this.state.correct} incorrect={this.state.counter-this.state.correct}/>
          </div>
          :
          <div>
            <ResultPanel correct={this.state.correct} incorrect={this.state.counter-this.state.correct}/>
          </div>
        }

      </div>
    )

  }
}

var appData=[
  {
  question:"Which can change the state of the component?",
  answer: 1,
  options:["forceUpdate","setState","updateState","None of the mentioned"]
},{
  question:"ReactJS is developed by _____?",
  answer: 1,
  options:["Google Engineers", "FaceBook Engineers"]
},{
  question:"What is the Virtual DOM?",
  answer: 2,
  options:["A Shadow DOM",
        "A carbon copy of the actual DOM",
        "A collection of React elements and \"fibers\" representing the user interface",
        "The hit sequel to the game DOOM"]
},{
  question:"What does HTML stand for?",
  answer: 1,
  options:["Hyperlinks and Text Markup Language", "Hyper Text Markup Language", "Home Tool Markup Language"]
},{
  question:"How can you access the state of a component from inside of a member function?",
  answer: 2,
  options:["this.getState()","this.prototype.stateValue","this.state","this.values"]
},{
  question:"What is a react.js in MVC?",
  answer: 3,
  options:["Controller","Middleware","Model","View"]
},{
  question:"How do I add CSS classes to components?",
  answer: 2,
  options:["Pass them to the class prop","Pass them to the classname prop","Pass them to the className prop","Pass them to the c prop"]
},{
  question:"What does CSS stand for?",
  answer: 2,
  options:["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets"]
},{
  question:"How should I NOT prevent a function from being called too quickly or too many times in a row?",
  answer: 3,
  options:["throttling", "debouncing", "requestAnimationFrame throttling", "window.setTimeout"]
},{
  question:"Which CSS property controls the text size?",
  answer: 1,
  options:["text-size", "font-size", "font-style"]
}
]

ReactDOM.render(
  <LayoutBoard appData={appData}/>,
  document.getElementById('root')
)
