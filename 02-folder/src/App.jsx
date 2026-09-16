import React, {useState} from 'react'

const App = () => {

  const[num, setNum] = useState({user:'Nitin', age:22})

  const btnClicked = ()=>{
    const newNum = {...num}
    newNum.user = 'Nikhil'
    setNum(newNum)
  }

  // function increseNum(){
  //   setNum(num+1)
  // }
  // function decreaseNum(){
  //   setNum(num-1)
  // }
  return (

    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={btnClicked}>click</button>
    </div>
    // <div>
    //   <h1>{num}</h1>
    //   <button onClick={increseNum}>increse</button>
    //   <button onClick={decreaseNum}>decrease</button>
    // </div>
  )
}

export default App;