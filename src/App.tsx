import './global.css';

import styles from  './App.module.css'
import { CreateButton } from './components/CreateButton';

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Hello world</h1>
      <CreateButton />
    </div>
  );
}

export default App
