
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleAdd =()=>{
        setTodos([...todos,{todo , iscompleted:false}])
        setTodo("")

        

    }

    const handledelete =()=>{

    }

    const handleEdit =()=> {

    


    }

    const handlechange=(e)=>{
        setTodo(e.target.value)

    }


    return (
        <>
            <Navbar />
            <div className='container mx-auto my-6 py-4 rounded-xl p-5 bg-violet-200 min-h-screen'>
                <div className="addTodo my-4">
                    <h1 className='text-lg font-bold'>Add a Todo</h1>
                    <input type="text" name="" id=""  className='w-80' onClick={handlechange} value={todo}/>
                    <button onClick={handleAdd} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-6'>Add Todo</button>
                </div>

                <h2 className='text-lg font-bold'>Your ToDos</h2>
                <div className="todos">
                    {
                        todos.map(item =>{
                        
                        })
                    }
                    <div className="todos flex">
                        <div className="text">{todo}</div>
                            <div className="button">
                    <button  onClick={handleAdd} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-2'>Add</button>
                    <button onClick={handledelete}  className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-2'>Delete</button>
                    <button onClick={handleEdit} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-6'>Edit</button>
                        
                    </div>


                </div>

            </div>

        </div >
        </>
    )

}

export default App
