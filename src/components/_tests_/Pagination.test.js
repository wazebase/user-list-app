import {shallow} from 'enzyme';
import Pagination from '../Pagination/Pagination';

describe('Pagination',function() {
    let mountedPagination;
    let props;

    beforeEach(()=> {
        props = {
            usersPerPage:2,
            totalUsers: 6
        }
        mountedPagination = shallow(<Pagination {...props}/>)
    })
    it('renders pagination', ()=> {
        mountedPagination;
    })
    it('renders 3 pages pagination',()=> {
        let link = mountedPagination.find('li');
        expect(link.length).toBe(3);
    })

    it('triggers a function when link is clicked',()=> {
        let fn = () => {
            return 'something'
         }
         const mockCallBack = jest.fn();
         
         props = {
            usersPerPage:2,
            totalUsers: 6
        }
         const mountedPaginationWithCallback = shallow(<Pagination {...props} onClick={mockCallBack()}/>);
         mountedPaginationWithCallback.find('li').at(0).simulate('click');
         expect(mockCallBack.mock.calls.length).toBe(1);
    })
})