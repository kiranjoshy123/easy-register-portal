import moment from "moment";

const formatDate = (dateString) => {
  return moment(dateString).format("DD MMMM YYYY");
};

const formatMonth = (dateString) => {
  return moment(dateString).format("MMMM YYYY");
};

// .toLocaleString("en-IN", { style: "currency", currency: "INR" }),
const formatCurrency = (amount) => {
  if (amount === null) return null;

  return amount.toLocaleString("en-IN", { style: "currency", currency: "INR" });
  // const sanitizedAmount = parseFloat(amount.toString().replace(/,/g, ""));
  // if (isNaN(sanitizedAmount)) return ""; // Ensure it's a valid number

  // // Convert number to string and apply Indian comma formatting
  // const formattedAmount = sanitizedAmount.toFixed(2); // Ensure two decimal places
  // const [integerPart, decimalPart] = formattedAmount.split(".");

  // // Format the integer part according to Indian numbering
  // const lastThreeDigits = integerPart.slice(-3);
  // const otherDigits = integerPart.slice(0, -3);
  // const formattedIntegerPart =
  //   otherDigits.replace(/\B(?=(\d{2})+(?!\d))/g, ",") +
  //   (otherDigits ? "," : "") +
  //   lastThreeDigits;

  // return `₹ ${formattedIntegerPart}.${decimalPart}`;
};

export { formatDate, formatMonth, formatCurrency };
