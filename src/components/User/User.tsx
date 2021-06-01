import IUser from "../../interfaces-and-classes/IUser";
import {useLocation,Link} from 'react-router-dom';
import './user.scss';


const User = () => {
  //getting specific props from useLocation hook
   const location = useLocation();
   const props:any = location.state;
   const user:IUser = props.user;

    return(
      <div>
        <div className='list-group-item user-box' id='user'>
          <div id='user-info'>
          <img alt ='user img' src={user.avatar} /> 
          <h3 id='user-name'>
          <strong>{user.first_name} {user.last_name}</strong>
        </h3>
          <p id='email'>Email adress: <span>{user.email}</span></p>
          </div>
          </div>
        <div id='button-div'>
          <Link to='/users'><button>Back</button></Link>
      </div>
      </div>
    )
}

export default User;