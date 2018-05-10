import { shallow } from 'enzyme';
import * as React from 'react';

import FooterSocialMedia from '../FooterSocialMedia';

describe('<FooterInfo />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <FooterSocialMedia />
    );
    expect(wrapper.find('.footerSocialMedia').length).toEqual(1);
  });

});
