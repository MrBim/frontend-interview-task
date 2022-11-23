export const formatDate = (date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const year = date.split("-")[0];
  const month = months[date.split("-")[1] - 1];
  return `${month} ${year}`;
};

export const getDifference = (initialPrice, currentPrice) => {
  return currentPrice - initialPrice;
};

export const calculatePercentageChange = (initialPrice, currentPrice) => {
  return ((currentPrice - initialPrice) / Math.abs(initialPrice)) * 100;
};

export const calculateAppreciationRate = (
  initialPrice,
  currentPrice,
  purchaseDate,
  lastUpdate
) => {
  const purchaseYear = purchaseDate.split("-")[0];
  const updateYear = lastUpdate.split("-")[0];
  const duration = updateYear - purchaseYear;
  return calculatePercentageChange(initialPrice, currentPrice) / duration;
};
