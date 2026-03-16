import  { useState } from 'react'
import { Card, CardContent } from '../card'
import { Input } from '../input'
import { Button } from '../button'
import { registerUser } from '../../../lib/utils'


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
  
      <div className='flex h-screen items-center justify-center'>
      <Card className='w-100 p-6'>
        <CardContent className='space-y-4'>
          <h1 className='text-xl font-bold'>REGISTER</h1>

          <Input
            name='username'
            placeholder='Username'
            onChange={handleChange}
          />
          <Input
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />

          <Button className='w-full' onClick={handleSubmit}>
            Register
          </Button>
        </CardContent>
      </Card>
    </div>
  
  )
}

export default Registercopmonent
