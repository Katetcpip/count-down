const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='md:text-6xl text-xl'>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;