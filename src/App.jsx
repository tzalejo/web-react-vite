import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { SectionTitle } from './SectionTitle.jsx';
import { CryptoExchange } from './Components/CryptoExchange.jsx';
import { SectionOfOpinions } from './Components/SectionOfOpinions.jsx';
import { Graphic } from './Components/Graphic.jsx';
import { BinanceProvider } from './context/BinanceProvider';
import { Balance } from './Components/Balance.jsx';
export const App = () => {
    return (
        <BinanceProvider>
            <Header />
            <SectionTitle />
            <Graphic />
            <Balance />
            <CryptoExchange />
            <SectionOfOpinions />
            <Footer />
        </BinanceProvider>
    );
};
