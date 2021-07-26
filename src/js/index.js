import 'bootstrap/dist/css/bootstrap.min.css';
import '../sass/style.scss';

import { Tooltip } from 'bootstrap';
import dayjs from 'dayjs';

let hello = () => "Hello!";
console.log(hello());

console.log(dayjs().format('MMMM DD YYYY'));
console.log(dayjs().subtract(10, 'days').format('DD/MM/YYYY'));

console.log('DB_HOST: ', process.env.DB_HOST);