import {Link} from 'react-router-dom';
import './users.scss'


const Users = ({currentUsers}) => {
  //creating li with user name inside with a Link. Passing props via state of the Link to User
    return(
        <div  className='list-group mb-4 user-box' id="list">
          <h3>User list</h3>
        {currentUsers.map((user)=>
          <Link key={user.id} to ={{pathname:'users/' + user.id,
          state:{
        user:user
        }
          }}>
          <li key={user.id}>{user.first_name} {user.last_name}</li>
            </Link>)}
        </div>
    )
}

export default Users;