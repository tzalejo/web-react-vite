import './../../assets/css/bubble.modules.css';
import { CustomerFeedback } from './CustomerFeedback';
import { useState } from 'react';
import { feedback } from './dataOpinions';
export const SectionOfOpinions = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const previous = () => {
    //     if (currentIndex > 0) {
    //         setCurrentIndex(currentIndex - 1);
    //     } else {
    //         setCurrentIndex(feedbacks.length - 3);
    //     }
    // };
    //
    // const forward = () => {
    //     if (currentIndex < feedbacks.length - 3) {
    //         setCurrentIndex(currentIndex + 1);
    //     } else if (currentIndex <= feedbacks.length) {
    //         setCurrentIndex(0);
    //     }
    // };
    const feedbacks = [...feedback, ...feedback];
    // const previous = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex > 0 ? prevIndex - 1 : feedbacks.length - 1,
    //     );
    // };
    //
    // const forward = () => {
    //     setCurrentIndex((prevIndex) =>
    //         prevIndex < feedbacks.length - 1 ? prevIndex + 1 : 0,
    //     );
    // };

    return (
        <section
            className="h-full mt-12 bg-gray-50 py-12"
            style={{ backgroundColor: '#40424e' }}
        >
            <div className="container mx-auto flex flex-col">
                <h3
                    id="opinions-header"
                    className="mb-2 text-center text-3xl font-bold sm:text-4xl py-12 text-white "
                >
                    Lo que dicen nuestros clientes
                </h3>

                <main className="flex items-center justify-center">
                    <div className="relative w-full h-full overflow-hidden">
                        <div
                            className="flex h-full transition-transform duration-300"
                            // style={{
                            //     transform: `translateX(-${currentIndex * 100}%)`,
                            // }}
                        >
                            {feedbacks.map((feedback, index) => (
                                <div
                                    key={index}
                                    className="flex-none w-full sm:w-1/2 md:w-1/3 h-full p-2"
                                >
                                    <CustomerFeedback
                                        key={index}
                                        name={feedback.name}
                                        description={feedback.description}
                                        startPositive={feedback.start}
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
