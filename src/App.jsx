import Header from './Header.jsx';
import Footer from './Footer.jsx';
import { SectionTitle } from './SectionTitle.jsx';
import { CryptoExchange } from './Components/CryptoExchange.jsx';
import { SectionOfOpinions } from './Components/SectionOfOpinions.jsx';
import { Graphic } from './Components/Graphic.jsx';
import { BinanceProvider } from './context/BinanceProvider';
export const App = () => {
    return (
        <BinanceProvider>
            <Header />
            <Graphic />
            <SectionTitle />
            {/* seccion de cambio de crypto  */}
            <CryptoExchange />

            <SectionOfOpinions />
            <Footer />
        </BinanceProvider>
    );
};
