import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router";
import { GlobalStyle } from "./styles";
import ClassForm from "./components/ClassForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import SignUp from "./components/SignUp";
import GymsList from "./components/GymsList";
import ClassList from "./components/ClassList";
import ClassDetail from "./components/ClassDetail";
import GuestClassDetail from "./components/GuestClassDetail";
import Home from "./components/Home";
import GymForm from "./components/GymForm";
import BookedList from "./components/BookedList";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
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
      <GlobalStyle />
      <Route exact path="/signin">
        <SignIn />
      </Route>
      <Route exact path="/signup">
        <SignUp />
      </Route>
      <Route exact path="/gyms">
        <GymsList />
      </Route>
      <Route exact path="/gyms/addgym">
        <GymForm />
      </Route>
      <Route exact path="/gyms/:gymSlug/addclass">
        <ClassForm />
      </Route>
      <Route exact path="/guest/:gymSlug/classes/:classSlug">
        <GuestClassDetail />
      </Route>
      <Route path="/:gymSlug/classes/:classSlug">
        <ClassDetail />
      </Route>
      <Route exact path="/classes">
        <ClassList />
      </Route>
      <Route exact path="/myclasses">
        <BookedList />
      </Route>
      <Route exact path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
