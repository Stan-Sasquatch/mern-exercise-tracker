import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import EditExercise from "./components/edit-exercise.component";

import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <br />
        <Route path="/" exact component={ExercisesList} />
        <Route path="/edit/:id"
          render={(props) => <EditExercise {...props} editMode={true} />} />

        <Route path="/create" >
          <EditExercise editMode={false} />
        </Route>

        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
