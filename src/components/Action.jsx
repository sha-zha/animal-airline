function Action ({title,children}) {
    return (
        <section className="container lg:container-xl">
                    <div className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 bg-zinc-50 rounded-xl">
                        <p className="text-orange-400 text-2xl font-bold">{title}</p>
                        {children}                      
                    </div>
                </section>
    );
}
export default Action;