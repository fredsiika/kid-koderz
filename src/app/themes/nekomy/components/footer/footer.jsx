import React, { Component } from 'react';
import Helpers from '../../../../core/common/helpers';
import Icon from '../../../../core/common/lib/icon/icon';
import Logo from '../../../../../../static/svg/logo.svg';

class Footer extends Component {

  componentDidMount() {
    Helpers.getAppVersion('.app-version');
  }

  render() {
    return (
      <section className="footer">
        <span>Kid Koderz <span className="app-version" />
          <Icon glyph={Logo} />
          2018. Licensed under GPLv2. More info at <a href="https://github.com/fredsiika/kid-koderz">Kid Kodrez Github</a>
        </span>
      </section>
    );
  }
}

export default Footer;
