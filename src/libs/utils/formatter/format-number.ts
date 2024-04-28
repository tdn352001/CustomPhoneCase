export const formatNumber = (num: number) => {
  return Number(num)
    .toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })
    .slice(1);
};
