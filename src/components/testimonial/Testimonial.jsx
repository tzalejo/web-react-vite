import React, { useState } from 'react';
import { Reviews } from './Reviews';
import { Navigation, Scrollbar, A11y, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import dataTestimonial from './data-testimonial';
import people from './../../assets/images/people/people.png';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

function Testimonial() {
    const [dataBlock] = useState({
        title: 'Lo que dicen nuestros clientes',
        desc: 'Transforma tu idea en realidad con Bitcoin Neuquen',
    });

    return (
        <section id="opiniones" className="testimonials">
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-md-12">
                        <div className="block-text">
                            <h3 className="heading">{dataBlock.title}</h3>
                            <h6 className="fs-20">{dataBlock.desc}</h6>
                        </div>
                    </div>
                    <div className="col-xl-6 col-md-12 animate-scroll ">
                        <Swiper
                            modules={[
                                Navigation,
                                Scrollbar,
                                A11y,
                                Autoplay,
                                EffectFade,
                            ]}
                            speed={1000} // Duración de la transición en milisegundos
                            spaceBetween={0}
                            slidesPerView={1}
                            loop={true}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            effect="fade" // Usar el efecto "fade" para una transición suave
                            fadeEffect={{
                                crossFade: true, // Suaviza aún más la transición
                            }}
                            className="swiper-testimonial-1"
                        >
                            {dataTestimonial.map((idx) => (
                                <SwiperSlide key={idx.id}>
                                    <div className="testimonials-box">
                                        <span className="icon-quote"></span>
                                        <h6 className="text">
                                            {idx.description}
                                        </h6>
                                        <div className="row justify-content-between bottom">
                                            <div className="col-4">
                                                <div className="info">
                                                    <img
                                                        src={people}
                                                        alt="Rockie"
                                                    />
                                                    <div className="content">
                                                        <h6 className="name">
                                                            {idx.name}
                                                        </h6>
                                                        <p className="position">
                                                            Cliente
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="col-4">
                                                <Reviews
                                                    key={idx.name}
                                                    startPositive={idx.start}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
