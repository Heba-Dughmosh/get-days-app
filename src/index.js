import moment from 'moment';

const input = document.querySelector('.input');
const btn = document.querySelector('.btn');
const res = document.querySelector('.res');

btn.onclick = () => {
   const x = moment(input.value).diff(moment(), 'days');
   res.innerText = `${x} days`;
} 