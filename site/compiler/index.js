import { uniq } from '../../lib/array';
import routes from '../routes';
import { parseRouter, routeFilePath } from './parse-router';

export default function compileSite(data) {
  const router = routes(data);
  const paths = uniq(parseRouter(router).map(routeFilePath));
  return paths; // TODO
}
