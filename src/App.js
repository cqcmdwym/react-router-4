import React from 'react';
import Header from './components/layout/Header';
import Sidebar from './components/layout/Sidebar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NameForm from './components/prompt/NameForm';
import PropViewer from './components/prompt/PropViewer';

const App = () => {

    return (
        <Router>
            <div>
                <Header />
                <Sidebar />
                <div className='rightContentContainer'>

                    {/* <Route path='/' component={Home} exact/>
                    <Route path='/foo' component={Home} /> */}
                    <Switch>
                        <Route path='/' component={Home}  exact={true} />
                        <Route path='/prompt' component={NameForm} />
                        <Route path='/props' component={PropViewer} />
                    </Switch>
                </div>
            </div>
        </Router>
    );
};


export default App;