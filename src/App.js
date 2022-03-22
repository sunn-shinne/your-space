import './App.css';
import Main from './Containers/Main/Main'
import {Switch, Route} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from "./Containers/About/About";
import Booking from "./Containers/Booking/Booking";
import Overview from "./Containers/Overview/Overview";

function App() {
    return (
        <div className="App">
            <div className="container">
                <Navbar />
                <Switch>
                    <Route path="/about" component={About}/>
                    <Route path="/booking" component={Booking}/>
                    <Route path="/overview" component={Overview}/>
                    <Route path="/" component={Main}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
