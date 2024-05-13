import './App.css';
import Navbar from './components/Navbar';
// import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar/>
    <div className='container'>
      <TextForm name ="enter your text to analyze"/>
    </div>
    </>
  );
}

export default App;
