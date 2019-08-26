import React, { Component } from 'react';

const withSplitting = getComponent => {
  // 여기서 getComponent 는 () => import('./SplitMe') 의 형태로 함수가 전달되야합니다.
  class WithSplitting extends Component {
    state = {
      Splitted: null
    };

    constructor(props) {
      super(props);
      getComponent().then(({ default: Splitted }) => {
        this.setState({
          Splitted
        });
      });
    }

    render() {
      const { Splitted } = this.state;
      if (!Splitted) {
        return null;
      }
      return <Splitted {...this.props} />;
    }
  }

  return WithSplitting;
};

export const About = withSplitting(() => import('Src/Container/About/About'));
export const User = withSplitting(() => import('Src/Container/User/User'));
export const SuperMarket = withSplitting(() => import('Src/Container/SuperMarket/SuperMarket'));
export const Profile = withSplitting(() => import('Src/Container/Profile/Profile'));
