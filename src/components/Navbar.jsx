

const Navbar = () => {
  return (
    <div className="navbar bg-[#3366CC] rounded-md">
    <div className="flex-1">
      <a className="btn btn-ghost text-xl">
        <img src="https://i.ibb.co/ByBKPZJ/nusaiba.png" alt="" />
      </a>
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