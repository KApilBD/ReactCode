function LineItem(props){
  return <li> {props.item}</li>
}

function ShoppingList(props){
  return(
    <div>
    <h3>{props.title}</h3>
      <ol>
        <LineItem item={props.items[0]}/>
        <LineItem item= {props.items[1]}/>
        <LineItem item={props.items[2]}/>
      </ol>
    </div>
  )
}

function ShoppingTitle(props){
  return(
    <div>
      <h1>{props.title}</h1>
      <h2>Total Number of Item: {props.numItem}</h2>
    </div>
  )
}


function MyShoppingApp(props){
  return(
  <div>
    <ShoppingTitle title = "My Shopping List" numItem = {9}/>
      <ShoppingList title = "Food" items={['Apple','Orange','Banana']}/>
      <ShoppingList title = "Clothes" items={['Shirt','Pants','Hat']}/>
      <ShoppingList title = "Supplies" items={['Pen','Paper','Glue']}/>
    </div>
  )
}

 ReactDOM.render(
     <MyShoppingApp />,
     document.getElementById("root")
 )
