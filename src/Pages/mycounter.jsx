import React, { useState } from 'react'
import CustomButton from '../components/CustomButton'

function Mycounter() {
    const [count,setCountFunction] = useState(0)

    function IncrementCounter(){
        setCountFunction(count+1);
        console.log(count);
        console.log("Function is called Increment");
    }

    function DecrementCounter(){
        if(count<1){
            alert("Negative numbers are not allowed")
        }else{
            setCountFunction(count-1)
        }
        console.log(count);
        console.log("Function is called Decrement");
    }

    function MultiplyCounter(){
        if(count*count>1999){
            alert("Number greater than 2000 not allowed")
        }else{
            setCountFunction(count*count)
        }
        console.log(count);
        console.log("Function is called Multiply");
    }

    return (
    <div>
        <h2>Counters current value : {count}</h2>
        <div>
            <button onClick={IncrementCounter}>Increment Button</button>
            <hr/>
            <button onClick={DecrementCounter}>Decrement Button</button>
            <hr/>
            <button onClick={MultiplyCounter}>Multiply Button</button>        
        </div>
    </div>
  )
}

export default Mycounter