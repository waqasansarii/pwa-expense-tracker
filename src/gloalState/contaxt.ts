import React,{createContext} from 'react'
import {Initial_state } from './reducer'
import { stateType,StoreApi } from "../types/type";



export  const TransactionContext = createContext<StoreApi|stateType >(Initial_state)