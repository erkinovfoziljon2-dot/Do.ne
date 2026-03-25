import {Link,} from "react-router-dom"

function Header() {
  return (

    <div className="flex w-full  items-center px-12 py-4 bg-linear-to-r from-red-500 to-yellow-500">
      <div className="text-white font-mono text-xl">SCREENS</div>

      <div className="flex gap-3 ml-20">
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-green-500">
          <Link to="/login">Login</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-green-500 text-sm">
          <Link to="/register">Register</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-green-500">
          <Link to="/">Dashboard</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-green-500">
          <Link to="/add">Add</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-green-500">
          <Link to="/edit">Edit</Link>
        </button>
        <button className="px-4 py-2 rounded-full bg-linear-to-r from-purple-500 to-pink-500 text-sm text-green-500">
          <Link to="/delete">Delete</Link>
        </button>
      </div>
    </div>
  )
}

export default Header