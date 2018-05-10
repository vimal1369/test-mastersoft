import * as React from 'react';

import { ActionType } from '../../constants/types';
import { LocaleEnum } from '../../constants/enums';

import './styles.css';

interface Props {
  locale: LocaleEnum;
  toggleRightSidebar(): ActionType<string>;
}

const LanguageSwitcher: React.SFC<Props> = (props) => {
  return (
    <div className="circle" onClick={() => props.toggleRightSidebar()}>
      <p>{props.locale.toUpperCase()}</p>
    </div>
  );
};

export default LanguageSwitcher;
