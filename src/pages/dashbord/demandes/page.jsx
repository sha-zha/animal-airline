import NavDash from "../NavDash";
import Action from "../../../components/Action";

function Demandes() {
    return (
        <>
            <main className='bg-orange-100 min-h-screen'>
                <NavDash></NavDash>
                <Action title="Les demandes"></Action>
            </main>
        </>
    );
}

export default Demandes;