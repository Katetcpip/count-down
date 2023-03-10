const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className={isDanger ? 'countdown danger' : 'countdown'}>
      <p className='text-6xl'>{value}</p>
      <span>{type}</span>
    </div>
  );
};

export default DateTimeDisplay;