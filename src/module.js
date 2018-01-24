import fetch from 'isomorphic-fetch';

const message = "world";

console.log(process.argv);

console.log(`hello ${message}`);

const fetchOrders = async () => {
  const response = await fetch('https://orders.medeo.io/');
  const body = await response.json();
  console.log(body);
}




fetchOrders();
export default message;
