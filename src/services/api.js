export default async function getCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return Object.keys(data).filter((currency) => currency !== 'USDT');
}

export async function getAllCurrencies() {
  const response = await fetch('https://economia.awesomeapi.com.br/json/all');
  const data = await response.json();
  return data;
}
