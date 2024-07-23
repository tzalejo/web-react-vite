import imagenCommerce from './../src/assets/sectionTitle-commerce.jpeg';
import imagenExchange from './../src/assets/fondos.png';
export const SectionTitle = () => {
    return (
        <>
            <section
                className="code-section bg-gradient-to-b font-['Poppins'] lg:py-2 mt-20"
                id="74gld"
                style={{ backgroundColor: '#40424e' }}
            >
                <div className="container mx-auto">
                    <div className="grid lg:grid-cols-2 gap-8 items-center">
                        <div className="mt-12 w-full lg:mt-32 lg:pr-14">
                            <h1
                                id="hero-header-text"
                                className="mb-4 text-center text-4xl font-bold lg:text-left lg:text-5xl xl:text-6xl text-white"
                            >
                                Comercio Inteligente de Criptomonedas
                            </h1>
                            <p
                                id="hero-subtext"
                                className="mb-14 text-center text-xl text-gray-700 lg:text-left text-white"
                            >
                                Facilitamos el intercambio y seguimiento de
                                precios de criptomonedas en tiempo real a través
                                de nuestros oficinas.
                            </p>
                            <div id="hero-cta-button" className="mb-12 hidden">
                                <a className="primary-color-bg items-center rounded px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500">
                                    <span id="hero-cta-button-text text-white">
                                        Comienza a Operar
                                    </span>
                                </a>
                            </div>
                            <div
                                id="testimonial-1"
                                className="flex items-center pb-10"
                            >
                                <img
                                    src={imagenCommerce}
                                    alt="Happy Customer"
                                    className="testimonial-image dont-replace mr-4 h-[72px] w-[72px] rounded-full object-cover"
                                    data-media='{"id":"iGYiBhdNTpE","src":"unsplash","type":"image"}'
                                />
                                <div>
                                    <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"></i>
                                    <p
                                        id="testimonial-1-quote"
                                        className="mb-4 inline text-lg text-gray-700 text-white"
                                    >
                                        Sistema informatico ha revolucionado mi
                                        manera de comprar y vender
                                        criptomonedas. Su interfaz y datos en
                                        tiempo real son incomparables.
                                    </p>
                                    <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"></i>
                                    <br />
                                    <br />
                                    <p>
                                        <span
                                            id="testimonial-1-name"
                                            className="font-semibold text-gray-900 text-white"
                                        >
                                            Alejandro Valenzuela
                                        </span>
                                        <span
                                            id="testimonial-1-job"
                                            className="primary-color-text pl-2 font-semibold text-blue-600 "
                                        >
                                            Inversor de criptomonedas
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative w-full lg:pl-6 2xl:mt-0 pt-8">
                            <img
                                src={imagenExchange}
                                alt="Hero"
                                className="seo-image mt-8 h-auto shadow-xl shadow-blue-100 lg:mt-0 max-w-[500px] mx-auto"
                                data-media='{"id":"NHRM1u4GD_A","src":"unsplash","type":"image"}'
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
