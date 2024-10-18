import { useContext, useEffect, useState } from 'react';
import { ApiCoinMarketCap } from '../../hooks/ApiCoinMarketCap';
import { ApiContext } from './../../context/ApiContext';
import PageTitle from './../../components/pagetitle';

export const CryptoExchange = () => {
    const { usdtArs, usdcArs, daiArs } = useContext(ApiContext);
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('usdt');
    const [toCurrency, setToCurrency] = useState('pesos');

    const exchangeRates = {
        usdt: usdtArs,
        usdc: usdcArs,
        dai: daiArs,
        pesos: 1,
    };

    useEffect(() => {
        convertCurrency();
    }, [amount, fromCurrency, toCurrency, usdtArs, usdcArs, daiArs]);

    const convertCurrency = () => {
        const rateFrom = exchangeRates[fromCurrency];
        const rateTo = exchangeRates[toCurrency];

        if (rateFrom && rateTo) {
            const converted = (amount * rateFrom) / rateTo;
            setConvertedAmount(converted);
        }
    };

    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    return (
        <section id="exchanges" className="main info">
            <div className="container">
                <PageTitle
                    title="Exchange"
                    section="Convierta su moneda local en la criptomoneda de su elección con facilidad y seguridad."
                />
                <div className="row align-items-center">
                    <div className="col-lg-12 col-xl-6 wallet-main">
                        <div className="user-card p-4 wallet-body">
                            <div className="row rounded-lg p-4">
                                <div className="col-md-12 mb-3">
                                    <input
                                        value={amount}
                                        onChange={handleAmountChange}
                                        type="number"
                                        placeholder="Ingrese la cantidad a convertir"
                                        className="form-control"
                                    />
                                </div>
                                <div className="col-md-12 mb-3 align-items-center">
                                    <div className="row">
                                        <div className="col-md-5 mb-2">
                                            <select
                                                className="form-select"
                                                value={fromCurrency}
                                                onChange={
                                                    handleFromCurrencyChange
                                                }
                                            >
                                                <option value="usdt">
                                                    usdt
                                                </option>
                                                <option value="usdc">
                                                    usdc
                                                </option>
                                                <option value="dai">dai</option>
                                                <option value="pesos">
                                                    pesos
                                                </option>
                                            </select>
                                        </div>
                                        <div className="col-md-2 mb-2 text-center">
                                            <button
                                                onClick={swapCurrencies}
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    height="16px"
                                                    width="36px"
                                                    viewBox="0 0 24 24"
                                                >
                                                    <path
                                                        d="M6 16H20M20 16L17 19M20 16L17 13"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeMiterlimit="10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                    <path
                                                        d="M18 8H4M4 8L7 11M4 8L7 5"
                                                        stroke="currentColor"
                                                        strokeWidth="2"
                                                        strokeMiterlimit="10"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    ></path>
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="col-md-5 mb-2">
                                            <select
                                                className="form-select"
                                                value={toCurrency}
                                                onChange={
                                                    handleToCurrencyChange
                                                }
                                            >
                                                <option value="usdt">
                                                    usdt
                                                </option>
                                                <option value="usdc">
                                                    usdc
                                                </option>
                                                <option value="dai">dai</option>
                                                <option value="pesos">
                                                    pesos
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-12 mb-3 d-flex justify-content-between">
                                    <h6 className="text-start">
                                        $ {amount} ({fromCurrency.toUpperCase()}
                                        )
                                    </h6>
                                    <h6 className="text-center">
                                        <span className="font-weight-bold">
                                            =
                                        </span>
                                    </h6>
                                    <h6 className="text-end">
                                        $ {convertedAmount} (
                                        {toCurrency.toUpperCase()})
                                    </h6>
                                </div>
                                <div className="col-md-12 text-center">
                                    <a
                                        href="https://t.me/+wS-A1u2d-ew5OTFh"
                                        type="button"
                                        className="btn btn-dark btn-action "
                                    >
                                        Operar
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-12 col-xl-6">
                        <div className="align-items-center row">
                            <ApiCoinMarketCap symbol={'USDC'} convert={'ARS'} />
                            <ApiCoinMarketCap symbol={'USDT'} convert={'ARS'} />
                            <ApiCoinMarketCap symbol={'DAI'} convert={'ARS'} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
