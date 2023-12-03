// TwelveHourTime.jsx

const TwelveHourTime = ({ date }) => {
  const formatTime = (inputDate) => {
    return inputDate
      ? new Date(inputDate).toLocaleTimeString('en-US', {
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        })
      : 'N/A';
  };

  return <span  className="text-sm">{formatTime(date)}</span>;
};

export default TwelveHourTime;
