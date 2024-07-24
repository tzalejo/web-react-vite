import './../assets/css/bubble.modules.css';
import { CustomerFeedback } from './CustomerFeedback';
import { useState } from 'react';

export const SectionOfOpinions = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const feedbacks = [
        {
            name: 'lara',
            description:
                'Excelentes la verdad, 100% de confianza en ellos con su trabajo. Super recomendado Gracias chicos',
        },
        {
            name: 'ricky',
            description:
                'Excelentes la verdad, 100% de confianza en ellos con su trabajo. Super recomendado Gracias chicos',
        },
        {
            name: 'Joaquin Lefin',
            description: 'Muy buen lugar sobre todo para opinar',
        },
        {
            name: 'Diego Giuliani',
            description: 'Impecable. Resolvieron muy rápido. Muy seguros',
        },
        {
            name: 'alejandro',
            description: 'Resolvieron muy rápido, muy seguros. Recomiendo!',
        },
    ];
    const previous = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(feedbacks.length - 3);
        }
    };

    const forward = () => {
        if (currentIndex < feedbacks.length - 3) {
            setCurrentIndex(currentIndex + 1);
        } else if (currentIndex <= feedbacks.length) {
            setCurrentIndex(0);
        }
    };

    return (
        <section
            className="code-section mt-12 bg-gray-50 py-12"
            id="client-opinions"
            style={{ backgroundColor: '#40424e' }}
        >
            <div className="container mx-auto flex flex-col">
                <h3
                    id="opinions-header"
                    className="mb-2 text-center text-3xl font-bold sm:text-4xl py-12"
                >
                    Lo que dicen nuestros clientes
                </h3>
                <main className="flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden">
                        <div className="absolute right-5 top-5 z-10 rounded-full bg-gray-600 px-2 text-center text-sm text-white">
                            <span>{currentIndex + 1}</span>/
                            <span>{feedbacks.length - 2}</span>
                        </div>

                        <button
                            onClick={previous}
                            className="absolute left-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                        >
                            <i className="fas fa-chevron-left text-2xl font-bold text-gray-500"></i>
                        </button>

                        <button
                            onClick={forward}
                            className="absolute right-5 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-gray-100 shadow-md"
                        >
                            <i className="fas fa-chevron-right text-2xl font-bold text-gray-500"></i>
                        </button>

                        <div
                            className="flex h-full transition-transform duration-300"
                            style={{
                                transform: `translateX(-${currentIndex * 33.33}%)`,
                            }}
                        >
                            {feedbacks.map((feedback, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-1/3 h-full p-2"
                                >
                                    <CustomerFeedback
                                        name={feedback.name}
                                        description={feedback.description}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </section>
    );
};
