import Nav from '../components/Nav';

function Home() {
  return (
    <>
      <Nav />
      <section className='relative min-h-96 flex flex-col justify-center items-center'>
        <div className='text-center my-auto'>
          <h1 className='text-4xl lg:text-8xl'>Aidons nos</h1>
          <p className='text-2xl lg:text-7xl text-orange-400'>amis à 4 pattes.</p>
          <p className='py-2 text-xl'>Ils recherchent une famille.</p>
        </div>
        <div className='circle-trans absolute top-2.5 right-2.5 bg-orange-400'></div>
        <div className='circle absolute bottom-2.5 right-2.5'>
          {/* <img className='object-cover w-full' src="/cat-1.png" alt="chat blanc" /> */}
        </div>
        <div className='circle-trans absolute top-2.5 left-2.5 bg-orange-400'></div>
        <div className='circle absolute bottom-2.5 left-2.5'>
          {/* <img className='object-cover w-full' src="/dog-1.png" alt="chat blanc" /> */}
        </div>
      </section>
      <section className='container xl:container-xl my-8'>
        <div className='bg-lime-200 rounded-xl p-6 w-1/2 mx-auto'>
          <h1 className='text-3xl font-bold'>Pourquoi choisir Animal Airline ?</h1>
        </div>
      </section>
    </>
  )
}

export default Home