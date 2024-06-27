export const CryptoExchange = () => {
    return (
        <section
            className="code-section font-['Poppins'] hovered-element"
            id="s3j4ce2"
        >
            <div className="container mx-auto px-6 lg:pt-24">
                <div className="flex flex-col items-stretch lg:flex-row">
                    <div className="flex flex-1 items-center justify-center rounded-3xl p-6 lg:w-1/2 bg-indigo-50">
                        <img
                            src="https://media.gettyimages.com/id/1440241076/photo/bitcoin-and-ethereum-cryptocurrency-with-candle-stick-graph-chart-laptop-keyboard-and-digital.jpg?b=1&amp;s=612x612&amp;w=0&amp;k=20&amp;c=d9wgKKvGg0zaWxT3Fl_zMLimP_0uKgBEZC9gx2HUN60="
                            alt="Currency to Crypto Exchange"
                        />
                    </div>
                    <div
                        className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0 clicked-element"
                        contentEditable="true"
                    >
                        <h2
                            id="exchange-header"
                            className="mb-4 text-center text-3xl font-bold lg:text-left lg:text-5xl"
                        >
                            Currency to Cryptocurrency Exchange
                        </h2>
                        <p
                            id="exchange-subtext"
                            className="mb-6 text-center text-xl text-gray-500 lg:text-left"
                        >
                            Convert your local currency into the cryptocurrency
                            of your choice with ease and security.
                        </p>
                        <form id="currency-exchange-form" className="mb-12">
                            <label
                                htmlFor="amount"
                                className="block mb-2 text-lg font-medium text-gray-800"
                            >
                                Amount in USD:
                            </label>
                            <input
                                type="number"
                                id="amount"
                                className="mb-4 w-full rounded border border-gray-300 py-4 pl-6 text-lg"
                            />
                            <label
                                htmlFor="cryptocurrency"
                                className="block mb-2 text-lg font-medium text-gray-800"
                            >
                                Select Cryptocurrency:
                            </label>
                            <select
                                id="cryptocurrency"
                                className="mb-4 w-full rounded border border-gray-300 py-4 pl-6 text-lg"
                            >
                                <option value="bitcoin">Bitcoin</option>
                                <option value="ethereum">Ethereum</option>
                                <option value="ripple">Ripple</option>
                                <option value="litecoin">Litecoin</option>
                            </select>
                            <button
                                type="submit"
                                className="primary-color-bg w-full rounded px-5 py-4 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500"
                            >
                                Exchange Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
