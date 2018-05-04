function Circle(props){
  var color="white"
  if(props.grid == 1){
    color="black"
  }else if(props.grid == 2){
    color="red"
  }
  let style = {
    backgroundColor:color,
    border:"1px solid black",
    borderRadius:"100%",
    paddingTop:"95%"
  }
  return(
    <div style={style}></div>  
  )
}
function Grid(props){
  let style={
    height:50,
    width:50,
    border:"1px solid black",
    backgroundColor:"#b3b8bd"
  }
  return(
    <div style={style} OnClick={()=> props.handleClick(props.row,props.col)}>
      <Circle grid={props.grid}/>
    </div>
  )
}

function Row(props){
  let style = {
    display:"flex"
  }
  var grids =[]
  for(let i=0;i<7;i++){
    grids.push(<Grid key={i} grid={props.cells[i]} row={props.row} col={i} handleClick={props.handleClick}/>)
  }
  
  return(
    <div style={style}>
      {grids}
    </div>
  )
}

function Board(props){
  let style={
    border:"2px solid black",
    width:"40%"
  }
  var rows=[]
  for(let i=0;i<6;i++){
    rows.push(<Row key={i} row={i} cells={props.cells[i]} handleClick={props.handleClick}/>)
  }
  return(
    <div style={style}>
      {rows}
    </div>
  )
}

class Game extends React.Component{
    constructor(props){
        super(props)
      var cells =[]
      for(let i=0;i<6;i++){
        cells.push(new Array(7).fill(0))
      }
      this.state={player:false,cells:cells,winner:0}
      this.handleClick=this.handleClick.bind(this)
    }
  handleClick(){
    console.log("Clicked")
  }
    render(){
        return (
            <div>
                <h1>Blacks Turn</h1>
                <Board cells={this.state.cells} handleClick={this.handleClick} />
                <br></br>
                <button>Restart</button>
            </div>
        )
    }
}



ReactDOM.render(
    <Game/>,
    document.getElementById('root')
)
