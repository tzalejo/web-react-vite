import people from './../../assets/people.png';
import { Reviews } from './Reviews';
export const CustomerFeedback = ({ name, description, startPositive }) => {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-xl animate-scroll ">
            <Reviews key={name} startPositive={startPositive} />
            <img
                className="w-24 h-24 rounded-full mb-4"
                src={people}
                alt={`${name} - Testimonial`}
            />
            <p className="text-gray-700 text-lg text-center mb-4">
                <i
                    className="fa-sharp fa-solid fa-quote-left mr-2"
                    aria-hidden="true"
                ></i>
                {description}
                <i
                    className="fa-sharp fa-solid fa-quote-right ml-2"
                    aria-hidden="true"
                ></i>
            </p>
            <p className="font-semibold text-gray-900">{name}</p>
            <p className="primary-color-text text-zinc-950">Cliente</p>
        </div>
    );
};
