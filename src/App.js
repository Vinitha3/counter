import { BrowserRouter, Route, Switch } from "react-router-dom"
import Counter from './Counter'
import Basics from "./hooks/02-useEffect/basics";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path = "/">
          <Counter />
        </Route>
        <Route exact path = "use-effect">
          <Basics />
        </Route>
      </Switch>
    </BrowserRouter>
      
  )
}

export default App;
