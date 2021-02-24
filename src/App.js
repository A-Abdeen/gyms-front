import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Gymform from "./components/GymForm";
import ClassForm from "./components/ClassForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup"></Route>
      <Route exact path="/gyms">
        <Gymform />
      </Route>

      <Route
        exact
        path={[
          "/gyms/:gymSlug/addclass",
          // "/class",
        ]}
      >
        <ClassForm />
      </Route>
    </div>
  );
}

export default App;
