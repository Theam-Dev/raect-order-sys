import React, {useState} from "react";
import './App.css';
import json from './jsons/item.json'
function App() {
  const [itemData, setitemData] = useState([]);
  const jsondata = json;
  const orderItem = (id) => {
    
    const item = jsondata.find(x=>x.id == id);
    var index = itemData.findIndex(item => item.id === id);
    if(index != -1){
      var getqty = parseInt(itemData[index].qty);
      var newqty = itemData[index].qty = getqty += 1;
      var newtotal = itemData[index].total = Number(itemData[index].price * getqty).toFixed(2);
      setitemData([itemData.qty,itemData[index].qty + 1]);
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
    
  }
  
  return (
    <div className="App">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <a className="navbar-brand" href="#">Logo</a>
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="#">Link 1</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 2</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link 3</a>
          </li>
        </ul>
      </nav>
      <div className="container-fluid py-4">
        <div className='row'>
          <div className='col-md-7 border'>
            <div className='row'>
            {jsondata.map((item) => (
               <div className="col-sm-2 p-1 mb-1" key={item.id}>
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
                  itemData.map((item)=>(
                    <tr key={item.id}>
                      <td>{ item.id }</td>
                      <td>{ item.title }</td>
                      <td>{ item.qty}</td>
                      <td>{ item.price}</td>
                      <td>{ item.total}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
