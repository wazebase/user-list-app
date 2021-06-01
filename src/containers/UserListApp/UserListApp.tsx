import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import UserList from '../UserList/UserList';
import User from '../../components/User/User';
import CreateUser from '../CreateUser/CreateUser';
import NavBar from '../../components/NavBar/NavBar';
import Home from '../Home/Home';

import '../../styles/grid.scss';

const UserListApp = () => {

    return(
        <Router>
             <NavBar />
        <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/users" component={UserList} />
        <Route exact path="/create" component={CreateUser} />
        <Route path='/users/:id' component={User}/>
        </Switch>
        </Router>
    )
}

export default UserListApp;