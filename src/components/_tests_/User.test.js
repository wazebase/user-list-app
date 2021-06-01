import routeData from 'react-router';
import User from '../User/User';
import {shallow} from 'enzyme';

describe('user',()=> {
let mountedUser;
const mockLocation = {
        pathname: '/users',
        hash: '',
        search: '',
        state: {
            user: {
                avatar:'',
                first_name:'',
                last_name:'',
                email:''
            }
        }
      }
      
beforeEach(() => {
        jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation)
        mountedUser = shallow(<User />)  
    });
      
      it('renders user',()=> {
        mountedUser; 
      })

      it('shows email',()=> {
          let email = mountedUser.find('#email');
          expect(email.length).toBe(1);
      })
      
      it('shows name',()=> {
          let name = mountedUser.find('#user-name')
          expect(name.length).toBe(1);
      })

      it('shows avatar',()=> {
          let image = mountedUser.find('img');
          expect(image.length).toBe(1);
      })

      it('renders a Link that contains a button',()=> {

        let link = mountedUser.find('Link');
        let button = link.find('button');

        expect(button.length).toBe(1);
        expect(link.length).toBe(1);
       
      })

      it('has a Back written inside of that button',()=> {
        let button = mountedUser.find('button');
        expect(button.text()).toBe('Back');
      })

      it('has a Link that navigates to userlist page',()=> {
        let link = mountedUser.find('Link');
        expect(link.props().to).toEqual('/users');
      })
})
