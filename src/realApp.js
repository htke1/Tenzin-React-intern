import {BrowserRouter, Route, Link} from 'react-router-dom'
import App from './App'
import AdminPage from './react-admin'
export const RealApp =()=>{
    return(
        <BrowserRouter>
        <Route exact path='/' component={App}/>
  <Route exact path="/admin" component={AdminPage} />
  </BrowserRouter>
    )
}