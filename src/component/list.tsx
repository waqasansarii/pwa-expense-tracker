import React, {  useContext } from 'react'
import { TransactionContext } from "../gloalState/contaxt";
import { value } from "../types/type";
import '../css/list.css'


export const List: React.FC = () => {


    const { statee,dispatch }:any = useContext(TransactionContext)
    // console.log(statee)

const hadnleCancle =((event:any)=>{
    console.log(event.target.value)
    dispatch({
        type :"remove",
        payload:{
            id : event.target.value
        }
    })
})


    return (
        <div>
            <div className='main_list_div'>
                <div>
                    <h4 className='history'>History:</h4>
                </div>
                    {statee.list.length ?
                <ul className='ul'>
                    {statee.list.map((value: value, index: number) => {
                        return (
                            
                            <li className='li' key={index} >
                                <button className='close' value={value.id}  onClick={hadnleCancle}>&times;</button>

                                <p className='text'>{value.desc}</p>
                                <p className='date'>{value.date}</p>
                                <p className='rupees'>{value.value}</p>
                            </li>
                        )
                    })}
                </ul>
                : null
                }
            </div>
        </div>

    )
}