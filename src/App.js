import "./App.css";
import { Add } from "./components/add/add";
import { List } from "./components/list/list";

function App() {
  return (
    <div className="App">
      <div className="App-header">투두리스트</div>
      <Add />
      <List />
    </div>
  );
}

export default App;
