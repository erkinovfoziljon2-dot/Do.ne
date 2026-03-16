
function Header() {
  return (

    <div className="flex w-[90%]  items-center px-12 py-4 bg-white">
      <div className="text-purple-600 font-bold text-xl">SCREENS</div>

      <div className="flex gap-3 ml-20">
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-white">Login</button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm">Register </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-white">Dashboard</button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-white">Add</button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-white">Edit</button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-white">Delete</button>
      </div>
    </div>
  )
}

export default Header