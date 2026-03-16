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
      <Card className='w-120 h-150 sticky p-6 bg-[#a539ff]'>
        <CardContent className='space-y-4'>
<style>
{`
@keyframes bounceGlowBW {
  0%,100% {
    transform: translateY(0) scale(1);
    color: black;
    text-shadow: 0 0 0px transparent;
  }
  50% {
    transform: translateY(-12px) scale(1.3);
    color: white;
    text-shadow: 0 0 10px white, 0 0 20px white;
  }
}

.letter{
  animation: bounceGlowBW 1.2s ease-in-out infinite;
}
`}
</style>

<div className="flex justify-center gap-1 font-bold text-5xl font-[Open-Sans]">

<h2 className="letter" style={{animationDelay:"0s"}}>R</h2>

<h2 className="letter" style={{animationDelay:"0.2s"}}>E</h2>

<h2 className="letter" style={{animationDelay:"0.4s"}}>G</h2>

<h2 className="letter" style={{animationDelay:"0.6s"}}>I</h2>

<h2 className="letter" style={{animationDelay:"0.8s"}}>S</h2>

<h2 className="letter" style={{animationDelay:"1s"}}>T</h2>

<h2 className="letter" style={{animationDelay:"1.2s"}}>E</h2>

<h2 className="letter" style={{animationDelay:"1.4s"}}>R</h2>

</div>

          <Input className='bg-[#E7DF40] border-[#e93eaf] text-black w-full'
            name='username'
            placeholder='Username'
            onChange={handleChange}
          />
          <Input className='bg-[#E7DF40] border-[#e93eaf] text-black w-full'
            name='password'
            type='password'
            placeholder='Password'
            onChange={handleChange}
          />

<Button
  onClick={handleSubmit}
  className="relative w-full mt-80 h-20 overflow-hidden border-4 border-white text-white transition-all duration-200 before:absolute before:inset-0 before:m-auto before:h-0 before:w-0 before:rounded-sm before:bg-[#f4359e] before:duration-300 before:ease-out hover:text-black hover:before:h-96 hover:before:w-full hover:before:opacity-80"
>
  <span className="relative z-10">Register</span>
</Button>
        </CardContent>
      </Card>
    </div>
  
  )
}

export default Registercopmonent
