import {NavLink} from 'react-router-dom'
function Header() {
  return (
    <header className=" bg-gray-950">
      <div className="text-white mx-auto  max-w-5xl px-5 py-3 flex justify-between">
        <NavLink to="/" className="text-4xl"> Cooking:)</NavLink>
        <NavLink className='border px-3 py-2 rounded-md text-2xl hover:bg-white hover:text-gray-950 active:opacity-50' to="">Create</NavLink>
      </div>
    </header>
  );
}

export default Header;
