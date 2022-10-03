import { FC } from 'react';
import styles from './App.module.scss';

const App: FC = () => {
  const { wrapper } = styles;
  return (
    <div className={wrapper}>
      App
    </div>
  );
}

export default App;
