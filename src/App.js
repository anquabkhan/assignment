import logo from './logo.svg';
import './App.css';
import bootstrap from 'bootstrap';
import React, {useEffect, useState} from 'react';
// import { useState } from 'react/cjs/react.production.min';
import Input from './component/Input';
import Table from './component/Table';

// const [empdata, setEmpdata] = useState([])
// {console.log("asds")}

function App() {
  const [empdata, setEmpdata] = useState([])
  const [count, setCount] = useState(1)
  
  const [path, setPath] = useState("Input")
  // {console.log("wapis")}
  // console.log(empdata)
  useEffect(() => {
    console.log("inside effect")
      // console.log(path)
      console.log(count)
  }, [path,empdata,count])

  return (

    <div className="App">
      {
        // path == "Addvalue"?
        // (
        // <Addvalue path= {path} setPath={setPath}/>) 
        // // (<p>ashdsahdsahdihaid</p>)
        // :
        // (<Form  path= {path} setPath={setPath}/>)
        // (<p>ihiweywyewyeiwyeiuwyeiwuyeiuwyieuywueywuyeiwuyewiyeiwuyewuyeiu</p>)
        path == "Input"?
        <Input empdata= {empdata} setEmpdata= {setEmpdata} path={path} setPath={setPath} count={count} setCount={setCount} />
        :
        (
          <Table empdata= {empdata} setEmpdata= {setEmpdata} path={path} setPath={setPath} />
        )
        // <Table path={path} setPath={setPath} />
    }
     
    </div>
  );
}

export default App;
