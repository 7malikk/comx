export const formatNum = (number) => {
  const newNum = parseFloat(number);
  if (number) {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
    }).format(newNum);
  } else {
    return 'Loading...';
  }
};
