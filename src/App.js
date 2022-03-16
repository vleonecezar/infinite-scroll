import Header from "./Components/Header";
import Post from "./Components/Post";
import { GlobalStyles } from "./Styles/GlobalStyles";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <Post />
    </div>
  );
}

export default App;
