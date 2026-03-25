import { Route, Routes } from "react-router-dom"
import Register from "./components/ui/shared/register_component"
import Dashboard from "./components/ui/shared/dashboard"
import Login from "./components/ui/shared/Login"
import Add from "./components/ui/shared/add"
import Edit from "./components/ui/shared/edit"
import { Delete } from "lucide-react"

function App(){
  return (
    <>
    <div>
  
      <Routes>

        <Route path="/register" element={<Register/>}/>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/delete" element={<Delete/>}/>

      </Routes>
    </div>
    </>
  )
}

export default App