import { Link } from "react-router-dom"


const Navbar = () => {
  return (
    <div className="navbar bg-[#618feb] rounded-md flex justify-between">
    <div >
      <a className="btn btn-ghost text-xl">
        <img src="https://i.ibb.co/ByBKPZJ/nusaiba.png" alt="" />
      </a>
    </div>
    <div className="gap-6">
          <Link to='/'>
            <button className="btn font-bold">User page</button>
          </Link>
          <Link to='/management'>
          <button className="btn  font-bold">Admin Page</button>
          </Link>
    </div>
    <div className="flex-none gap-2">
      <div className="form-control">
        <input type="text" placeholder="Search" className="input input-bordered w-full" />
      </div>
     
    </div>
  </div>
  )
}

export default Navbar