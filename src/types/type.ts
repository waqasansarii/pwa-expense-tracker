export type stateType = {
    list ?:{

        desc:string,
        value:number,
        date:string,
        type:string
        id:string
    }[],


}
export type value ={
    date: string
desc: string
id: string
type: string
value:  number
}

type remove ={
    id:string
}

export type Action =
    | { type: 'Add', payload:value }
    |  {type:'remove',payload : remove}
    
export type StoreApi = {
    statee: stateType
    dispatch: React.Dispatch<Action>
  }