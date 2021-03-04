import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Orders } from './pages/Orders/Orders';
import { Details } from './pages/Details/Details';
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <Header />

      <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={true} />
        <Switch>
          <Route exact path="/">
            <Orders />
          </Route>
          <Route 
          exact path="/order/:id"
          >
            <Details/>
          </Route>
          
        </Switch>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
