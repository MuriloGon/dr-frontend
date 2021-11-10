import ApiInterface from './ApiInterface';
import LocalAPI from './LocalAPI';

const { REACT_APP_PROJ_ENV = 'local' } = process.env;

if (REACT_APP_PROJ_ENV !== 'local') throw new Error('Server not implemented yet');

const api: ApiInterface = (REACT_APP_PROJ_ENV === 'local'
  ? new LocalAPI()
  : new LocalAPI());

export default api;
