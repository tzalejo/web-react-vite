import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';
import { SectionTitle } from './SectionTitle.jsx';
import { CryptoExchange } from './Components/CryptoExchange.jsx';
import { SectionOfOpinions } from './Components/SectionOfOpinions.jsx';
import { Graphic } from './Components/Graphic.jsx';
import { BinanceProvider } from './context/BinanceProvider';
import { Balance } from './Components/Balance.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// Create a client
const queryClient = new QueryClient();
export const App = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BinanceProvider>
                <Header />
                <SectionTitle />
                <Graphic />
                <Balance />
                <CryptoExchange />
                <SectionOfOpinions />
                <Footer />
            </BinanceProvider>
        </QueryClientProvider>
    );
};
