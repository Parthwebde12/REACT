
import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

function App() {
    const [todo, setTodo] = useState("")
    const [todos, setTodos] = useState([])

    const handleAdd =()=> {
        setTodos([...todos,{todo , iscompleted:false}])
        setTodo("")
    } 

    const handledelete =(index)=> {
        setTodos(todos.filter((_, i) => i !== index))
    }

    const handleEdit =(index)=> {
        setTodo(todos[index].todo)
        handledelete(index)
    }

    const handlechange=(e)=> {
        setTodo(e.target.value)
    }

    return (
        <>
            <Navbar />
            <div className='container mx-auto my-6 py-4 rounded-xl p-5 bg-violet-200 min-h-screen'>
                <div className="addTodo my-4">
                    <h1 className='text-lg font-bold'>Add a Todo</h1>
                    <input type="text" className='w-80 bg-white' onChange={handlechange} value={todo} />
                    <button onClick={handleAdd} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-6'>Add Todo</button>
                </div>

                <h2 className='text-lg font-bold'>Your ToDos</h2>
                <div className="todos">
                    {todos.map((item, index) =>{
                        return (
                            <div key={index} className="todos flex">
                                <div className={item.iscompleted?"line-through":""}>{item.todo}</div>
                                <div className="button">
                                    <button onClick={()=>handledelete(index)} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-2'>Delete</button>
                                    <button onClick={()=>handleEdit(index)} className='bg-violet-900 hover:bg-violet-400 p-2 py-1 text-white  text-sm font-bold rounded-md mx-6'>Edit</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </>
    )
}

export default App
