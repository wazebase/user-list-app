import {shallow} from 'enzyme';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';

describe('NavBar',function(){
    let mountedNavBar;
    beforeEach(()=> {
        mountedNavBar = shallow(<NavBar />);
    
        })

    it('renders navbar',()=> {
        mountedNavBar;
        })

    it('renders three links',()=> {
        let link = mountedNavBar.find('li');
        expect(link.length).toBe(3);
    })
   
    it('renders homepage link',()=> {
        let homepage = mountedNavBar.find(Link).at(0);
        expect(homepage.props().to).toEqual('/');
    })

    it('renders userlist link',()=> {
        let userlist = mountedNavBar.find(Link).at(1);
        expect(userlist.props().to).toEqual('/users');
    })

    it('renders create user link',()=> {
        let createuser = mountedNavBar.find(Link).at(2);
        expect(createuser.props().to).toEqual('/create');
    })

})