import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space } from 'antd';
import { Navbar, Homepage, Cryptocurrencies, News, CryptoDetails } from './components';

function App() {
  return (
    <div className="app">
      <div className='navbar'>
        <Navbar />
      </div>
      <div className='main'>
        <Layout>
          <div className='routes'>
            <Switch>
                <Route exact path='/'>
                  <Homepage />
                </Route>
                <Route exact path='/cryptocurrencies'>
                  <Cryptocurrencies />
                </Route>
                <Route exact path='/crypto/:coinId'>
                  <CryptoDetails />
                  <Route exact path='/news'>
                  <News />
                </Route>
                </Route>
            </Switch>
          </div>
        </Layout>
      <div className='footer' >
        <Typography.Title level={5} >
        All rights reserved. <br/>
        Trading cryptocurrencies carries a high level of risk, and may not be suitable for all investors. Before deciding to trade cryptocurrency you should carefully consider your investment objectives, level of experience, and risk appetite.
        Any opinions, news, research, analyses, prices, or other information contained on this website is provided as general market commentary, and does not constitute investment advice.
        </Typography.Title>
      </div>
      </div>
    </div>
  );
}

export default App;
