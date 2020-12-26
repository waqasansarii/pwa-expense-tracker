import React,{useContext, useState} from 'react';
import CheckCircleSharpIcon from '@material-ui/icons/CheckCircleSharp';
import {TransactionContext } from "../gloalState/contaxt";

import '../css/trans.css'





export default function SimpleSelect() {

  const {dispatch}:any = useContext(TransactionContext)

  const [type, settype] = React.useState('');

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>):void => {
    settype(event.target.value);
    // console.log(event.target.value)
  };

  const [desc,setDesc] = useState<string>('')
  const [value,setValue] = useState<React.SetStateAction<any>>(0)

  const hadnleDesc = (event:React.ChangeEvent<HTMLInputElement>):void=>{
      setDesc(event.target.value)
  }
  const handleValue =(event:React.ChangeEvent<HTMLInputElement>):void=>{
     setValue(parseInt(event.target.value))
    //  console.log(event.target.value)
  }

  const hadnleAdd = ()=>{
    // console.log(value , desc)
    let date:string= new Date().toDateString()
    let random:number = Math.random()
  
    let multiple = random*20
       let fix=multiple.toFixed(5)
    // console.log(random ,multiple,fix)
    if(value !==0 && desc !=='' && type !==''){

      dispatch({
        type: "Add",
        payload:{
          desc:desc,
          value:value,
          date:date,
          type:type,
           id : fix
          
        }
      })

      setValue(0)
      setDesc('')
      settype('')
    }else{
      alert('please fill input fields')
    }
  }


  return (
    <div className='main_trans_div'>
      <div >
        <select name="select type" value={type} className='select' onChange={handleChange} id="">
          <option value="">select type</option>
          <option value="income">income</option>
          <option value="expense">expense</option>
        </select>
      </div>
      <div className='inputs_div'>

      <div>
        <input type="text" value={desc} onChange={hadnleDesc} className='description' required placeholder='Description' />
      </div>
      <div>
        <input type="number" value={value} onChange={handleValue} className='value' required placeholder='value' />

      </div>
      <div>
         <CheckCircleSharpIcon onClick={hadnleAdd} className='check_btn' />
      </div>

      </div>

    </div>
  );
}