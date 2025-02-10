function AnimalCard({ name, type, photo, date }) {
    return (
        <>

            <div className="flex flex-col items-center bg-zinc-50/25 rounded-0 w-full h-full py-6 shadow-md">
                <img src={photo} className=" object-cover h-40" alt="" />

                <div className="flex flex-row justify-evenly bg-zinc-50 w-4/5 shadow-lg rounded-xl p-3">
                    <div className="text-center">
                        <p className="text-2xl">{name}</p>
                        <p className="text-xl font-light">{type}</p>
                    </div>
                    <hr className="border border-solid min-h-full" />
                    <div className="text-center">
                        <p className="text-2xl">Départ</p>
                        <p className="text-xl font-light">{date}</p>


                    </div>
                </div>
                <div className="flex items-center mt-6 border border-orange-500 text-orange-500 p-2 rounded hover:bg-orange-500 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                        </svg> Aider
                </div>

            </div>
        </>

    );
}

export default AnimalCard;