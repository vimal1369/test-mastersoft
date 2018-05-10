import { shallow } from 'enzyme';
import * as React from 'react';

import FooterInfo from '../FooterInfo';

describe('<FooterInfo />', () => {

  test('is working', () => {
    const wrapper = shallow(
      <FooterInfo />
    );
    expect(wrapper.find('.footerInfo').length).toEqual(1);
  });

});
