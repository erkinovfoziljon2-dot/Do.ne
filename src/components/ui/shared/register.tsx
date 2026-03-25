import  { useState } from 'react'
import { Card, CardContent } from '../card'
import { Input } from '../input'
import { Button } from '../button'
import { registerUser } from '../../../lib/utils'
import Header from './header'


function Registercopmonent() {
  // const router=Route
    const [form, setForm] = useState({
    username: '',
    password: '',
  })
  const handleChange=(e:any)=>{
    setForm({...form, [e.target.name]:e.target.value})
  }
  const handleSubmit=async()=>{
    try{
      await registerUser(form)
      
    }catch(err){
      alert(`Registerda xatolik${err}`)
    }
  }

  return (
        <>
       
      <Card className='w-120 h-120 sticky p-6 bg-[#a539ff] mt-20'>
        <CardContent className='space-y-4'>
          <div className='flex items-center justify-center text-4xl font-mono w-full bg-linear-to-r from-purple-500 to-pink-500 text-white '>Register</div>

          <Input className='bg-[#E7DF40] border-[#e93eaf] text-black w-full h-16 mt-6'
            name='username'
            placeholder='Username'
            onChange={handleChange} />
          <Input className='bg-[#E7DF40] border-[#e93eaf] text-black w-full h-16 mt-8'
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange} />

          <Button
            onClick={handleSubmit}
            className="w-full h-16 mt-25 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-lg"
          >
            <span className="relative z-10 text-3xl font-mono">Register</span>
          </Button>
        </CardContent>
      </Card>
  
  </>
)
}

export default Registercopmonent
