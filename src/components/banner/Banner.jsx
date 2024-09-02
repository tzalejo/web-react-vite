import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-parallax-tilt';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import './styles.scss';

Banner.propTypes = {
    data: PropTypes.array,
};

function Banner(props) {
    const { data } = props;

    const [dataBlock] = useState({
        title: 'Comercio Inteligente de Criptomonedas',
        desc: 'Facilitamos el intercambio y seguimiento de precios de criptomonedas en tiempo real a través de nuestros oficinas.',
        title2: 'Cliente',
    });
    return (
        <section className="banner">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-lg-6 col-xl-6">
                        <div className="banner__content">
                            <h2 className="title text-center">
                                {dataBlock.title}
                            </h2>
                            <p className="fs-20">{dataBlock.desc}</p>
                            <div className="row partner">
                                <div className="col-3">
                                    <img
                                        src={data[1].img}
                                        className="mr-3 rounded-circle"
                                        alt="Customer"
                                    />
                                </div>
                                <div className="col-9">
                                    <p className="mb-4">
                                        <i className="fa-sharp fa-solid fa-quote-left relative-top-2 mr-1"></i>
                                        &nbsp;&nbsp;Sistema informatico ha
                                        revolucionado mi manera de comprar y
                                        vender criptomonedas. Su interfaz y
                                        datos en tiempo real son
                                        incomparables.&nbsp;&nbsp;
                                        <i className="fa-sharp fa-solid fa-quote-right relative-top-2 ml-1"></i>
                                    </p>
                                    <p className="text-right">
                                        <span
                                            id="testimonial-1-name"
                                            className="font-semibold text-gray-900"
                                        >
                                            Alejandro Valenzuela
                                        </span>
                                        <br />
                                        <span className="primary-color-text pl-2 font-semibold text-blue-600">
                                            Inversor de criptomonedas
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-lg-6 col-xl-6">
                        <div className="banner__image text-center">
                            <Tilt
                                tiltReverse
                                tiltMaxAngleX={3}
                                tiltMaxAngleY={3}
                                perspective={500}
                                gyroscope
                            >
                                <div className="tilt-image-banner-16">
                                    <img
                                        src={data[0].img}
                                        alt="Office"
                                        style={{
                                            height: 'auto',
                                            width: '100%',
                                            maxHeight: '570px',
                                            maxWidth: '448px',
                                        }}
                                        className={{
                                            xl: 'max-h-570 max-w-448',
                                            md: 'max-h-400 max-w-300',
                                            sm: 'max-h-300 max-w-200',
                                        }}
                                    />
                                </div>
                            </Tilt>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
