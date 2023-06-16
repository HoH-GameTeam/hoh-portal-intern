export function rnn(num: number, n: number) {
  // num : số cần xử lý
  // n: số chữ số sau dấu phẩy cần lấy
  const base = 10 ** n;
  // const result = Math.round(num * base) / base;
  const result = Number.parseFloat(num.toFixed(n));
  return result;
}

export function rnn2(num: number, n: number) {
  // num : số cần xử lý
  // n: số chữ số sau dấu phẩy cần lấy
  const base = 10 ** n;
  const result = Math.round(num * base) / base;
  return result;
}

export function localStringNumber(
  number: number,
  decimalDigits: number = 2,
  locale: string = 'en',
) {
  return number.toLocaleString(locale, {
    minimumFractionDigits: decimalDigits,
    maximumFractionDigits: decimalDigits,
  });
}
