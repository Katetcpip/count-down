type Props = {
    name: string,
    data: string
}

const holidays: Props[] = [
    {
        name: "8 марта",
        data: "2023-03-08"
    },
    {
        name: "23 февраля",
        data: "2024-02-23"
    },
    {
        name: "день Конституции",
        data: "2023-12-12"
    },
    {
        name: "день торта",
        data: "2023-07-20"
    }
];

function Holidays({updateData, updateTime}) {

    const handleClick = (item) =>{

          updateData(item.name)
          updateTime(item.data)
      }

    return(
        <div className="flex flex-row gap-5 flex-wrap justify-center p-4 pt-0 pb-20 cursor-pointer">
     {holidays.map((item: Props) => {
        return(
                <button onClick={() => handleClick(item)} className=" underline decoration-indigo-500 text-indigo-300 hover:text-indigo-400 ">{item.name}</button>
         )
     })}
     </div>
    );
}

export default Holidays;