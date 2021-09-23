import {Route} from "react-router-dom"
import './App.css'
import NavBar from "./navBar/navBar"
import Main from "./ui/pages/main/info"
import Info from "./ui/pages/main/info";




const App = () => {

    return (
        <div className="App">
            <NavBar/>
            {/*<Main/>*/}
            <Route path={'/main'} render={()=><Main/>}/>
            <Route path={'/info'} render={()=><Info/>}/>
        </div>
    );
}

export default App;
