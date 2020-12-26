import React, { useReducer } from 'react';
import Header from './component/header'
import { Balance } from './component/balance'
import SimpleSelect from './component/transaction'
import { List } from './component/list'
import { TransactionContext } from './gloalState/contaxt'
import { Initial_state, reducer } from "./gloalState/reducer";
import firebase from './service/firebase'
import './App.css';




function App() {

  const message:any = firebase.messaging()
  message.requestPermission().then(()=>{
    return message.getToken()
  }).then((token:number)=>{
    console.log('token ', token)
  }).catch((err:string)=>{
     console.log('error',err)
  })

  const [statee, dispatch] = useReducer(reducer, Initial_state)
  // console.log(statee)

  return (
    <div >
      <TransactionContext.Provider value={{
        statee,
        dispatch
      }} >

        <Header />
        <div className='app'>

          <div className='main_blnce_div'>
            <Balance />
          </div>
          <div className='trans_div'>
            <SimpleSelect />
            <List />

          </div>
        </div>
      </TransactionContext.Provider>

    </div>
  );
}

export default App;
