import ReactDOM from 'react-dom';
import routes from '../../site/routes';

ReactDOM.render(
  routes(),
  document.querySelector('.js-app')
);
