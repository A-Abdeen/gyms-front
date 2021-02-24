import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import Gymform from "./components/GymForm";
import ClassForm from "./components/ClassForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import GymsList from "./components/GymsList";
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
      <Navbar />
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/gyms">
        {/* <Gymform /> */}
        <GymsList />
      </Route>

      <Route exact path="/gyms/:gymSlug/addclass">
        <ClassForm />
      </Route>
    </div>
  );
}

export default App;
