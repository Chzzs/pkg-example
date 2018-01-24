import getOpt from 'node-getopt';
import fetch from 'isomorphic-fetch';
import sha256 from 'crypto-js/sha256'
const AUTH_URL = 'https://kligo.medeo.io/api/auth';


const getChallenge = async (username) => {
  const response = await fetch(`${AUTH_URL}?email=${username}`);
  return await response.json();
}

const postChallenge = async (userId, hash) => {
  console.log(userId, hash);
  const response = await fetch(`${AUTH_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      userId,
      challenge: hash
    })
  })
  return await response.json();
}
const logIn = async (username, password) => {
  const { userId, challenge } = await getChallenge(username);
  const hash = sha256([challenge, password].join('')).toString()
  console.log(userId);

  const body = await postChallenge(userId, hash);


  console.log(body);
}


const { options } = getOpt
  .create([
    ['u', 'username=ARG', ''],
    ['p', 'password=ARG', ''],
    ['h' , 'help'   , 'display this help']
  ])
  .bindHelp()
  .parseSystem();

const {username} = options;
if (username !== undefined) {
  logIn(username)
}






/*
fetchOrders();
export default message;
*/
