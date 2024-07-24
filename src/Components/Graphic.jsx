import { useContext } from 'react';
import { ApiBitstamp } from '../hooks/ApiBitstamp.jsx';
import { TitleGraphic } from './TitleGraphic.jsx';

import bitocinIcon from '../assets/icons/icons8-bitcoin.svg';
import ethereumIcon from '../assets/icons/icons8-ethereum.svg';
import solanaIcon from '../assets/icons/icons8-solana.svg';
import { ApiContext } from '../context/ApiContext.jsx';

export const Graphic = () => {
    const { btcUsdt, ethUsdt, solUsdt } = useContext(ApiContext);
    return (
        <>
            <div className="container mx-auto mb-16 text-center">
                <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-blue-gray-900 my-12">
                    Precios de las cryptocurrency de hoy
                </h2>
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full">
                        <TitleGraphic titleName={'Bitcoin'} img={bitocinIcon} />
                        <div className="mt-4">
                            <p className="text-gray-600">Precio:</p>
                            <p className="text-gray-900 text-xl font-bold">
                                $ {btcUsdt}
                            </p>
                        </div>
                        <ApiBitstamp pair="btcusd" />
                    </div>

                    <div className="bg-white shadow-md rounded-lg p-6 w-full">
                        <TitleGraphic
                            titleName={'Ethereum'}
                            img={ethereumIcon}
                        />

                        <div className="mt-4">
                            <p className="text-gray-600">Precio:</p>
                            <p className="text-gray-900 text-xl font-bold">
                                $ {ethUsdt}
                            </p>
                        </div>
                        <ApiBitstamp pair="ethusd" />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full">
                        <TitleGraphic titleName={'Solana'} img={solanaIcon} />

                        <div className="mt-4">
                            <p className="text-gray-600">Precio:</p>
                            <p className="text-gray-900 text-xl font-bold">
                                $ {solUsdt}
                            </p>
                        </div>
                        <ApiBitstamp pair="solusd" />
                    </div>
                </div>
            </div>
        </>
    );
};
