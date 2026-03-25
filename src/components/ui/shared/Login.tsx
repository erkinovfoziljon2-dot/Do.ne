import { useState } from 'react'
import Header from './header'
import { Card, CardContent } from '../card'
import { Button } from '../button'
import { Input } from '../input'
import { registerUser } from '../../../lib/utils'

function Login() {
  const [form, setForm] = useState({
    username: '',
    password: '',
  })

  const handleChange = (e: any) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async () => {
    try {
      await registerUser(form)
    } catch (err) {
      alert(`Registerda xatolik${err}`)
    }
  }

  return (
    <>
      <Header />
      <div className='flex items-center justify-center ml-90'>
        <Card className='w-220 h-120 sticky p-6 bg-linear-to-r from-purple-500 to-pink-500 mt-20'>
          <CardContent className='space-y-4'>
            <div className='flex items-center justify-center text-2xl font-mono w-full bg-linear-to-r from-purple-500 to-pink-500 border-white text-white text-center'>Yana qaytib keldingiz yangi akkaunt yaratish</div>

            <Input
              className='bg-linear-to-r from-purple-500 to-pink-500 border-white text-white text-4xl w-full h-16 mt-6 border-4'
              name='username'
              placeholder='Ismingizni kiriting'
              onChange={handleChange}
            />
            <Input
              className='bg-linear-to-r from-purple-500 to-pink-500 border-white text-white w-full h-16 mt-2 border-4'
              name='email'
              placeholder='Elektron pochtangizni kiriting'
              onChange={handleChange}
            />
            <Input
              className='bg-linear-to-r from-purple-500 to-pink-500 border-white text-white w-full h-16 mt-2 border-4'
              name='password'
              type='password'
              placeholder='Parolingizni kiriting'
              onChange={handleChange}
            />

            <Button
              onClick={handleSubmit}
              className="w-full h-16 mt-5 bg-linear-to-r from-purple-500 to-pink-500 text-white font-bold text-lg border-4 hover:  bg-white"
            >
              <span className="relative z-10 text-3xl font-mono ">Yaratish</span>
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

export default Login