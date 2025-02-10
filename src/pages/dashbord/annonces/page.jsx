import NavDash from "../NavDash";
import Action from "../../../components/Action";
import Btn from "../../../components/Btn";
import Form from "./form";
import AnimalCard from "../../../components/AnimalCard";

function Annonces() {
    return (
        <>
            <main className='bg-orange-100 min-h-screen'>
                <NavDash></NavDash>
                <Action title="Mes annonces">
                    <Btn style={"btn-orange"} content={"créer une annonce"} />
                </Action>
                <section className="mt-6">
                    
                        <Form></Form>
                
                </section>

                <section className=" container mt-6 h-auto w-full grid gap-4 grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 lg:grid-rows-4">
                    <AnimalCard name={"Raion"} type={"Chat"} photo={"/cat-1.png"} date={"05/02/2025"}/>
                    <AnimalCard name={"Riri"} type={"Chien"} photo={"/dog-1.png"} date={"05/02/2025"}/>
                    <AnimalCard name={"Loulou"} type={"Chien"} photo={"/dog-2.jpg"} date={"05/02/2025"}/>
                </section>
            </main>
        </>
    );
}

export default Annonces;