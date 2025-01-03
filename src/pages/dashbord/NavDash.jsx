'use client'

import { Link } from 'react-router-dom';

const navigation = [
  { name: 'Dashbord', href: '/dashbord'},
  { name: 'Mes annonces', href: '/dashbord/annonces' },
  { name: 'Les demandes', href: '/dashbord/demandes' },
]

function NavDash() {
  return (
    <header className='container xl:container-xl'>
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex  lg:w-1/5">
          <a href="#" className="-m-1.5 p-1.5 flex">
            <img
              alt="logo"
              src="/logo.png"
              className="h-12 w-auto"
            />
          </a>
          <span className="font-bold my-auto text-[#fc9776]">Animal Airline</span>
        </div>

        <ul className="hidden lg:flex md:w-4/5 lg:justify-evenly">
          {navigation.map((item) => (
            <li><Link className="text-sm/6 font-semibold text-gray-900" to={item.href}>{item.name}</Link>
            </li>
          ))}
          <li>
            <a href="/" className="text-sm/6 font-semibold btn-orange">
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default NavDash;