import { useContext, useEffect, useState } from 'react';
import classNames from 'classnames';
import { ApiContext } from '../context/ApiContext';
import coins from './coins';
import { useQuery } from '@tanstack/react-query';
import './styles.scss';

const fetchCoinmarktcap = async (symbol, convert) => {
    try {
        // console.log('api url', process.env.REACT_APP_API_URL_COINMARKETCAP);
        //const urlApiCoinmarketcap = `${process.env.REACT_APP_API_URL_COINMARKETCAP}/v1/cryptocurrency/quotes/latest?symbol=${symbol}&convert=${convert}`;
        const urlApiCoinmarketcap = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest?convert=${convert}`;
        // const apiKey = '4d8a314a-fca5-4104-8c75-568a4052c4fe'; //process.env.REACT_APP_API_KEY_COINMARKETCAP;

        const response = await fetch(urlApiCoinmarketcap, {
            mode: 'no-cors',
            headers: {
                'X-CMC_PRO_API_KEY': '4d8a314a-fca5-4104-8c75-568a4052c4fe',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        });
        console.log('response', response);
        if (!response.ok) {
            console.log(response);
            throw new Error('Network response was not ok');
        }
        const res = await response.json();
        console.log('json', res);
        return res;
    } catch (err) {
        console.log(err);
        return null;
    }
};

export const ApiCoinMarketCap = ( {symbol, convert = 'ARS'} ) => {
    const { usdtArs, usdcArs, daiArs } = useContext(ApiContext);
    const [percentChange24h, setPercentChange24h] = useState(0);
    const [percentChange7d, setPercentChange7d] = useState(0);
    const { data, error, isFetching } = useQuery({
        queryKey: ['coinmarketcap', convert],
        queryFn: () => fetchCoinmarktcap(symbol, convert),
    });

    useEffect(() => {
        if (data) {
            setPercentChange7d(
                data.data[symbol].quote[convert].percent_change_7d,
            );
            setPercentChange24h(
                data.data[symbol].quote[convert].percent_change_24h,
            );
        }
    }, [data, symbol, convert]);
    // para crear el nombre de la imagen
    const money = 'usdcArs'.includes(symbol.toLowerCase())
        ? usdcArs
        : 'usdtArs'.includes(symbol.toLowerCase())
            ? usdtArs
            : daiArs;

    const getImageUrl = (name) => {
        return coins[name.toLowerCase()] || '';
    };

    function Items(err) {
        if (!err) return <div> {err} </div>;
        return (
            <div className="flex flex-row row">
                <p className="text-sm text-blueGray-500 col-12">
                    <span
                        className={classNames({
                            'color-green mr-2': percentChange24h > 0,
                            'color-red mr-2': percentChange24h <= 0,
                        })}
                    >
                        <i
                            className={classNames('fas', {
                                'fa-arrow-up': percentChange24h > 0,
                                'fa-arrow-down': percentChange24h <= 0,
                            })}
                        ></i>
                        {Number.parseFloat(percentChange24h).toFixed(4)}%
                    </span>
                    <span className="whitespace-nowrap">24h</span>
                </p>
                <p className="text-sm text-blueGray-500 col-12">
                    <span
                        className={classNames({
                            'color-green mr-2 col': percentChange7d > 0,
                            'color-red mr-2': percentChange7d <= 0,
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
        );
    }

    // useEffect(() => {
    // setPercentChange7d(data.data[symbol].quote[convert].percent_change_7d);
    // setPercentChange24h(data.data[symbol].quote[convert].percent_change_24h);
    // }, []);

    if (isFetching)
        return (
            <a disabled className="col-md-12 text-white">
                <div className="flex items-center justify-center m-[10px]">
                    <div className="h-5 w-5 border-t-transparent border-solid animate-spin rounded-full border-black border-4"></div>
                    <div className="text-black ml-2"> Processing... </div>
                </div>
            </a>
        );

    return (
        <>
            <div className="col-md-4 mb-2">
                <div className="content-inner service-anchor">
                    <div className="crypto-box px-0">
                        <div className="row relative w-full max-w-full flex-grow flex-1">
                            <h5 className="text-blueGray-400 uppercase font-bold text-xs col">
                                {symbol}/ARS
                            </h5>
                            <span className="font-bold text-xl col">
                                {Number.parseFloat(money).toFixed(2)}
                            </span>
                        </div>
                        <div className="row relative w-auto pl-4 flex-initial">
                            <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 shadow-lg rounded-full col">
                                <img src={getImageUrl(symbol)} />
                            </div>
                        </div>
                        <Items err={error} />
                    </div>
                </div>
            </div>
        </>
    );
};
