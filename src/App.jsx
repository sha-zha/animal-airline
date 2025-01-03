import './index.css';
import { useState } from 'react';
import Nav from './components/Nav';

function App() {
  return (
    <>
      <Nav />
      <section className='container xl:container-xl p-6 grid grid-cols-2'>
        <div>
          <h1 className='text-4xl lg:text-8xl'>Aidons nos</h1>
          <p className='text-2xl lg:text-7xl text-orange-400'>amis à 4 pattes</p>
          <p className='text-md'>ils recherchent une famille.</p>
        </div>
        <img className='object-cover w-full' src="/cat-1.png" alt="chat blanc" />
      </section>
    </>
  )
}

export default App
