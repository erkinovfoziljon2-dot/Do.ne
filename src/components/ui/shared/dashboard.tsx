
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

function Dashboard() {
  return (
    <><Header />
    
      <section className='grid grid-cols-5 h-[90vh] w-screen p-0 m-0'>
        <div className='col-span-1 bg-linear-to-r from-purple-500 to-pink-500'>
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
        <div className='col-span-4 bg-linear-to-r from-purple-500 to-pink-500'></div>
      </section>
    
    </>
  )
}

export default Dashboard