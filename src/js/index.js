import dayjs from 'dayjs';
import '../sass/style.scss';

let hello = () => "Hello!";
console.log(hello());

console.log(dayjs().format('MMMM DD YYYY'));
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY'));