import {useState} from 'react'

function Counter() {
    const [count,setCount] = useState()
    return(
        <div>
            <div className="Counter">
                <div className="display">{count}</div>
                <div className="buttons">
                    <button onClick={() => setCount((count) => count+1)}>+</button>
                    <button onClick={() => setCount(0)}>Reset</button>
                    <button onClick={() => setCount((count) => count-1)}>+</button>
                </div>
             </div>
         </div>
    )
}
export default Counter;