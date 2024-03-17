import ButtonWrapper  from './Components/ButtonWrapper';


// <ButtonWrapper messaje={'Join Waiting list'} />

function SectionTitle() {
    return (
        <>
            <section
                className="code-section bg-gradient-to-b from-white to-[#F2F9FF] font-['Poppins'] lg:py-2"
                id="74gld"
            >
                <div className="container mx-auto mb-24 px-6">
                    <div className="flex flex-col-reverse items-center lg:flex-row">
                        <div className="mt-12 w-full lg:mt-32 lg:w-[45%] lg:pr-14">
                            <h1
                                id="hero-header-text"
                                className="mb-4 text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-6xl"
                            >
                                Comercio Inteligente de Criptomonedas
                            </h1>
                            <p
                                id="hero-subtext"
                                className="mb-14 text-center text-xl text-gray-700 lg:text-left"
                            >
                                Facilitamos el intercambio y seguimiento de precios de
                                criptomonedas en tiempo real a través de nuestros oficinas.
                            </p>
                            <div id="hero-waitlist-input" className="relative mb-12">
                                <input
                                    type="email"
                                    className="mb-2 w-full rounded border border-white py-4 pl-6 placeholder-gray-600 xl:mb-0 xl:py-6 xl:pr-20"
                                    placeholder="Enter your email address"
                                />

                                <button className="xl:py-23 primary-color-bg h-[52px] w-full rounded px-5 text-lg font-semibold text-white xl:absolute xl:inset-y-0 xl:right-1 xl:top-1/2 xl:mr-4 xl:w-auto xl:-translate-y-1/2 xl:transform bg-blue-600 hover:bg-blue-500">
                                    Join waiting list
                                </button>
                            </div>
                            <div id="hero-cta-button" className="mb-12 hidden">
                                <a
                                    href="/"
                                    className="primary-color-bg items-center rounded px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500"
                                >
                                    <span id="hero-cta-button-text">Comienza a Operar</span>
                                </a>
                            </div>
                            <div id="testimonial-1" className="flex items-center pb-10">
                                <img
                                    src="https://images.unsplash.com/photo-1518546305927-5a555bb7020d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxfHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                    alt="Happy Customer"
                                    className="testimonial-image dont-replace mr-4 h-[72px] w-[72px] rounded-full object-cover"
                                    data-media='{"id":"iGYiBhdNTpE","src":"unsplash","type":"image"}'
                                />
                                <div>
                                    <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"></i>
                                    <p
                                        id="testimonial-1-quote"
                                        className="mb-2 inline text-lg text-gray-700"
                                    >
                                        Sistema informatico ha revolucionado mi manera de comprar y
                                        vender criptomonedas. Su interfaz y datos en tiempo real son
                                        incomparables.
                                    </p>
                                    <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"></i>
                                    <p>
                                        <span
                                            id="testimonial-1-name"
                                            className="font-semibold text-gray-900"
                                        >
                                            Jane Doe
                                        </span>
                                        <span
                                            id="testimonial-1-job"
                                            className="primary-color-text pl-2 font-semibold text-blue-600"
                                        >
                                            Inversor de criptomonedas
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:w-[55%] lg:pl-6 2xl:mt-0">
                            <img
                                src="https://images.unsplash.com/photo-1622630998477-20aa696ecb05?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwyfHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Hero"
                                className="seo-image mt-8 h-auto w-[100%] shadow-xl shadow-blue-100 lg:mt-0"
                                data-media='{"id":"NHRM1u4GD_A","src":"unsplash","type":"image"}'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SectionTitle;
