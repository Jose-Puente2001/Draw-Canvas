import { shallow } from 'enzyme';
import Navbar from './Navbar';

describe('test for the application Navbar', () => {
   it('should render without error', () => {
      const wrapper = shallow(<Navbar />);
      expect(wrapper).toHaveLength(1);
   })
})