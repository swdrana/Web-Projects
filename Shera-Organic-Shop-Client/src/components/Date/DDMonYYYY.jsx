// 03 Dec, 2023

const DDMonYYYY = ({ date }) => {
  const formatDate = (inputDate) => {
    return inputDate
      ? new Date(inputDate).toLocaleDateString('en-US', {
          day: '2-digit',
          month: 'short',
          year: 'numeric',
        }).replace(/(\w+) (\d+), (\d+)/, (_, month, day, year) => `${day} ${month}, ${year}`)
      : 'N/A';
  };

  return <span className=" text-sm">{formatDate(date)}</span>;
};

export default DDMonYYYY;
