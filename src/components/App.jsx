import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Channel from "./Channels"
import Home from "./Home"
export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Home />
                </Route>
                <Route exact path='/channels'>
                    <Channel />
                </Route>
            </Switch>
        </Router>
    )
}
