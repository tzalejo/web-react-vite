import React from 'react';

import Banner from '../components/banner/Banner';
import Crypto from '../components/crypto/Crypto';
import Testimonial from '../components/testimonial/Testimonial';
import dataPartner from '../assets/fake-data/data-partner';
import Particles from '../components/particles';
import SellCryptoAmountBalance from './sectionBalance/SellCryptoAmountBalance';
import { CryptoExchange } from './exchange/CryptoExchange';

export const Home = () => {
    return (
        <div id="home" className="home-1">
            <Particles />
            <Banner data={dataPartner} />

            <Crypto />

            <SellCryptoAmountBalance />

            <CryptoExchange />

            <Testimonial />
        </div>
    );
};
