import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from "./Home";
import NavBar from './NavBar';
import PreCautions from './PreCautions';
import Products from './Products';
import Contact from './Contact';
const Routers = () => {
    return (
        <div>

            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route path="/products" component={Products} ></Route>
                    <Route path="/precautions" component={PreCautions}> </Route>
                    <Route path="/contacus" component={Contact}></Route>
                </Switch>
            </Router>
        </div>
    )
}

export default Routers
