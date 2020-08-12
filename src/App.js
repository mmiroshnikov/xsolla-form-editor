import React, {useState, Fragment} from 'react';




import {
  BrowserRouter as Router,
  useLocation,
  Switch,
  withRouter,
  Link,
  Route,
} from "react-router-dom";
// import { Layout } from './Layout';
import { ContextProvider } from './context';




function App() {

  const [route, setRoute] = useState('/')
  const [opened, setOpened] = useState(true)


  return (


<div className="App">
<ContextProvider>

      <Router>

        <Switch>

          <Route>
            <Fragment>
              {/* <Layout route={route} opened={opened}/> */}
            </Fragment>
          </Route>

        </Switch>

      </Router>


    </ContextProvider>
    </div>

  );
}

export default App;
