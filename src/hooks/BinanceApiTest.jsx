import React, { useEffect, useState } from 'react';

export const BinanceApiTest = () => {
  const [usdcInArs, setUsdcInArs] = useState(null);
  const [daiInArs, setDaiInArs] = useState(null);
  const [usdtInArs, setUsdtInArs] = useState(null);

  useEffect(() => {
    const fetchPrices = async () => {
      try {
        const responseUSDCUSDT = await fetch(
          'https://api.binance.com/api/v3/ticker/price?symbol=USDCUSDT',
        );
        const dataUSDCUSDT = await responseUSDCUSDT.json();
        const usdcInUsdt = parseFloat(dataUSDCUSDT.price);

        const responseDAIUSDT = await fetch(
          'https://api.binance.com/api/v3/ticker/price?symbol=DAIUSDT',
        );
        const dataDAIUSDT = await responseDAIUSDT.json();
        const daiInUsdt = parseFloat(dataDAIUSDT.price);

        const responseUSDTARS = await fetch(
          'https://api.binance.com/api/v3/ticker/price?symbol=USDTARS',
        );
        const dataUSDTARS = await responseUSDTARS.json();
        const usdtInArs = parseFloat(dataUSDTARS.price);

        setUsdcInArs(usdcInUsdt * usdtInArs);
        setDaiInArs(daiInUsdt * usdtInArs);
        setUsdtInArs(usdtInArs);
      } catch (error) {
        console.error('Error fetching data from Binance API:', error);
      }
    };

    fetchPrices();
  }, []);

  return (
    <div>
      <h2>
        USDC to ARS: {usdcInArs ? usdcInArs.toFixed(2) : 'Loading...'}
      </h2>
      <h2>DAI to ARS: {daiInArs ? daiInArs.toFixed(2) : 'Loading...'}</h2>
      <h2>
        USDT to ARS: {usdtInArs ? usdtInArs.toFixed(2) : 'Loading...'}
      </h2>
    </div>
  );
};
