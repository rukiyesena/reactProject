import React from 'react';
import Footer from './components/Footer'
import AddTodo from './containers/AddTodo'
import VisibleTodoList from './containers/VisibleTodoList'/*
import Client from "./pages/Client";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Inventory from "./pages/Inventory";
import Personel from "./pages/Personel";
import NotFound from "./pages/NotFound";
import AddPersonel from "./pages/AddPersonel";
import AddClient from "./pages/AddClient";
import AddInventory from "./pages/AddInventory";
import UpdatePersonel from "./pages/UpdatePersonel";
import UpdateClient from "./pages/UpdateClient";
import UpdateInventory from "./pages/UpdateInventory";
import Charts from "./components/Charts";
*/
import './App.css';

/*
class App extends Component {
  render() {

    return (
      <Router>
        <div className="App ">
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/personel" component={Personel} />
            <Route exact path="/client" component={Client} />
            <Route exact path="/inventory" component={Inventory} />
            <Route exact path="/charts" component={Charts} />
            <Route exact path="/add-personel" component={AddPersonel} />
            <Route exact path="/add-client" component={AddClient} />
            <Route exact path="/add-inventory" component={AddInventory} />
            <Route exact path="/edit-personel/:id" component={UpdatePersonel} />
            <Route exact path="/edit-client/:id" component={UpdateClient} />
            <Route exact path="/edit-inventory/:id" component={UpdateInventory} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}*/
const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)
export default App;
