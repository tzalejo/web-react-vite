import Header from './Header.jsx';
import Footer from './Footer.jsx';
import SectionTitle from './SectionTitle.jsx';

function App() {

    return (
        <>
            <Header />
            <SectionTitle />
            <section
                id="logo-section"
                className="code-section font-['Poppins'] md:py-20"
            >
                <div className="container mx-auto px-6">
                    <h2
                        id="logo-cloud-header"
                        className="mb-12 text-center text-lg font-medium uppercase tracking-widest"
                    >
                        Plataformas Integradas
                    </h2>
                    <div
                        id="logo-cloud-images"
                        className="flex flex-wrap items-center justify-center gap-x-4 gap-y-4 md:gap-x-24"
                    >
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo1.png"
                            alt="Logo 1"
                            className="dont-replace h-12"
                        />
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo2.png"
                            alt="Logo 2"
                            className="dont-replace h-12"
                        />
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo3.png"
                            alt="Logo 3"
                            className="dont-replace h-12"
                        />
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo4.png"
                            alt="Logo 4"
                            className="dont-replace h-12"
                        />
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo5.png"
                            alt="Logo 5"
                            className="dont-replace h-12"
                        />
                        <img
                            src="https://landingsite-static-web-images.s3.us-east-2.amazonaws.com/logo6.png"
                            alt="Logo 6"
                            className="dont-replace h-12"
                        />
                    </div>
                </div>
            </section>
            <section
                id="how-it-works"
                className="code-section py-20 font-['Poppins']"
            >
                <div className="container mx-auto px-6">
                    <h2 id="hiw-header" className="mb-6 text-center text-6xl font-bold">
                        Cómo Funciona
                    </h2>
                    <h3
                        id="hiw-subtext"
                        className="mb-12 text-center text-xl text-gray-700"
                    >
                        Descubre la simplicidad de operar con criptomonedas a través de
                        cuatro sencillos pasos.
                    </h3>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        <div
                            id="hiw-step-1"
                            className="flex-1 rounded-3xl bg-white p-8 text-center shadow-lg shadow-blue-100 md:max-w-xs md:p-12"
                        >
                            <div
                                id="hiw-step-1-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500">
                                    1
                                </span>
                            </div>
                            <h4
                                id="hiw-step-1-header"
                                className="mb-2 text-2xl font-semibold"
                            >
                                Registro e Inicio
                            </h4>
                            <p id="hiw-step-1-text" className="text-gray-700">
                                Crea tu cuenta personal en segundos y accede a las
                                funcionalidades exclusivas de Sistema informatico para comenzar
                                a operar.
                            </p>
                        </div>
                        <div
                            id="hiw-step-2"
                            className="flex-1 rounded-3xl bg-white p-8 text-center shadow-lg shadow-blue-100 md:max-w-xs md:p-12"
                        >
                            <div
                                id="hiw-step-2-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500">
                                    2
                                </span>
                            </div>
                            <h4
                                id="hiw-step-2-header"
                                className="mb-2 text-2xl font-semibold"
                            >
                                Consulta de Precios
                            </h4>
                            <p id="hiw-step-2-text" className="text-gray-700">
                                Nuestra plataforma actualiza los precios de múltiples
                                criptomonedas utilizando datos de CoinMarketCap, Bitstamp y más,
                                garantizado la información más reciente y fiable.
                            </p>
                        </div>
                        <div
                            id="hiw-step-3"
                            className="flex-1 rounded-3xl bg-white p-8 text-center shadow-lg shadow-blue-100 md:max-w-xs md:p-12"
                        >
                            <div
                                id="hiw-step-3-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500">
                                    3
                                </span>
                            </div>
                            <h4
                                id="hiw-step-3-header"
                                className="mb-2 text-2xl font-semibold"
                            >
                                Compra y Venta
                            </h4>
                            <p id="hiw-step-3-text" className="text-gray-700">
                                Realiza transacciones con agilidad y seguridad. Compra y vende
                                criptomonedas apoyándote en informes detallados y análisis de
                                mercado.
                            </p>
                        </div>
                        <div
                            id="hiw-step-4"
                            className="flex-1 rounded-3xl bg-white p-8 text-center shadow-lg shadow-blue-100 md:max-w-xs md:p-12"
                        >
                            <div
                                id="hiw-step-4-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-12 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500">
                                    4
                                </span>
                            </div>
                            <h4
                                id="hiw-step-4-header"
                                className="mb-2 text-2xl font-semibold"
                            >
                                Gestión de Portfolio
                            </h4>
                            <p id="hiw-step-4-text" className="text-gray-700">
                                Controla tus inversiones y observa el desarrollo de tu portfolio
                                de criptomonedas desde una interfaz sencilla y clara.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="code-section font-['Poppins']" id="y1an9n">
                <div className="container mx-auto px-6 lg:pt-24">
                    <div
                        id="hero-rtl"
                        className="flex flex-col items-stretch lg:flex-row"
                    >
                        <div className="primary-color-bg primary-color-[50] flex flex-1 items-center justify-center rounded-3xl p-6 lg:w-1/2 bg-blue-50">
                            <img
                                className="mx-auto rounded-3xl"
                                src="https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwzfHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Hero"
                                data-media='{"id":"oyXis2kALVg","src":"unsplash","type":"image"}'
                            />
                        </div>
                        <div className="pt-8 lg:w-1/2 lg:pl-20 lg:pr-12 lg:pt-0">
                            <h2
                                id="hero-rtl-header"
                                className="mb-4 text-center text-3xl font-bold lg:text-left lg:text-5xl"
                            >
                                Maximiza Tus Inversiones
                            </h2>
                            <p
                                id="hero-rtl-subtext"
                                className="mb-6 text-center text-xl text-gray-500 lg:text-left"
                            >
                                Descubre por qué somos la elección favorita para inversionistas
                                que buscan maximizar sus estrategias de criptomonedas.
                            </p>
                            <ul id="hero-rtl-list" className="mb-12 list-disc pl-6 text-xl">
                                <li>Solución Integral para el Comercio de Cripto</li>
                                <li>Interfaz Amigable y Personalizable</li>
                                <li>Seguridad de Primer Nivel</li>
                                <li>Soporte Experto y Dedicado</li>
                            </ul>
                            <div className="flex justify-center lg:block">
                                <a
                                    href="/"
                                    id="hero-rtl-cta"
                                    className="primary-color-bg mb-12 inline-block rounded px-12 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-500"
                                >
                                    Explorar Herramientas
                                </a>
                            </div>
                            <div id="testimonial-2" className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1631603090989-93f9ef6f9d80?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw0fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                    alt="Profile"
                                    className="testimonial-image dont-replace mr-4 h-[72px] w-[72px] rounded-full object-cover"
                                    data-media='{"id":"fsSGgTBoX9Y","src":"unsplash","type":"image"}'
                                />
                                <div>
                                    <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"></i>
                                    <p
                                        id="testimonial-2-quote"
                                        className="mb-2 inline text-lg text-gray-700"
                                    >
                                        Con Sistema informatico, he podido diversificar mi portfolio
                                        de inversiones con gran facilidad y efectividad. Sin duda,
                                        una herramienta indispensable para todo trader.
                                    </p>
                                    <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"></i>
                                    <p>
                                        <span
                                            id="testimonial-2-name"
                                            className="font-semibold text-gray-900"
                                        >
                                            Jane Doe
                                        </span>
                                        <span
                                            id="testimonial-2-job"
                                            className="primary-color-text pl-2 font-semibold text-blue-600"
                                        >
                                            Estratega Financiero
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="code-section font-['Poppins']" id="cirxlkl">
                <div className="container mx-auto px-6 pb-12 pt-12 lg:pt-24">
                    <div
                        id="hero-ltr"
                        className="flex flex-col-reverse items-stretch lg:flex-row"
                    >
                        <div className="lg:w-1/2 lg:pr-20">
                            <h2
                                id="hero-ltr-header"
                                className="mb-4 text-center text-3xl font-bold sm:text-5xl lg:text-left"
                            >
                                Comienza tu Viaje Cripto
                            </h2>
                            <p
                                id="hero-ltr-subtext"
                                className="mb-6 text-center text-xl text-gray-500 lg:text-left"
                            >
                                Únete a la revolución cripto y transforma tu forma de invertir
                                en el mundo digital con nuestras herramientas especializadas.
                            </p>
                            <ul id="hero-ltr-list" className="mb-12 list-disc pl-8 text-xl">
                                <li>Información detallada y actualizada</li>
                                <li>Transacciones Seguras y Ágiles</li>
                                <li>Asesoramiento Personalizado</li>
                                <li>Crecimiento Continuo y Sostenible</li>
                            </ul>
                            <div className="flex justify-center lg:block">
                                <a
                                    href="/"
                                    id="hero-ltr-cta"
                                    className="primary-color-bg mb-12 inline-block rounded px-12 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-500"
                                >
                                    Únete Ahora
                                </a>
                            </div>
                            <div id="testimonial-3" className="flex items-center">
                                <img
                                    src="https://images.unsplash.com/photo-1629339942248-45d4b10c8c2f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw1fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                    alt="Profile"
                                    className="testimonial-image dont-replace mr-4 h-[72px] w-[72px] rounded-full object-cover"
                                    data-media='{"id":"GnWfl_nnZro","src":"unsplash","type":"image"}'
                                />
                                <div>
                                    <i className="fa-sharp fa-solid fa-quote-left relative -top-2 mr-1"></i>
                                    <p
                                        id="testimonial-3-quote"
                                        className="mb-2 inline text-lg text-gray-700"
                                    >
                                        La atención al cliente de Sistema informatico es
                                        excepcional. Siempre están listos para ayudar y resolver
                                        cualquier duda que pueda surgir.
                                    </p>
                                    <i className="fa-sharp fa-solid fa-quote-right relative -top-2 ml-1"></i>
                                    <p>
                                        <span
                                            id="testimonial-3-name"
                                            className="font-semibold text-gray-900"
                                        >
                                            Jane Doe
                                        </span>
                                        <span
                                            id="testimonial-3-job"
                                            className="primary-color-text pl-2 font-semibold text-blue-600"
                                        >
                                            Gerente de Operaciones Cripto
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="primary-color-bg primary-color-[50] mb-4 flex flex-1 items-center justify-center rounded-3xl p-6 lg:w-1/2 bg-blue-50">
                            <img
                                className="mx-auto rounded-3xl"
                                src="https://images.unsplash.com/photo-1631897642056-97a7abff6818?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw2fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Hero"
                                data-media='{"id":"gRAS87wSVCs","src":"unsplash","type":"image"}'
                            />
                        </div>
                    </div>
                </div>
            </section>
            <section id="features-section" className="code-section font-['Poppins']">
                <div className="container mx-auto px-6 py-6 md:py-12">
                    <div className="primary-color-gradient primary-color-from-[50] primary-color-to-[100] rounded-3xl bg-gradient-to-b px-4 py-8 md:py-40 from-blue-50 to-blue-100">
                        <h2
                            id="features-header"
                            className="mx-auto mb-4 max-w-4xl text-center text-3xl font-bold md:text-6xl"
                        >
                            Nuestras Características
                        </h2>
                        <p
                            id="features-subtext"
                            className="mb-8 text-center text-xl text-gray-500"
                        >
                            Empoderamos a nuestros usuarios con herramientas de vanguardia y
                            funcionalidades avanzadas para un comercio de criptomonedas
                            eficiente y seguro.
                        </p>
                    </div>
                    <div className="-mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-4 px-4 lg:-mt-36 lg:grid lg:flex-none lg:grid-cols-3 lg:place-items-center lg:items-stretch lg:gap-y-12">
                        <div
                            id="feature-1"
                            className="max-w-sm flex-1 rounded-3xl bg-white p-14 text-center shadow-xl shadow-blue-100"
                        >
                            <div
                                id="feature-1-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span
                                    id="feature-1-icon"
                                    className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500"
                                >
                                    <i className="fa fa-chart-line"></i>
                                </span>
                            </div>
                            <h4 id="feature-1-header" className="mb-6 text-3xl font-semibold">
                                Tracking en Tiempo Real
                            </h4>
                            <p id="feature-1-text" className="text-gray-700">
                                Nuestra plataforma proporciona actualizaciones en tiempo real y
                                monitoring de precios para mantener a nuestros usuarios siempre
                                un paso adelante.
                            </p>
                        </div>
                        <div
                            id="feature-2"
                            className="max-w-sm flex-1 rounded-3xl bg-white p-14 text-center shadow-xl shadow-blue-100"
                        >
                            <div
                                id="feature-2-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span
                                    id="feature-2-icon"
                                    className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500"
                                >
                                    <i className="fa fa-lock"></i>
                                </span>
                            </div>
                            <h4 id="feature-2-header" className="mb-6 text-3xl font-semibold">
                                Seguridad Avanzada
                            </h4>
                            <p id="feature-2-text" className="text-gray-700">
                                Garantizamos la seguridad de tus transacciones y datos
                                personales con tecnología de cifrado de último modelo y
                                políticas estrictas de privacidad.
                            </p>
                        </div>
                        <div
                            id="feature-3"
                            className="max-w-sm flex-1 rounded-3xl bg-white p-14 text-center shadow-xl shadow-blue-100"
                        >
                            <div
                                id="feature-3-circle"
                                className="primary-color-bg primary-color-[50] mx-auto mb-4 mt-2 flex h-20 w-20 items-center justify-center rounded-full text-4xl bg-blue-50"
                            >
                                <span
                                    id="feature-3-icon"
                                    className="primary-color-gradient primary-color-from-[200] primary-color-to-[500] bg-gradient-to-b bg-clip-text text-transparent from-blue-200 to-blue-500"
                                >
                                    <i className="fa fa-users"></i>
                                </span>
                            </div>
                            <h4 id="feature-3-header" className="mb-6 text-3xl font-semibold">
                                Comunidad y Soporte
                            </h4>
                            <p id="feature-3-text" className="text-gray-700">
                                Forma parte de una comunidad activa de traders y disfruta de
                                soporte dedicado para optimizar tus operaciones.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section id="blog" className="code-section font-['Poppins']">
                <div className="container mx-auto px-4 py-12">
                    <h2
                        id="blog-posts-header"
                        className="mb-6 text-center text-3xl font-bold sm:text-6xl"
                    >
                        Últimos Análisis
                    </h2>
                    <p
                        id="blog-posts-subtext"
                        className="mx-auto mb-8 max-w-4xl text-center text-lg font-light text-gray-700 sm:text-xl"
                    >
                        Mantente actualizado con nuestras últimas publicaciones y análisis
                        de expertos en el mercado de criptomonedas.
                    </p>
                    <div id="blog-posts-cards" className="flex flex-col md:flex-row">
                        <div
                            id="blog-post-1"
                            className="m-6 flex-1 rounded-3xl bg-white p-4 shadow-lg shadow-blue-50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1627540056810-d2223597e2ab?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw3fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Blog"
                                className="h-64 w-full rounded-3xl object-cover"
                                data-media='{"id":"rayxJJNKyhc","src":"unsplash","type":"image"}'
                            />
                            <div className="px-4 py-6">
                                <p
                                    id="blog-post-1-date"
                                    className="primary-color-text mb-2 uppercase text-blue-600"
                                >
                                    15 JUN 2023
                                </p>
                                <h3
                                    id="blog-post-1-header"
                                    className="mb-2 text-3xl font-medium"
                                >
                                    El Futuro de Bitcoin en 2024
                                </h3>
                                <p
                                    id="blog-post-1-summary"
                                    className="mb-4 text-lg font-light text-gray-700"
                                >
                                    Análisis profundo sobre las tendencias de Bitcoin y su impacto
                                    en el mercado global a corto y largo plazo.
                                </p>
                                <a
                                    href="/"
                                    className="primary-color-text flex items-center uppercase hover:underline text-blue-600"
                                >
                                    View Post <i className="fa-solid fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div
                            id="blog-post-2"
                            className="m-6 flex-1 rounded-3xl bg-white p-4 shadow-lg shadow-blue-50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1634704784915-aacf363b021f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw4fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Blog"
                                className="h-64 w-full rounded-3xl object-cover"
                                data-media='{"id":"sM4r-swmcoY","src":"unsplash","type":"image"}'
                            />
                            <div className="px-4 py-6">
                                <p
                                    id="blog-post-2-date"
                                    className="primary-color-text mb-2 uppercase text-blue-600"
                                >
                                    15 JUN 2023
                                </p>
                                <h3
                                    id="blog-post-2-header"
                                    className="mb-2 text-3xl font-medium"
                                >
                                    Ethereum vs. Altcoins
                                </h3>
                                <p
                                    id="blog-post-2-summary"
                                    className="mb-4 text-lg font-light text-gray-700"
                                >
                                    Exploramos las dinámicas entre Ethereum y las altcoins
                                    emergentes para entender mejor las oportunidades de inversión.
                                </p>
                                <a
                                    href="/"
                                    className="primary-color-text flex items-center uppercase hover:underline text-blue-600"
                                >
                                    View Post <i className="fa-solid fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                        <div
                            id="blog-post-3"
                            className="m-6 flex-1 rounded-3xl bg-white p-4 shadow-lg shadow-blue-50"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1640826514546-7d2eab70a4e5?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHw5fHxDcnlwdG9jdXJyZW5jeXxlbnwwfDB8fHwxNzEwNDU0MDcyfDA&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                                alt="Blog"
                                className="h-64 w-full rounded-3xl object-cover"
                                data-media='{"id":"ZAIbez5LTrg","src":"unsplash","type":"image"}'
                            />
                            <div className="px-4 py-6">
                                <p
                                    id="blog-post-3-date"
                                    className="primary-color-text mb-2 uppercase text-blue-600"
                                >
                                    15 JUN 2023
                                </p>
                                <h3
                                    id="blog-post-3-header"
                                    className="mb-2 text-3xl font-medium"
                                >
                                    Seguridad en Criptomonedas
                                </h3>
                                <p
                                    id="blog-post-3-summary"
                                    className="mb-4 text-lg font-light text-gray-700"
                                >
                                    Consejos y mejores prácticas para asegurar tus activos en un
                                    mundo digital cada vez más vulnerable.
                                </p>
                                <a
                                    href="/"
                                    className="primary-color-text flex items-center uppercase hover:underline text-blue-600"
                                >
                                    View Post <i className="fa-solid fa-arrow-right ml-2"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section
                className="code-section mt-12 bg-gray-50 py-12 font-['Poppins']"
                id="amkvu"
            >
                <div id="cta" className="container mx-auto flex flex-col sm:flex-row">
                    <div className="mb-6 flex w-full flex-col items-center md:mb-0 md:w-[55%] md:flex-row">
                        <img
                            src="https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w0MzEzMzd8MHwxfHNlYXJjaHwxMHx8Q3J5cHRvY3VycmVuY3l8ZW58MHwwfHx8MTcxMDQ1NDA3Mnww&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1920"
                            alt="CTA"
                            className="h-auto w-full"
                            data-media='{"id":"ztYmIQecyH4","src":"unsplash","type":"image"}'
                        />
                    </div>
                    <div className="flex w-full flex-col justify-center p-8 md:w-[45%] md:pr-14">
                        <h3
                            id="cta-header"
                            className="mb-2 text-center text-3xl font-bold sm:text-left sm:text-6xl"
                        >
                            Potencia tu Portfolio
                        </h3>
                        <p
                            id="cta-text"
                            className="mb-16 text-center text-lg text-gray-700 sm:text-left sm:text-xl"
                        >
                            Únete a la vanguardia del comercio de criptomonedas y toma control
                            total de tus inversiones con Sistema informatico.
                        </p>
                        <div id="cta-waitlist-input" className="relative mb-12">
                            <input
                                type="email"
                                className="mb-2 w-full rounded border border-white py-4 pl-6 placeholder-gray-600 xl:mb-0 xl:py-6 xl:pr-20"
                                placeholder="Enter your email address"
                            />
                            <button className="xl:py-23 primary-color-bg h-[52px] w-full rounded px-5 text-lg font-semibold text-white xl:absolute xl:inset-y-0 xl:right-1 xl:top-1/2 xl:mr-4 xl:w-auto xl:-translate-y-1/2 xl:transform bg-blue-600 hover:bg-blue-500">
                                Join waiting list
                            </button>
                        </div>
                        <div id="cta-button" className="mb-12 hidden">
                            <a
                                id="cta-button-text"
                                href="/"
                                className="primary-color-bg items-center rounded px-5 py-3 text-lg font-semibold text-white bg-blue-600 hover:bg-blue-500"
                            >
                                Crear Cuenta Gratis
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
