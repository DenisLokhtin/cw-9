import {BrowserRouter, NavLink, Route, Switch} from "react-router-dom";
import Home from "./Components/Home/Home";
import AddContact from "./Components/AddContact/AddContact";
import AxiosApi from "./AxiosApi";
import {useEffect} from "react";
import {ActionSetContacts} from "./Store/Action";
import './App.css';
import {useDispatch} from "react-redux";

function App() {
    const dispatch = useDispatch();
    const setContacts = (value) => dispatch({type: ActionSetContacts, payload: value});

    useEffect(() => {
        const getContact = async () => {
            try {
                await AxiosApi.get('/.json').then(response => {
                    if (response.data !== null) {
                        const arrayContacts = Object.entries(response.data);
                        const contacts = [];
                        for (let [key, value] of arrayContacts) {
                            contacts.push({...value, id: key})
                        }
                        setContacts([...contacts])
                    }
                });
            } catch (e) {
                alert(e)
            }
        }

        getContact()
    }, [])

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
