import { useState } from "react";
import "components/DataEv/styles.css";
import DatePicker from "react-widgets/DatePicker";
import "react-widgets/styles.css";
import Button from "components/Button";


function DataEv({updateData, updateTime}) {
   

    const [postDate, setPostDate] = useState(new Date());      
    const [holiday, setHoliday] = useState("");

    const handleClick = (event) =>{

        event.preventDefault()    
        updateData(holiday)
        setHoliday("")
        updateTime(postDate)
    }

    const resetAll = (event) =>{
      event.preventDefault()    
      updateData(" ")
      updateTime(0)
  }

    return (
      <div className="flex flex-col items-center md:w-5/12 w-11/12 md:pt-2 pt-0"> 
  <form className="flex flex-col items-center w-full md:pt-10 pt-0">     
        <div className="flex w-full justify-center items-center">
          <DatePicker                                        
            onChange={date => setPostDate(date)}
            defaultValue={postDate} includeTime 
            className="w-full mb-4"
          />
        </div>

        <div className="w-full flex justify-center">
              <input 
                onChange={(event) => setHoliday(event.target.value)}
                type="text" 
                value={holiday} 
                placeholder="Name of a holiday"
                className="w-full p-4 rounded color-gray md:text-2xl text-xl"></input>
        </div>

        <div className="flex md:flex-row flex-col md:gap-3 gap-1 justify-center w-full">
          <Button handleClick={handleClick} type="submit"/>
          <button 
              onClick={(event) => resetAll(event)}
              className="bg-red-700 flex justify-center p-4 text-white font-bold rounded shadow-md md:mt-12 mt-2 mb-10 w-full md:text-xl text-md transition transition-all duration-400 hover:bg-red-500">
                  Сброс
            </button>
          </div>

  </form>
      </div>
    ); 
}


export default DataEv;