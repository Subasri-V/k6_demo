import http from 'k6/http';

export const options ={
    vus:1000,
    iterations:10000,
};

export default function () {
  const url = 'http://localhost:4000/create';
  const payload = JSON.stringify({
    username:"subasri",
    password:"suba1234",
  });

  const params = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  http.post(url, payload, params);
}