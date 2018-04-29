function BuyButton(){
  return(
    <div>
      <td>
        <button type="button">Buy Now</button>
      </td>
    </div>
  )
}

function TableHeader(){
  return(
    <div>
      <tr>
        <th>Year</th>
        <th>Model</th>
        <th>Price</th>
        <th>Buy</th>
      </tr>
    </div>
  )
}

// function TableData(){
//   return(
//     <div>
//       <tr>
//         <td>Year</td>
//         <td>Model</td>
//         <td>Price</td>
//         <BuyButton/>
//       </tr>
//     </div>
//   )
// }


function TransportationTableRow(props) {
  return(
    <div>
      <tr>
        <td>{props.item.year}</td>
        <td>{props.item.model}</td>
        <td>{props.item.price}</td>
        <td><BuyButton/></td>
      </tr>
    </div>
  )
}

let tableRows= function(items){
  let tempDataArray = []
  for(let item of items) {
   tempDataArray.push(<TransportationTableRow item= {item}/>)
 }
  return tempDataArray
}

function TransportationTable(props) {

  return(
    <div>
      <h2>{props.title}</h2>
        <TableHeader/>
        {tableRows(props.items)}
    </div>
  )
}

function ListItem(props){
  return(
    <option value={props.listItem}>{props.listItem}</option>
  )
}

function SelectType(props){
  return(
    <div>
        <p>{props.title}</p>
        <select name="TransportType">
          <ListItem listItem= {props.list[0]}/>
          <ListItem listItem= {props.list[1]}/>
          <ListItem listItem= {props.list[2]}/>
          <ListItem listItem= {props.list[3]}/>
        </select>
    </div>
  )
}

function ChooseOption(props){
  return(
    <div>
      <h2>{props.title}</h2>
      <span>New Only <input type ="checkbox" name="newOnly" value="newVehicle"/></span>
    </div>
  )
}

function TransportationTitle(props){
  return(
    <div>
        <h2>{props.title}</h2>
        <p>{props.tagline}</p>
    </div>
  )
}


function ReactTransportation(props){
  return(
    <div>
        <TransportationTitle title="Welcome to React Transportation" tagline="The best place to buy vehicles online"/>
        <ChooseOption title="Choose Options" />
        <SelectType title="Select Type" list={['All','Cars','Trucks','Convertibles']}/>
        <TransportationTable title="Cars" items ={ [{year:2013 ,model:'A' , price:'$32000' },{year:2011 ,model:'B' , price:'$1400' },{year:2016 ,model:'B' , price:'$15500' }]}/>
        <TransportationTable title="Trucks" items ={ [{year:2014 ,model:'D' , price:'$18000' },{year:2013 ,model:'E' , price:'$5200' }]}/>
        <TransportationTable title="Convertibles" items ={ [{year:2009 ,model:'F' , price:'$2000' },{year:2010 ,model:'G' , price:'$6000' },{year:2012 ,model:'H' , price:'$12500' },{year:2017 ,model:'M' , price:'$50000' }]}/>
    </div>
  )
}

ReactDOM.render(
    <ReactTransportation/>,
    document.getElementById("root")
)
