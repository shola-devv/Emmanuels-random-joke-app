import * as React from 'react';
 import { FC } from 'react';

 interface Props {
    name: string;
    age:number;
    email:string;
    getName: (name: string)=> string;
    }
    


export const Learn: FC<Props>  = ({name, age, email})=>{
    return (
        <div>

           {name}
            {age}
            {email}
        </div>
    )

} 