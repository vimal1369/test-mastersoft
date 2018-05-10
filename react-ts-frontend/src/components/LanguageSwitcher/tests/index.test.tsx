import { shallow } from 'enzyme';
import * as React from 'react';

import { LocaleEnum } from '../../../constants/enums';
import LanguageSwitcher from '../';

describe('<LanguageSwitcher />', () => {

  test('click generates action', () => {
    const mock = jest.fn();
    const wrapper = shallow(
      <LanguageSwitcher
        locale={LocaleEnum.en}
        toggleRightSidebar={mock}
      />
    );
    wrapper.simulate('click');
    expect(mock).toHaveBeenCalled();
  });

});
