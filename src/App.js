import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import AddContact from "./Components/AddContact/AddContact";
import './App.css';

function App() {
    return (
        <BrowserRouter>
            <div className="navigation">
                <NavLink className="Header" to="/">Contacts</NavLink>
                <NavLink className="AddContact" to="/AddContacts">Add new Contact</NavLink>
            </div>
            <div className="container">
                <div children="container-inner">
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/AddContacts" component={AddContact}/>
                        <Route render={() => <h1>NOT FOUND</h1>}/>
                    </Switch>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
