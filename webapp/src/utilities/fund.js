const getTotalMarketValue = (funds) => {
  if (funds.length === 0) return 0;

  // Step 1: Find the latest date from the first entry of each fund
  const latestDate = funds.reduce((latest, fund) => {
    const firstDate = new Date(fund.History[0].Date);
    return firstDate > latest ? firstDate : latest;
  }, new Date(0)); // Start with a very early date (epoch)

  // Step 2: Sum the market values for funds whose first entry has the latest date
  return funds.reduce((total, fund) => {
    const firstEntry = fund.History[0];
    const firstEntryDate = new Date(firstEntry.Date);

    if (firstEntryDate.getTime() === latestDate.getTime()) {
      // If the first entry's date matches the latest date, add the MarketValue
      total += parseFloat(firstEntry.MarketValue.replace(/,/g, "")); // Remove commas and parse as number
    }

    return total;
  }, 0);
};

// Function to calculate sum of market value per month.
const calculateMonthlyMarketValue = (funds) => {
  const monthlyData = {};

  funds.forEach((fund) => {
    fund.History.forEach((item) => {
      // Extract month and year from the Date
      const monthYear = new Date(item.Date).toLocaleDateString("en-IN", {
        year: "numeric",
        month: "short",
      });

      // Parse the MarketValue to get the numeric value
      const marketValue = parseFloat(
        item.MarketValue.replace(/[^0-9.-]+/g, "")
      );

      // Initialize the entry for the month if it doesn't exist
      if (!monthlyData[monthYear]) {
        monthlyData[monthYear] = { totalMarketValue: 0, numFunds: 0 };
      }

      monthlyData[monthYear].totalMarketValue += marketValue;
      monthlyData[monthYear].numFunds += 1;
    });
  });

  // Convert the object to an array
  const result = Object.keys(monthlyData).map((month) => ({
    date: month,
    totalMarketValue: monthlyData[month].totalMarketValue,
    numberOfFunds: monthlyData[month].numFunds,
  }));

  // Sort the result by Date
  result.sort((a, b) => new Date(b.date) - new Date(a.date));

  return result;
};

export { getTotalMarketValue, calculateMonthlyMarketValue };
