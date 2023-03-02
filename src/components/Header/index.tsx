function Header () {
    return(
    <div className="flex flex-row justify-end p-6 w-full bg-slate-900 items-center border border-black border-b-slate-700">
        <div className="w-2/3 flex flex-row justify-start items-center">
            <img className="md:w-10 w-5 md:h-10 h-5" alt="" src={require('./img/Vector.png')}></img>
            <h1 className="md:text-3xl text-xl  text-center font-bold pl-4">CountDown</h1>
        </div>


 {/* потом тему доделаю
        <div className="w-1/3 flex justify-end">
            <button className="hover:bg-slate-600 transition duration-400 transition-all md:p-4 p-2 rounded-xl">
               <img alt="" className="md:w-8 w-5 md:h-8 h-5" src={require('./img/sun.png')}></img> 
            </button>
        </div> */}

        
    </div>
    );
}

export default Header;