import styles from './App.module.scss';
import { Header, Footer, BingoBoard, Body } from './components';

function App() {
  return (
    <div className={styles.App}>
      <Header />
      <Body>
        <BingoBoard />
      </Body>
      <Footer />
    </div>
  );
}

export default App;
