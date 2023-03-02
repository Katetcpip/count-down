import 'components/Countdown/styles.css';
import { useCountdown } from 'components/Calculation';
import DateTimeDisplay from 'components/DateTimeDisplay';

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>0 : 0 : 0 : 0</span>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }) => {
  return (
    <div className="show-counter flex flex-row justify-center">
      
        <DateTimeDisplay value={days} type={'Days'} isDanger={days <= 3} />
        <p className='text-6xl'>:</p>
        <DateTimeDisplay value={hours} type={'Hours'} isDanger={false} />
        <p className='text-6xl'>:</p>
        <DateTimeDisplay value={minutes} type={'Mins'} isDanger={false} />
        <p className='text-6xl'>:</p>
        <DateTimeDisplay value={seconds} type={'Seconds'} isDanger={false} />
    </div>
  );
};


const Countdown  = ({ targetDate }) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
  }
};

export default Countdown;
