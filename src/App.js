import "./App.css";
import TodoApp from "./components/todoApp/todoApp";
import { BrowserRouter } from "react-router-dom";
import LayOut from "./LayOut/LayOut";
import TodoContextProvider from "./context/contextProvider";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <TodoContextProvider>
          <LayOut>
            <TodoApp />
          </LayOut>
        </TodoContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
