import { useState, useContext, useEffect } from 'react';
import 'react-tabs/style/react-tabs.css';

import { ApiContext } from './../../context/ApiContext.jsx';
// grafico
import { ApiBitstamp } from './../../hooks/ApiBitstamp.jsx';
import img1 from '../../assets/img/coins/btc48.svg';
import img2 from '../../assets/img/coins/eth48.svg';
import img3 from '../../assets/img/coins/sol48.svg';
import img4 from '../../assets/img/coins/ada48.svg';
import './styles.scss';

import PageTitle from './../../components/pagetitle';

function Crypto() {
    const { btcUsdt, ethUsdt, solUsdt, adaUsdt } = useContext(ApiContext);
    const [dataCrytoContent, setDataCrytoContent] = useState([]);

    useEffect(() => {
        setDataCrytoContent([
            {
                id: 0,
                icon: img1,
                chart: 'btcusd',
                name: 'Bitcoin',
                unit: 'BTC',
                price: 'USDT ' + btcUsdt,
            },
            {
                id: 1,
                icon: img2,
                chart: 'ethusd',
                name: 'Etherium',
                unit: 'ETH',
                price: 'USDT ' + ethUsdt,
            },
            {
                id: 2,
                icon: img3,
                chart: 'solusd',
                name: 'Solana',
                unit: 'SOL',
                price: 'USDT ' + solUsdt,
            },
            {
                id: 3,
                icon: img4,
                chart: 'adausd',
                name: 'Cardano',
                unit: 'ADA',
                price: 'USDT ' + adaUsdt,
            },
        ]);
    }, [btcUsdt, ethUsdt, solUsdt, adaUsdt]);
    return (
        <section
            id="precios"
            className="crypto"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="crypto__main">
                            <PageTitle title="Precios de las crypto de HOY" />

                            <div className="align-vertical">
                                {dataCrytoContent.map((idx) => (
                                    <div
                                        key={idx.id}
                                        className="crypto-now crypto-vertical"
                                    >
                                        <div className="left">
                                            <img src={idx.icon} alt="Crypto" />
                                            <h6> {idx.name}</h6>
                                            <h6 className="price">
                                                {idx.price}
                                            </h6>
                                        </div>

                                        <div className="auto">
                                            <ApiBitstamp pair={idx.chart} />
                                            <p className="center">{idx.unit}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Crypto;
