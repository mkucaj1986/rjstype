import Home from 'components/home';
import NotFound from 'components/notfound';
import React, { Suspense } from 'react';
import { Route, Switch } from 'react-router';
import styles from './styles.css';

const Cart = React.lazy(() => import('../components/cart'));
const Shipping = React.lazy(() => import('../components/shipping'));
const Products = React.lazy(() => import('../pages/products'));

const routes = (
  <div className={styles.appContainer}>
    <Switch>
      <Route exact={true} path="/" component={Home} />
      <Route
        path="/cart"
        render={props => (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        )}
      />
      <Route
        path="/shipping"
        render={props => (
          <Suspense fallback={<div>Loading...</div>}>
            <Shipping />
          </Suspense>
        )}
      />
      <Route
        path="/products"
        render={props => (
          <Suspense fallback={<div>Loading...</div>}>
            <Products {...props} />
          </Suspense>
        )}
      />
      <Route
        path="/:product_id"
        render={props => (
          <Suspense fallback={<div>Loading...</div>}>
            <Products {...props} />
          </Suspense>
        )}
      />
      <Route component={NotFound} />
    </Switch>
  </div>
);

export default routes;
