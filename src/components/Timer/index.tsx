import Countdown from "components/Countdown";
import DataEv from "components/DataEv";
import { useState } from "react";
import Holidays from 'components/Holidays';



function Timer() {

    const null_data = 0;
    const [targetDate, setTargetDate] = useState(new Date(null_data));
    const updateTime = (value: Date) => {
        setTargetDate(value)
      }

    const [nameHoliday, setName] = useState(" ");  
    const updateData = (value: string) => {
        setName(value)
      }

    return(
        <div>
            <div className="flex justify-center w-full">
                <p className="text-center font-semibold md:text-2xl text-sm p-2 rounded-xl bg-slate-400 text-black m-8">Создайте таймер обратного отсчета</p>
            </div>

            <h1 className="md:text-3xl text-sm text-center text-slate-400">{nameHoliday}</h1>
            <Countdown targetDate={targetDate} />

            <div className="flex items-center flex-col">
                <p className="text-center font-semibold md:text-2xl text-sm p-2 rounded-xl bg-slate-400 text-black m-8 w-fit">Выберите дату и введите название события</p>
                <DataEv updateData={updateData} updateTime={updateTime}/>
               
            </div>
            <Holidays updateData={updateData} updateTime={updateTime}/>
        </div>
    )
}

export default Timer;