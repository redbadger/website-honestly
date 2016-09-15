import ReactDOM from 'react-dom';
import routes from '../site/routes';

document.writeln('<main/>');

ReactDOM.render(
  routes(),
  document.querySelector('main')
);
