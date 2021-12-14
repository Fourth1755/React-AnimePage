import { BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom';
import "./Tapper.css"
import Main1 from './Main1';
const Tapper=()=>{
    return(
        <div className ="container">
            <Router>
            <Switch>
                <div>
                <Route path="/" exact>
                    <div>
                        <Main1/>
                    </div>
                </Route>
                <Route path="/page2">
                    <div>
                        <h1>หน้าที่สอง</h1>
                    </div>
                </Route>
                <Route path="/page3">
                    <div>
                        <h1>หน้าที่สาม</h1>
                    </div>
                </Route>
                <Route path="/page4">
                    <div>
                        <h1>หน้าที่สี่</h1>
                    </div>
                </Route>
                <Route path="/page5">
                    <div>
                        <h1>หน้าที่ห้า</h1>
                    </div>
                </Route>
                </div>
            </Switch>
            <div className="btn-toolbar container" role="toolbar" aria-label="Toolbar with button groups" style={{textAlign:"center"}}>
                <div className="btn-group" role="group" aria-label="First group" >
                    <Link to="/"><button type="button" className="btn btn-primary">1</button></Link>
                    <Link to="/page2"><button type="button" className="btn btn-primary">2</button></Link>
                    <Link to="/page3"><button type="button" className="btn btn-primary">3</button></Link>
                    <Link to="/page4"><button type="button" className="btn btn-primary">4</button></Link>
                    <Link to="/page5"><button type="button" className="btn btn-primary">5</button></Link>
                </div>
            </div>
        </Router>
        </div>
        
    )
}
export default Tapper