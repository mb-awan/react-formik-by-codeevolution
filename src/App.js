import style from './App.module.css';
import { YoutubeForm } from './Components/YoutubeForm';

const App = () => {
  return (
    <div className={style.App}>
      <YoutubeForm/>
    </div>
  );
}

export default App;
