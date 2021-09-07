import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";
import NavBar from './NavBar';
import PreCautions from './PreCautions';
import Products from './Products';
import Signup from './Signup';
const Routers = () => {
    return (
        <div>

            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/products" component={Products} ></Route>
                    <Route path="/precautions" component={PreCautions}></Route>
                    <Route path="/signup" component={Signup}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
