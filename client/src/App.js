import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './utils/store';
import CityScene from './components/CityScene';
import Header from './components/Header';
import Footer from './components/Footer';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import About from './pages/About';
import Login from './pages/Login';
import Messages from './pages/Messages';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
    uri: '/graphql'
});

const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('app_id_token');
    console.log(token);
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : ""
        }

    }
});

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <div className="App">
                <Provider store={store}>
                    <CityScene />
                    <Router>
                        <Header />
                        <main>
                            <Routes>
                                <Route path='/' element={<Home />} />
                                <Route path='/portfolio' element={<Portfolio />}/>
                                <Route path='/contact' element={<Contact />}/>
                                <Route path='/about' element={<About />} />
                                <Route path='/login' element={<Login />} />
                                <Route path='/messages' element={<Messages />} />
                            </Routes>
                        </main>
                        <Footer />
                    </Router>
                </Provider>
            </div>
        </ApolloProvider>
    );
}

export default App;
