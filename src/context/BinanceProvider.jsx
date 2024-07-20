import { useEffect, useState } from 'react';
import { ApiContext } from './ApiContext';

export const BinanceProvider = ({ children }) => {
    const [prices, setPrices] = useState({
        usdtArs: 0,
        usdcArs: 0,
        daiArs: 0,
        btcUsdt: 0,
        ethUsdt: 0,
        solUsdt: 0,
    });
    useEffect(() => {
        const fetchPrinces = async () => {
            try {
                const response = await fetch('/binance/api/v3/ticker/price');
                const data = await response.json();
                const getPrice = (symbol) => {
                    const item = data.find((item) => item.symbol === symbol);
                    return item ? parseFloat(item.price) : 0;
                };

                const usdtArs = getPrice('USDTARS');
                const usdcUsdt = getPrice('USDCUSDT');
                const daiUsdt = getPrice('DAIUSDT');
                const btcUsdt = getPrice('BTCUSDT');
                const ethUsdt = getPrice('ETHUSDT');
                const solUsdt = getPrice('SOLUSDT');

                setPrices({
                    usdtArs,
                    usdcArs: usdcUsdt * usdtArs,
                    daiArs: daiUsdt * usdtArs,
                    btcUsdt,
                    ethUsdt,
                    solUsdt,
                });
            } catch (Error) {
                console.error('Error fetching data from Binance API:', Error);
            }
        };

        fetchPrinces();
        const interval = setInterval(fetchPrinces, 10000); // Update every 10 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, []);

    return <ApiContext.Provider value={prices}>{children}</ApiContext.Provider>;
};
