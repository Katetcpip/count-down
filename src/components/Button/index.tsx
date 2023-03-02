function Button(props){

    const {type, handleClick} = props;

    return(
        <button 
        type={type}
        onClick={event => handleClick(event)}
        className="bg-green-700 flex justify-center p-4 text-white font-bold rounded shadow-md mt-12 md:mb-10 mb-2 w-full md:text-xl text-md transition transition-all duration-400 hover:bg-green-500">
            Начать отсчет
        </button>
    )
}

export default Button;