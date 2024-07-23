import React, { useEffect, useState } from 'react';
import { MarketBalance } from './MarketBalance';

export const Balance = () => {
    const [amount, setAmount] = useState(1);
    const [convertedAmount, setConvertedAmount] = useState(0);
    const [fromCurrency, setFromCurrency] = useState('cable');
    const [toCurrency, setToCurrency] = useState('usdt');

    const exchangeRates = {
        wise: 0.06,
        payoneer: 0.065,
        cable: 0.05,
        usdt: 1,
    };

    useEffect(() => {
        convertCurrency();
    }, [amount, fromCurrency, toCurrency]);

    const convertCurrency = () => {
        const rateFrom = exchangeRates[fromCurrency];
        const rateTo = exchangeRates[toCurrency];

        if (rateFrom && rateTo) {
            const converted = amount - (amount * rateFrom) / rateTo;
            setConvertedAmount(converted);
        }
    };

    const swapCurrencies = () => {
        const temp = fromCurrency;
        setFromCurrency(toCurrency);
        setToCurrency(temp);
    };

    const handleFromCurrencyChange = (e) => {
        setFromCurrency(e.target.value);
    };
    const handleAmountChange = (e) => {
        setAmount(e.target.value);
    };

    const handleToCurrencyChange = (e) => {
        setToCurrency(e.target.value);
    };

    return (
        <section
            className="code-section font-['Poppins'] hovered-element mb-[20px] pb-[1px]"
            style={{ backgroundColor: '#40424e' }}
        >
            <div className="container mx-auto lg:pt-24  my-12">
                <div className="flex flex-col items-stretch lg:flex-row">
                    <div
                        className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 clicked-element"
                        contentEditable="true"
                    >
                        <h2 className="mb-4 text-center text-white font-bold lg:text-left lg:text-5xl">
                            Cambio de divisas a Criptodivisas
                        </h2>
                        <p className="mb-6 text-center text-xl text-white lg:text-left">
                            Convierta su moneda local en la criptomoneda de su
                            elección con facilidad y seguridad.
                        </p>
                        <div className="p-4 bg-white rounded-xl shadow-md space-y-4">
                            <div className="flex flex-col space-y-4">
                                <input
                                    value={amount}
                                    onChange={handleAmountChange}
                                    type="number"
                                    placeholder="Enter Amount to Convert"
                                    className="amount-convert w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                <div className="flex items-center space-x-4 w-full">
                                    <div className="flex items-center bg-white border border-gray-300 rounded-md flex-1">
                                        <div className="p-2 w-full">
                                            <select
                                                className="select-enviar w-full"
                                                value={fromCurrency}
                                                onChange={
                                                    handleFromCurrencyChange
                                                }
                                            >
                                                <option value="cable" selected>
                                                    Cable
                                                </option>
                                                <option value="payoneer">
                                                    Payoneer
                                                </option>
                                                <option value="wise">
                                                    Wise
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                    <button
                                        onClick={swapCurrencies}
                                        data-qa-id="swap-currencies"
                                        type="button"
                                        className="flex items-center justify-center p-2 text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600"
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
                                    <div className="flex items-center bg-white border border-gray-300 rounded-md flex-1">
                                        <div className="p-2 w-full">
                                            <select
                                                className="select-recibir w-full"
                                                value={toCurrency}
                                                onChange={
                                                    handleToCurrencyChange
                                                }
                                            >
                                                <option value="usdt">
                                                    usdt
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-row items-center space-x-4">
                                <div className="enviar-moneda text-gray-700">
                                    $ {amount} ({fromCurrency.toUpperCase()})
                                </div>
                                <div> = </div>
                                <div className="recibir-moneda text-gray-700">
                                    <em className="font-semibold">
                                        $ {convertedAmount} (
                                        {toCurrency.toUpperCase()})
                                    </em>
                                </div>
                            </div>
                            <div className="flex justify-center space-x-4">
                                <a
                                    href="https://t.me/+wS-A1u2d-ew5OTFh"
                                    type="button"
                                    className="px-4 py-2 text-white bg-gray-500 rounded-md focus:outline-none hover:bg-gray-600"
                                >
                                    Operar
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-1 items-center justify-center rounded-3xl lg:w-1/2 bg-indigo-50">
                        <section style={{ backgroundColor: '#40424e' }}>
                            <div className="container mx-auto text-center">
                                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
                                    Saldo
                                </h2>
                                <p className="block antialiased font-sans text-white leading-relaxed text-inherit mb-8 font-normal">
                                    Los precios pueden estar sujetos a cambios
                                    constantes. Comunicate con nosotros ante
                                    cualquier consulta
                                </p>
                            </div>
                            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                                <MarketBalance symbol={'cable'} money={5} />
                                <MarketBalance symbol={'wise'} money={6} />
                                <MarketBalance
                                    symbol={'payoneer'}
                                    money={6.5}
                                />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </section>
    );
};
