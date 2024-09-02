import { React, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import AOS from 'aos';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer';
import '../src/assets/font/font-awesome.css';
import { BinanceProvider } from './context/BinanceProvider';
import routes from './pages';
import Page404 from './pages/404';

// Create a client
const queryClient = new QueryClient();
function App() {
    useEffect(() => {
        AOS.init({
            duration: 2000,
        });
    }, []);

    return (
        <>
            <QueryClientProvider client={queryClient}>
                <BinanceProvider>
                    <Header />
                    <Routes>
                        {routes.map((data, idx) => (
                            <Route
                                key={idx}
                                path={data.path}
                                element={data.component}
                                exact
                            />
                        ))}

                        <Route path="*" element={<Page404 />} />
                    </Routes>
                    <Footer />
                </BinanceProvider>
            </QueryClientProvider>
        </>
    );
}

export default App;
