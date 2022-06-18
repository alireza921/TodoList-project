import "./App.css";
import TodoApp from "./components/todoApp/todoApp";
import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <LayOut>
          <TodoApp />
        </LayOut>
      </BrowserRouter>
    </div>
  );
}

export default App;
