import { useEffect, useState } from 'react';
import PageTitle from './../../components/pagetitle';
import { MarketBalance } from './MarketBalance';
import img from '../../assets/img/flecha.png';
import 'react-tabs/style/react-tabs.css';

function SellCryptoAmount() {
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
        <section id="saldos" className="main info">
            <div className="container">
                <PageTitle
                    title="Cambio de divisas a Criptodivisas"
                    section="Convierta su moneda local en la criptomoneda de su elección con facilidad y seguridad."
                />
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <MarketBalance />
                    </div>
                    <div className="col-md-6">
                        <div className="user-card p-4 wallet-body">
                            <h5 className="heading">Saldo</h5>
                            <div className="row rounded-lg">
                                <div className="col-md-12 mb-4">
                                    <input
                                        value={amount}
                                        onChange={handleAmountChange}
                                        type="number"
                                        placeholder="Ingrese la cantidad a convertir"
                                        className="form-control"
                                    />
                                </div>

                                <div className="col-md-12 align-items-center mb-2">
                                    <div className="row">
                                        <div className="col-md-5 mb-2">
                                            <select
                                                className="form-select"
                                                value={fromCurrency}
                                                onChange={
                                                    handleFromCurrencyChange
                                                }
                                            >
                                                <option value="cable">
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

                                        <div className="col-md-2 mb-2 text-center">
                                            <button
                                                onClick={swapCurrencies}
                                                type="button"
                                                className="btn btn-primary align-items-center"
                                                disabled
                                            >
                                                <img src={img} alt="Crypto" />
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
                                                    USDT
                                                </option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-12 mb-2 d-flex justify-content-between">
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
                </div>
            </div>
        </section>
    );
}

export default SellCryptoAmount;
