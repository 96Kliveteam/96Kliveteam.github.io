import logo from './logo.svg';
import './App.css';
import Counter from './Components/counter';

function App() {
  let Citys = {
    name: ['HCM', 'Da Nang', 'Ha Noi'],
  }

  return (
    <><Counter cities={Citys} onSelectedChange={onSelectedChange}></Counter></>
  );
}
function onSelectedChange(){

}
export default App;
