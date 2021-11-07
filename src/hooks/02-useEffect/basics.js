import React from 'react'

function Basics() {
    const [value, setValue] = React.useState(5)
    const [size, setSize] = React.useState(window.innerWidth)

    function checkSize() {
        setSize(window.innerWidth)
    }

    React.useEffect(() => {
        if(value > 0) {
            document.title = `New Message(${value})`
        }
        window.addEventListener("resize", checkSize)
        return() => {
            window.removeEventListener("resize", checkSize)
        }
    },[value])
    console.log("component section")

    return(
        <div>
            <h1>{value}</h1>
            <h1>{size}</h1>
            <button onClick={() => setValue(value+1)}>+</button>
        </div>
    )
}
export default Basics