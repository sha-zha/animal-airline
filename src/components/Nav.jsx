'use client'

import '../index.css';

const navigation = [
  { name: 'Accueil', href: '#' },
  { name: 'Les annonces', href: '#' },
  { name: 'Contact', href: '#' },
]

function Nav() {
  return (
    <header className='container xl:container-xl'>
      <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div class="flex  lg:w-1/5">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Animal Airline</span>
            <img
              alt="logo"
              src="/logo.png"
              className="h-12 w-auto"
            />
          </a>
        </div>

        <ul className="hidden lg:flex md:w-4/5 lg:justify-evenly">
          {navigation.map((item) => (
            <li><a key={item.name} href={item.href} className="text-sm/6 font-semibold text-gray-900">
              {item.name}
            </a></li>
          ))}
          <li> <a href="#" className="text-sm/6 font-semibold">
            M'inscrire
          </a>

          </li>
          <li>
            <a href="#" className="text-sm/6 font-semibold btn-orange">
              Me connecter
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;