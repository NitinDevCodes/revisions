import React, {useState} from 'react'

const App = () => {

  const submitHandler = (e)=>{
    e.preventDefault()
    console.log("submmitted")
  }



  // const[num, setNum] = useState({user:'Nitin', age:22})

  // const btnClicked = ()=>{
  //   const newNum = {...num}
  //   newNum.user = 'Nikhil'
  //   setNum(newNum)
  // }

  // function increseNum(){
  //   setNum(num+1)
  // }
  // function decreaseNum(){
  //   setNum(num-1)
  // }
  return (

    <dev>
      <form onSubmit={(e)=>{
        submitHandler(e)
      }}>
        <input type="text" placeholder='Enter your name' />
        <button>Submit</button>
      </form>
    </dev>



    // <div>
    //   <h1>{num.user}, {num.age}</h1>
    //   <button onClick={btnClicked}>click</button>
    // </div>
    // <div>
    //   <h1>{num}</h1>
    //   <button onClick={increseNum}>increse</button>
    //   <button onClick={decreaseNum}>decrease</button>
    // </div>
  )
}

export default App;