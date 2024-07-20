import people from './../assets/people.png';
export const CustomerFeedback = ({ name, description }) => {
    return (
        <div className="flex flex-col items-center bg-white p-6 shadow-lg rounded-xl">
            <div className="flex mb-2">
                <svg
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z"></path>
                </svg>
                <svg
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z"></path>
                </svg>
                <svg
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z"></path>
                </svg>
                <svg
                    className="h-6 w-6 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d="M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z"></path>
                </svg>
                <svg
                    className="h-6 w-6 text-gray-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z"
                        className=""
                    ></path>
                </svg>
            </div>
            <img
                className="w-24 h-24 rounded-full mb-4"
                src={people}
                alt={name + ' - Testimonial'}
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
