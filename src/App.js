import logo from "./logo.svg";
import "./App.css";
import Parent from "./Parent";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Parent />
      </UserProvider>
    </div>
  );
}

export default App;
