import { Switch, Route } from "react-router-dom";
import Login from "./crud/components/Login";
import Databarang from "./crud/components/Databarang";
import EditUserFormTut from "./crud/forms/EditUserFormTut";
import App2 from "./App2";


const Routes = () => {

    return (
        <Switch>
            <Route path="/App2">
                <App2 />
            </Route>
            <Route path="/Databarang">
                <Databarang />
            </Route>
            <Route path="/EditUserFormTut">
                <EditUserFormTut />
            </Route>
            <Route path="/">
                <Login />
            </Route>
        </Switch>
    )
}

export default Routes
