import Button from 'components/common/button';
import * as React from 'react';
import { match, RouteProps } from 'react-router';
import { RouteComponentProps } from 'react-router-dom';

interface IState {
  paramsId: string;
}

interface Props {
  match: match<{}>;
}

interface TParams {
  product_id: string;
}

class Products extends React.Component<
  Props & RouteProps & RouteComponentProps<TParams>,
  IState
> {
  constructor(props: any) {
    super(props);
    this.state = {
      paramsId: ''
    };
  }

  componentDidMount() {
    const productId: string = this.props.match.params.product_id;
    this.setState(state => ({
      ...state,
      paramsId: productId
    }));
  }

  render() {
    const { paramsId } = this.state;
    return (
      <React.Fragment>
        <h1>Products</h1>
        <div>Route params: {paramsId}</div>

        <Button text="Click me" type="primary" />
        <Button text="Click me" type="success" />
        <Button text="Click me" />
      </React.Fragment>
    );
  }
}

export default Products;
