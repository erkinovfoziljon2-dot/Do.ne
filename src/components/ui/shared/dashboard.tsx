import { cn } from '../../../lib/utils'
import { Button } from '../button'
import Header from './header'

const categories = [
  {
    icon: '📚',
    name: 'Barcha sahifalar',
    count: 12,
  },
  {
    icon: '⭐️',
    name: 'Muhimlar',
    count: 5,
  },
  {
    icon: '📅',
    name: 'Bugun',
    count: 3,
  },
  {
    icon: '✅',
    name: 'Bajarilgan',
    count: 7,
  },
  {
    icon: '💼',
    name: 'Ish',
    count: 2,
  },
  {
    icon: '📖',
    name: "O'qish",
    count: 6,
  },
  {
    icon: '🏠',
    name: 'Shaxsiy',
    count: 4,
  },
]

const stats = [
  {
    count: '12',
    title: 'Jami vazifa',
    icon: '📋',
    value: '+3 bu hafta',
    color: 'bg-linear-to-r from-green-400 to-blue-500'
  },
  {
    count: '5',
    title: 'Bajarildi',
    icon: '✅',
    value: '+2 bugun',
    color: 'bg-linear-to-r from-purple-400 to-blue-500'
  },
  {
    count: '7',
    title: 'Jarayonda',
    icon: '⏳',
    value: '5 ta bugun',
    color: 'bg-linear-to-r from-red-400 to-yellow-500'
  },
  {
    count: '3',
    title: 'Yuqori muhim',
    icon: '🔥',
    value: 'Tezda!',
    color: 'bg-linear-to-r from-orange-400 to-red-500'
  }

]
const tahlil = [
  {
    title: `Frontend loyiha prezentatsiyasini tayyorlash`,
    describtion: `React va TypeScript bilan qurilgan Todo ilovasini tushuntirish va demo ko'rsatish`,
    title2: `🔴Yuqori`,
    title3: `💼Ish`,
    time: `Bugun, 14:00`,
    dravicon: `✏️`,
    trashicon: `🗑️`
  },
  {
    title: `TypeScript generics va utility types o'rganish`,
    describtion: `Generic types, Partial, Required, Pick, Omit utility typeslar bo'yicha misollar yozish`,
    title2: `🟠 O'rta`,
    title3: `📚 O'qish`,
    time: `Ertaga`,
    dravicon: `✏️`,
    trashicon: `🗑️`
  },
  {
    title: `Kitob: "Clean Code" — 4-bob`,
    describtion: `Muhim fikrlarni konspektga yozish va kod misollarini tahlil qilish`,
    title2: `🟢 Past`,
    title3: `🏠 Shaxsiy`,
    time: `Kecha`,
    dravicon: `✏️`,
    trashicon: `🗑️`
  },
  {
    title: `FastAPI — JWT autentifikatsiya qo'shish`,
    describtion: `Login va register endpointlari, token refresh, middleware yozish`,
    title2: `🔴Yuqori`,
    title3: `💼Ish`,
    time: `Bu hafta`,
    dravicon: `✏️`,
    trashicon: `🗑️`
  },
  {
    title: `Sport: 5 km yugurish`,
    describtion: ``,
    title2: `🟢 Past`,
    title3: `🏠 Shaxsiy`,
    time: `3 kun oldin`,
    dravicon: `✏️`,
    trashicon: `🗑️`
  }
]

