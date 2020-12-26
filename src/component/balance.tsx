import  { useContext } from 'react'
import { TransactionContext } from "../gloalState/contaxt";
import '../css/balance.css'





export const Balance = () => {
    const { statee }:any = useContext(TransactionContext)
    // console.log(statee)

    const getIncome = ():number => {
        let incomee = 0;

        for (var i = 0; i < statee.list.length; i++) {
            if (statee.list[i].type === 'income') {

                incomee +=  statee.list[i].value;
            }
        }
        return incomee;
    }
    const getExpense = ():number => {
        let incomee = 0;

        for (var i = 0; i < statee.list.length; i++) {
            if (statee.list[i].type === 'expense') {
                // console.log(statee.list[i].value)

                incomee +=  statee.list[i].value;
            }
        }
        return incomee;
    }
getExpense()

const   total= getIncome() - getExpense()
    

    return (
        <div className='container'>
            <div className='main_div'>
                <p className='income'>Income : {getIncome()}</p>
                <p className='expense' > Expense : {getExpense()}</p>
            </div>
            <div className='balance_div'>
                <h2>Your Balance : {total}</h2>
            </div>

        </div>
    )
}