import NavDash from './NavDash';
import Action from '../../components/Action';
function Dashbord() {
  return (
    <>
      <main className='bg-zinc-100 min-h-screen'>
        <NavDash/>
        <Action title={"Dashbord"}></Action>
      </main>
    </>
  )
}

export default Dashbord;