import './App.scss';
import Body from './components/body/Body';
import Sidebar from './components/sidebar/Sidebar';

const App = () => {
  return(
    <>
      <div className="container">
        <Sidebar />
        <Body />
      </div>
    </>
  );
}

export default App