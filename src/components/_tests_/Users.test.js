import {shallow} from 'enzyme';
import Users from '../Users/Users';

describe('Users',function() {
    let mountedUsers;
    let props;

    beforeEach(()=> {
        props = {
            currentUsers: [{
            id:5,
            avatar:'',
            first_name:'Robert',
            last_name:'Johnson',
            email:''
            }
            ,{
            id:6,
            avatar:'',
            first_name:'',
            last_name:'',
            email:''
            },
            
            {
            id:7,
            avatar:'',
            first_name:'',
            last_name:'',
            email:''
            }]
        }
        mountedUsers = shallow(<Users {...props}/>)
    })

    it('renders users', ()=> {
        mountedUsers;
    })

    it('renders three links',()=> {
        let link = mountedUsers.find('Link');
        expect(link.length).toBe(3);
    })

    it('renders link with unique ids',()=> {
        let firstpage = mountedUsers.find('Link').at(0);
        expect(firstpage.props().to.pathname).toEqual('users/5');

        let secondpage = mountedUsers.find('Link').at(1);
        expect(secondpage.props().to.pathname).toEqual('users/6');

        let thirdpage = mountedUsers.find('Link').at(2);
        expect(thirdpage.props().to.pathname).toEqual('users/7');
    })
    
    it('renders user fullname as a link text',()=> {
        let li = mountedUsers.find('li').at(0);
        expect(li.text()).toEqual('Robert Johnson')
    })
}) 