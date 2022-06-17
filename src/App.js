import logo from './logo.svg';
import './App.css';
import TodoApp from './components/todoApp/todoApp';
import { BrowserRouter } from 'react-router-dom';
import LayOut from './LayOut/LayOut';

function App() {
  return (
<BrowserRouter> 
    <LayOut> 
      <TodoApp />
    </LayOut>
</BrowserRouter>
  );
}

export default App;
