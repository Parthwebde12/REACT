import React, {useEffect} from 'react'

const Navbar = ({color}) => {
// Run on every render
  useEffect(() =>{
    alert("Hello welcome to my page")
  },[])
// run on only first render
  useEffect(()=> {
    alert("Thsi is 1st render")
  } ,[])
// run only when certain value changed
  useEffect(() =>{
    alert("hey i am running because color was changed")
  },[color])
  return (
    <div>I am a {color} navbar</div>
  )
}
useEffect(() => {
    alert("Hey welcome to my page. this is first  render of jsx")
    return () => {
      alert("mounted")
    }, []
  }

export default Navbar