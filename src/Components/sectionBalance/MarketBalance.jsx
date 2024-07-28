import { images } from './images';
export const MarketBalance = ({ symbol, money }) => {
    // const getImageUrl = (name) => {
    //     const url = `./../assets/market/${name.toLowerCase()}.png`;
    //     return new URL(url, import.meta.url).href;
    // };
    const getImageUrl = (name) => {
        return images[name.toLowerCase()] || '';
    };
    return (
        <>
            <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md border border-blue-gray-100">
                <div className="relative bg-clip-border mt-4 mx-4 rounded-xl overflow-hidden bg-transparent text-gray-700 shadow-none !m-0 p-6">
                    <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-blueGray-400 uppercase font-bold text-xs">
                                    USD/USDT
                                </h5>
                                <span className="font-bold text-xl">
                                    {Number.parseFloat(money).toFixed(2)} %
                                </span>
                            </div>
                            <div className="relative w-auto pl-4 flex-initial">
                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 shadow-lg rounded-full">
                                    <img src={getImageUrl(symbol)} />
                                </div>

                                <div className="p-3 text-center inline-flex items-center justify-center w-24 h-24">
                                    <h3>{symbol.toUpperCase()}</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
