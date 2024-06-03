import logo from './logo.svg';
import './App.css';
import Counter from './Components/counter';
import Alert from './Components/alert';
import Button from './Components/button';

function App() {
  let Citys = {
    name: ['HCM', 'Da Nang', 'Ha Noi'],
  }

  return (
    <>
    <Button color='primary' onClick={() => alert('Clicked')}>Click me</Button>
    <Alert >
      <span>Hello world</span>
    </Alert>
    <Counter cities={Citys} onSelectedItem={onSelectedItem}></Counter>
    </>
  );
}
function onSelectedItem(city){
  console.log(city);
}
export default App;
