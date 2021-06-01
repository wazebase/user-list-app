import {useState,useEffect} from 'react';
import axios from 'axios';
import IUser from '../../interfaces-and-classes/IUser';

import Users from '../../components/Users/Users';
import Pagination from '../../components/Pagination/Pagination';

import {API_URL} from '../../api/config';

const UserList = () => {
    const [data,setData] = useState<IUser[]>([]);
    const [error, setError] = useState('');
    const [currentPage,setCurrentPage] = useState(1);
    const [usersPerPage] = useState(2);

    useEffect(()=>{
      const fetchUserData = async () => {
        try {
        const res = await axios.get(API_URL);
        let newData = res.data.data
        setData(newData);
        } catch (err) {
          setError(`Unexpected ${err}`);
        }
        }
      fetchUserData();  
      
    },[])

    //this changes what specific users should be displayed
    const indexOfLastUser = currentPage * usersPerPage;
    const indexOfFirstUser = indexOfLastUser - usersPerPage;
    const currentUsers = data.slice(indexOfFirstUser,indexOfLastUser);

    //this function changes page list number
    const paginate = (pageNumber:number) => setCurrentPage(pageNumber);

    return(
        <div id='userlist'>
        {error?(<p id='loading-error' style={{marginLeft:15}}>{error}</p>):<></>}
      <Users currentUsers={currentUsers}/>
     <Pagination usersPerPage={usersPerPage} totalUsers={data.length} paginate={paginate}/>
        </div>
    )
}

export default UserList;