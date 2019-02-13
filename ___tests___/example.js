import style from '../src/style.css';

export default (func) => {
  func(style);
  return 'done';
};
