import React, { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ApiContext } from '../context/ApiContext';

export const ApiCoinMarketCap = ({ symbol, convert = 'ARS' }) => {
    const urlApiCoinmarketcap = `/coinmarketcap/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=${convert}`;
    const apiKey = '4d8a314a-fca5-4104-8c75-568a4052c4fe';
    const [percentChange24h, setPercentChange24h] = useState(0);
    const [percentChange7d, setPercentChange7d] = useState(0);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const { usdtArs, usdcArs, daiArs } = useContext(ApiContext);

    // para crear el nombre de la imagen
    const money = 'usdcArs'.includes(symbol.toLowerCase())
        ? usdcArs
        : 'usdtArs'.includes(symbol.toLowerCase())
          ? usdtArs
          : daiArs;

    const getImageUrl = (name) => {
        const url = `./../assets/coins/${name.toLowerCase()}.png`;
        return new URL(url, import.meta.url).href;
    };

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const myHeaders = new Headers();
                myHeaders.append('X-CMC_PRO_API_KEY', apiKey);
                const response = await fetch(urlApiCoinmarketcap, {
                    headers: {
                        'X-CMC_PRO_API_KEY': apiKey,
                    },
                });
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const res = await response.json();
                setPercentChange24h(
                    res.data[symbol].quote[convert].percent_change_24h,
                );
                setPercentChange7d(
                    res.data[symbol].quote[convert].percent_change_7d,
                );
                setLoading(false);
            } catch (er) {
                setError('Error fetching price');
                console.log(error);
                setLoading(false);
            }
        };

        fetchPrice();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div> {error} </div>;

    return (
        <>
            {/* <div> */}
            {/*     <h1>Crypto Listings</h1> */}
            {/*     <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* </div> */}

            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                    {symbol}/ARS
                                </h5>
                                <span className="font-bold text-xl">
                                    {Number.parseFloat(money).toFixed(2)}
                                </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 shadow-lg rounded-full">
                                    <img src={getImageUrl(symbol)} />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm text-blueGray-500 mt-4">
                            <span
                                className={classNames({
                                    'text-emerald-500 mr-2':
                                        percentChange24h > 0,
                                    'text-red-500 mr-2': percentChange24h <= 0,
                                })}
                            >
                                <i
                                    className={classNames('fas', {
                                        'fa-arrow-up': percentChange24h > 0,
                                        'fa-arrow-down': percentChange24h <= 0,
                                    })}
                                ></i>
                                {Number.parseFloat(percentChange24h).toFixed(4)}
                                %
                            </span>
                            <span className="whitespace-nowrap">24h</span>
                        </p>

                        <p className="text-sm text-blueGray-500">
                            <span
                                className={classNames({
                                    'text-emerald-500 mr-2':
                                        percentChange7d > 0,
                                    'text-red-500 mr-2': percentChange7d <= 0,
                                })}
                            >
                                <i
                                    className={classNames('fas', {
                                        'fa-arrow-up': percentChange7d > 0,
                                        'fa-arrow-down': percentChange7d <= 0,
                                    })}
                                ></i>
                                {Number.parseFloat(percentChange7d).toFixed(4)}%
                            </span>
                            <span className="whitespace-nowrap">7d</span>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
