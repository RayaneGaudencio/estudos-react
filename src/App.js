import { GithubApi } from "./components/GithubApi/GithubApi";
import Lifecycle from "./components/Lifecycle/Lifecycle";
import Portals from "./components/Portals/Portals";
import { ReactDOM } from "react";
import Form from "./components/Forms/Form";
import Form2 from "./components/Forms/Form2";

function App() {
  return (
    <div className="App">
      {/* <GithubApi /> */}
      {/* <Lifecycle /> */}
      {/* {ReactDOM.createPortal(<Portals />, document.getElementById('portals'))} */}
      <Form />
      <Form2 />
    </div>
  );
}

export default App;
