import PropTypes from 'prop-types';
import * as React from 'react';

interface State {
  fullName?: string;
}

interface IRecipeProps {
  text?: string | undefined;
  testFn: () => void;
}

class ReactCom extends React.Component<IRecipeProps, State> {
  static propTypes: { text: PropTypes.Validator<string> };
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    return nextProps;
  }

  constructor(props: any) {
    super(props);
    this.state = {
      fullName: ''
    };
  }

  handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      name,
      value
    }: { name: string; value: string } = e.target as HTMLInputElement;
    // tslint:disable-next-line:no-console
    console.log(name, value);
    this.setState(state => ({
      ...state,
      fullName: value
    }));
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    // tslint:disable-next-line:no-console
    console.log('form submitted', this.state.fullName);
  };

  componentDidUpdate(prevProps: any, prevState: any) {
    // tslint:disable-next-line:no-console
    console.log('Component DID UPDATE!', prevProps, prevState);
  }

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} name="name" />
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}

ReactCom.propTypes = {
  text: PropTypes.string.isRequired
};

export default ReactCom;
