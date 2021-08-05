import { shallow } from 'enzyme';
import Canvas from './Canvas';

describe('test for the application canvas', () => {
   it('should render without error', () => {
      const wrapper = shallow(<Canvas />);
      expect(wrapper).toHaveLength(1);
   })

})