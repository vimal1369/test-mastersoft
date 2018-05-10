import { shallow } from 'enzyme';
import * as React from 'react';

import Footer from '../';

describe('<Footer />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <Footer />
    );
    expect(wrapper.find('FooterSocialMedia').length).toEqual(1);
    expect(wrapper.find('FooterInfo').length).toEqual(1);
  });

});
