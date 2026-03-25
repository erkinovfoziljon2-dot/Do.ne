import Registercopmonent from './register'
import Header from './header'


function Register() {
  return (
    <>
     <Header /><div className='flex items-center justify-center'></div>
    <div className="grid grid-cols-2 gap-20     w-screen  ">

      <div className=" bg-[#a539ff] text-white p-16 flex w-full h-full flex-col justify-items-start">

        <div>
          <h1 className="text-5xl font-bold mb-3">Do.ne</h1>
          <p className="opacity-80">Bugun yangi boshlanish!</p>
        </div>

        <div className="space-y-6 mt-20">

          <div className="bg-white/10 p-6 rounded-xl flex gap-4 items-center backdrop-blur">
            <div className="text-2xl">💳</div>
            <div>
              <h3 className="font-semibold">Bepul ishlatish</h3>
              <p className="text-sm opacity-80">Hech qanday to'lov talab etilmaydi</p>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-xl flex gap-4 items-center backdrop-blur">
            <div className="text-2xl">⚡</div>
            <div>
              <h3 className="font-semibold">30 soniyada tayyor</h3>
              <p className="text-sm opacity-80">Tez va oson ro'yxatdan o'tish</p>
            </div>
          </div>

          <div className="bg-white/10 p-6 rounded-xl flex gap-4 items-center backdrop-blur">
            <div className="text-2xl">🔒</div>
            <div>
              <h3 className="font-semibold">Xavfsiz saqlash</h3>
              <p className="text-sm opacity-80">Ma'lumotlaringiz himoyalangan</p>
            </div>
          </div>

        </div>
        <div className="grid grid-cols-3 gap-6 mt-16">

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur">
            <div className="text-3xl mb-2"></div>
            <p className="text-3xl">Vazifalar</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur hover:bg-[#f3cc4a">
            <div className="text-3xl font-bold ">24/7</div>
            <p className="text-sm opacity-80">Ishlaydi</p>
          </div>

          <div className="bg-white/10 border border-white/20 rounded-2xl p-6 text-center backdrop-blur">
            <div className="text-3xl mb-2"></div>
            <p className="text-3xl">Xavfsiz</p>
          </div>

        </div>
      </div>

      <Registercopmonent />

    </div>
    </>

  )
}

export default Register