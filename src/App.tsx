import './global.css';

import styles from  './App.module.css'
import { CreateButton } from './components/CreateButton';
import { DeleteButton } from './components/DeleteButton';

function App() {
  return (
    <div className={styles.wrapper}>
      <h1>Hello world</h1>
      <CreateButton />
      <DeleteButton />
    </div>
  );
}

export default App
