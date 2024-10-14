import React from 'react';

const withComponent = (WrappedComponent ,incrementNumber)=> {
  class WithComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          count: 0
        };
      }
    
      incrementCount = () => {
        this.setState(prevState => {
          return { count: prevState.count + incrementNumber };
        });
      };
    render() {
    //   return <OriginalComponent {...this.props} name="vani" />;
        return <WrappedComponent {...this.props} count={this.state.count} incrementCount={this.incrementCount} />;
    }
  }
  return WithComponent;
};

export default withComponent;
