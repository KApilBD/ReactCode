function AnswerButton(props){
   var style={
     width:"100%",
     height:50

   }
  return(
    <button style={style} >Answer</button>
  )
}

function QuestionPanel(props){
  let style={textAlign: "center",
             width:"50%",
             float:"left"
            }
  return(
    <div style={style}>
      <h2 >{this.props.questions}</h2>
      <AnswerButton/><br></br>
      <AnswerButton/><br></br>
      <AnswerButton/><br></br>
      <AnswerButton/>
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
      <h3 >Correct: </h3>
      <h3 >Incorrect:</h3>
    </div>
  )
}

class LayoutBoard extends React.Component{
  constructor(props){
    super(props)
    this.state={que:props.appData.question};
  }

  render(){
    return(
      <div >
        <QuestionPanel questions={this.state.que[0].question}/>
        <ResultPanel/>
      </div>
    )
  }
}

let appData=[{
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
}]

ReactDOM.render(
  <LayoutBoard appData={appData}/>,
  document.getElementById('root')
)
