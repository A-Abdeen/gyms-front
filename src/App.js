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
import ClassList from "./components/ClassList";
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
        <GymsList />
      </Route>

      <Route exact path="/gyms/:gymSlug/addclass">
        <ClassForm />
      </Route>
      <Route exact path="/classes">
        <ClassList />
      </Route>
    </div>
  );
}

export default App;
