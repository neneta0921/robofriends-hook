import React, { PureComponent } from 'react';

import CounterButton from './CounterButton';

class Header extends PureComponent {
  // shouldComponentUpdate(nextProps, nextState) {
  //   return false;
  // }

  render() {
    console.log('Header');
    return (
      <div>
        <h1 className="f1">RoboFriends</h1>
        <CounterButton color={'red'} />
      </div>
    )
  }
}

export default Header;