import { shallow } from 'enzyme';
import * as React from 'react';

//import { LocaleEnum } from '../../../constants/enums';
import Header from '../';

describe('<Header />', () => {

  test('displays without errors', () => {  
    const wrapper = shallow(
      <Header />
    );
    expect(wrapper.find('LanguageSwitcher').length).toEqual(1);
  });

});
