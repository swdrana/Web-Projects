// DDMonYYYYWithTime.jsx
const DDMonYYYYWithTime = ({ date }) => {
  const formatDateTime = (inputDate) => {
    return inputDate
      ? new Date(inputDate).toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'short',
        year: 'numeric',
      }).replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${day} ${month}, ${year}\n`) +
      new Date(inputDate).toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
    : 'N/A';
  };

  return <span className=" text-sm">{formatDateTime(date)}</span>;
};

export default DDMonYYYYWithTime;