function Dashboard() {
  return (
    <><Header />

      <section className='grid grid-cols-5 h-[90vh] w-screen p-0 m-0'>
        <div className='col-span-1 bg-linear-to-r from-purple-500 to-pink-500' >
          <h1 className='mt-10 pl-5 text-5xl font-bold text-white'>
            Do.Ne
          </h1>
          <div className='mt-10 space-y-4'>
            {categories.map((category) => (
              <div key={category.name} className='flex items-center gap-3 px-5 py-3 bg-white/10 rounded-lg cursor-pointer hover:bg-white/20 transition'>
                <div className='text-2xl'>{category.icon}</div>
                <div className='flex justify-between w-full'>
                  <span>{category.name}</span>
                  <span className='text-sm bg-linear-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-full'>{category.count}</span>
                </div>

              </div>
            ))}
          </div>
        </div>
        <div className=' col-span-4 bg-linear-to-r from-red-500 to-yellow-500 px-4 py-6'>
          <div className='flex justify-between px-10 py-5 '>
            <div>
              <div className='flex'>              <h1>Barcha Vazifalar </h1>
                <h1 className='hover:scale-130'>👋</h1>
              </div>
              <p>Bugun 5 ta vazifa bajarishingiz kerak</p>
            </div>
            <Button className=' transition duration-400 ease-in-out mt-5 bg-linear-to-r from-red-500 to-green-500 text-white  hover:scale-110 w-50 h-10'>Qo'shish</Button>
          </div>
          <div className='grid grid-cols-4 gap-4 '>
            {stats.map((item, ind) => (
              <div
                key={ind}
                className={cn(
                  `col-span-1 rounded-xl  transition duration-300 ease-in-out hover:scale-110 border-2 flex px-2 py-5 justify-between my-5 ${item.color}`,
                )}
              >
                <div className='flex flex-col justify-center items-start'>
                  <span className='font-bold text-5xl text-white'>
                    {item.count}
                  </span>
                  <span>{item.title}</span>
                </div>
                <div className='flex flex-col justify-center items-start'>
                  <span className='text-3xl ml-5 mb-5'>{item.icon}</span>
                  <span>{item.value}</span>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className='bg-[#ffffff] w-full rounded-2xl items-start h-40 flex'>

              <div>
                <h3 className='text-black pl-9 pt-10 text-3xl'>Kunlik maqsad</h3>
                <span className='pl-9 pt-5'>5 dan 2 tasi bajarildi</span>
              </div>
              <span className='pl-212 text-[#a13fd2] font-extrabold text-5xl pt-13'>42%</span>
            </div>

          </div>


          <div className='w-[60%] h-12 mt-7 bg-white rounded-2xl grid grid-cols-5 items-center'>
            <span className='flex items-start justify-start pl-3'>🔍</span>
            <div className='w-30 bg-black h-11 rounded-2xl ml-145 text-white text-center hover:bg-linear-to-r from-red-500 to-pink-500 pt-2'>Barchasi</div>
            <div className='w-30 bg-black h-11 rounded-2xl ml-140 text-white text-center hover:bg-linear-to-r from-blue-500 to-green-500 pt-2'>Jarayonda</div>
            <div className='w-30 bg-black h-11 rounded-2xl ml-135 text-center text-white pt-2 hover:bg-linear-to-r from-purple-500 to-pink-500 '>Bajarildi</div>
            <div className='w-30 bg-black h-11 rounded-2xl ml-130 text-center text-white pt-2 hover:bg-linear-to-r from-green-500 to-blue-500 '>+Qo'shish</div>
          </div>

          <div>
            {tahlil.map((item, ind) => (
              <div key={ind}
                className={cn(
                  `flex flex-col justify-start items-start  rounded-xl  transition duration-300 ease-in-out hover:scale-102 border-2  px-2 py-5 my-5 bg-white`,
                )}
              >
                <div className='flex items-center justify-between w-full'>
                  <div>
                    <span className='text-gray-500'>{item.title2}</span>
                    <span className='text-gray-500'>{item.title3}</span>
                  </div>
                  <span className='text-gray-500 mr-8 '>{item.time}</span>  
                </div>
                <div className='flex justify-between w-full items-center'>
                  <div className='space-y-1'>
                    <h4 className='font-bold'>{item.title}</h4>
                    <p className='text-gray-600 '>{item.describtion}</p>
                  </div>
                  <div className='flex flex-col gap-2'>
                    <div className='text-gray-500 w-10 pl-2 h-7 rounded-2xl bg-[#00c1b4]'>{item.dravicon}</div>
                    <span className='text-gray-500 w-10 pl-2 h-7 rounded-2xl bg-[#00c1b4]'>{item.trashicon}</span>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </>
  )
}

export default Dashboard