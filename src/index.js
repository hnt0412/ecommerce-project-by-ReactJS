import React, { useReducer } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { ProductsProvider } from './context/products_context'
import { FilterProvider } from './context/filter_context'
import { CartProvider } from './context/cart_context'
import { UserProvider } from './context/user_context'
import { Auth0Provider } from '@auth0/auth0-react'
//dev-zcrxqqv1.us.auth0.com
//N6fQbvZWDoep0FbIdkcRbhRVUTqpPiyh

ReactDOM.render(
    <Auth0Provider
    domain="dev-zcrxqqv1.us.auth0.com"
    clientId="N6fQbvZWDoep0FbIdkcRbhRVUTqpPiyh"
    redirectUri={window.location.origin}
    cacheLocation="localstorage"
  >
    <UserProvider>
    <ProductsProvider>
        <FilterProvider>
            <CartProvider>
                <App />
            </CartProvider>
        </FilterProvider>
    </ProductsProvider>
    </UserProvider>
  </Auth0Provider>,
    document.getElementById('root')
)
