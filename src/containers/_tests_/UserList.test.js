import {shallow} from 'enzyme';
import Userlist from '../UserList/UserList';

describe('UserList',function() {
    let mountedUserlist;
  

    beforeEach(()=> {
        mountedUserlist = shallow(<Userlist />)
    })

    it('renders userlist', ()=> {
        mountedUserlist;
    })

    it('renders pagination',()=> {
        let pagination = mountedUserlist.find('Pagination');
        expect(pagination.length).toEqual(1);
    })

    it('renders Users',()=> {
        let users = mountedUserlist.find('Users');
        expect(users.length).toBe(1);
    })

})
