import React, {useState} from "react";
import './App.css';
import json from './jsons/item.json'
function App() {
  const [itemData, setitemData] = useState([]);
  const [ltotal, setltotal] = useState(["0"]);
  const jsondata = json;
  const orderItem = (id) => {
    const item = jsondata.find(x=>x.id === id);
    var index = itemData.findIndex(item => item.id === id);
    if(index !== -1){
      const tmpData = [...itemData];
      var getqty = parseInt(itemData[index].qty);
      tmpData[index].qty = getqty += 1;
      tmpData[index].total = Number(tmpData[index].price * getqty).toFixed(2);
      setitemData(tmpData);
    }else{
      var dataItems = ({
        id: item.id,
        title: item.title,
        price: item.price,
        qty: 1,
        total: (item.price * 1)
      })
      setitemData([...itemData, dataItems]);
    }
    updateTotla();
  }
  const updateTotla = () => {

    var total = 0;
    itemData.forEach((item) => {
      total += parseInt(item.qty * item.price);
    });
    setltotal(total);
  };
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Logo</a>
        <ul className="navbar-nav">
         
        </ul>
      </nav>
      <div className="container-fluid py-4">
        <div className='row'>
          <div className='col-md-7 border'>
            <div className='row'>
            {jsondata.map((item,i) => (
               <div className="col-sm-2 p-1 mb-1" key={i}>
               <a href="#" className="text-decoration-none"onClick={() => orderItem(item.id)}>
                 <div className="card">
                   <div className="card-body text-center p-1">
                    <img src={'img/'+item.img} width={50} height={50}/>
                     <p className="text-muted mt-2">{item.title}</p>
                   </div>
                 </div>
               </a>
             </div>
            ))}
            </div>
          </div>
          <div className='col-md-5 border'>
            <table className="table">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Title</th>
                  <th>Qty</th>
                  <th>Price $</th>
                  <th>Total $</th>
                </tr>
              </thead>
              <tbody>
                {
                  itemData.map((item,i)=>(
                    <tr key={i}>
                      <td>{ item.id }</td>
                      <td>{ item.title }</td>
                      <td>{ item.qty}</td>
                      <td>{ item.price}</td>
                      <td>{ item.total}</td>
                    </tr>
                  ))
                }
                <tr>
                  <td>Total</td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>{ltotal}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
