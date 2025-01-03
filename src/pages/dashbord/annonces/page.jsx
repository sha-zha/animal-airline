import NavDash from "../NavDash";
import Action from "../../../components/Action";
import Btn from "../../../components/Btn";

function Annonces() {
    return (
        <>
            <main className='bg-orange-100 min-h-screen'>
                <NavDash></NavDash>
                <Action title="Mes annonces">
                    <Btn style={"btn-orange"} content={"créer une annonce"} />
                </Action>
            </main>
        </>
    );
}

export default Annonces;