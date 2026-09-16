import React, {useState} from 'react'

const App = () => {

  const[num, setNum] = useState(0)

  function increseNum(){
    setNum(num+1)
  }
  function decreaseNum(){
    setNum(num-1)
  }
  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increseNum}>increse</button>
      <button onClick={decreaseNum}>decrease</button>
    </div>
  )
}

export default App;