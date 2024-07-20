import { ApiBinance } from '../hooks/ApiBinance.jsx';
import { ApiBitstamp } from '../hooks/ApiBitstamp.jsx';
import { TitleGraphic } from './TitleGraphic.jsx';

import bitocinIcon from '../assets/icons/icons8-bitcoin.svg';
import ethereumIcon from '../assets/icons/icons8-ethereum.svg';
import solanaIcon from '../assets/icons/icons8-solana.svg';
import { ApiContext } from '../context/ApiContext.jsx';
import { useContext } from 'react';

export const Graphic = () => {
    // const { usdtArs, usdcArs, dai } = useContext(ApiContext);
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 container mx-auto mb-16">
                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <TitleGraphic titleName={'Bitcoin'} img={bitocinIcon} />
                    <ApiBinance symbol="BTCUSDT" />
                    <ApiBitstamp pair="btcusd" />
                </div>

                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <TitleGraphic titleName={'Ethereum'} img={ethereumIcon} />
                    <ApiBinance symbol="ETHUSDT" />
                    <ApiBitstamp pair="ethusd" />
                </div>
                <div className="bg-white shadow-md rounded-lg p-6 w-full">
                    <TitleGraphic titleName={'Solana'} img={solanaIcon} />
                    <ApiBinance symbol="SOLUSDT" />
                    <ApiBitstamp pair="solusd" />
                </div>
            </div>
        </>
    );
};
