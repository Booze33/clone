import logo from "../../assets/Demo.png"

const Page = () => {
  return (
    <div className="p-48 flex flex-col items-center justify-center">
      <section id="Features" className="pt-12 flex flex-col items-center justify-center h-dispay w-display border-t-4 border-indigo-500/50 border-x-0 rounded-t-full shadow-3xl">
        <h1 className="text-6xl font-bold text-center">Designing <span className="text-indigo-500/50 font-serif">experiences</span> <br></br>for the Future</h1>
        <div className="border-2 w-half border-indigo-500/50 dark:border-white my-8"/> 
        <p className="text-2xl dark:text-light-2 text-dark-2 font-bold">An Ai designed to make life easier</p>
        <button className="mt-12 relative p-2 dark:text-light text-dark duration-100 bg-slate-800 dark:bg-slate-200 rounded-full">Get Started</button>
      </section>

      <section className="w-screen my-32 flex flex-col items-center justify-center">
        <h1 className="text-6xl font-bold">AI Features</h1>
        <div className="grid grid-cols-2 grid-rows-2 w-feature place-items-center gap-x-10 gap-y-10 my-8">
          <div className="row-span-1 col-span-1 w-full duration-300 transition-transform	">
            <img src={logo} alt="Demo" className="w-full rounded-3xl h-grid" />
            <ul className="flex flex-row text-xl my-8">
                <li className="bg-gold rounded-3xl mx-2 px-2 text-light">2024</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">html</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">css</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">react</li>
            </ul>
            <h2 className="text-4xl font-bold">Image Creation</h2>
            <p className="my-4">These changes make the code more concise and easier to maintain while maintaining the core functionality of theme handling. </p>
          </div>

          <div className="row-span-1 col-span-1 w-full duration-300 transition-transform">
            <img src={logo} alt="Demo" className="w-full rounded-3xl h-grid" />
            <ul className="flex flex-row text-xl my-8">
                <li className="bg-gold rounded-3xl mx-2 px-2 text-light">2024</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">html</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">css</li>
                <li className="bg-maron rounded-3xl mx-2 px-2 text-dark">react</li>
            </ul>
            <h2 className="text-4xl font-bold">Image Creation</h2>
            <p className="my-4">These changes make the code more concise and easier to maintain while maintaining the core functionality of theme handling. </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Page;