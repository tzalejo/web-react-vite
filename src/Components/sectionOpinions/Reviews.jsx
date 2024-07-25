export const Reviews = ({ startPositive }) => {
    const pathStart =
        'M9.049 2.927a1 1 0 011.902 0l1.42 3.636a1 1 0 00.957.691h3.801a1 1 0 01.593 1.8l-3.067 2.38a1 1 0 00-.364 1.118l1.42 3.636a1 1 0 01-1.538 1.118L10 13.347l-3.067 2.38a1 1 0 01-1.538-1.118l1.42-3.636a1 1 0 00-.364-1.118L3.384 9.054a1 1 0 01.593-1.8h3.8a1 1 0 00.957-.691L9.049 2.927z';

    const renderStars = () => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            stars.push(
                <svg
                    key={`star-${i}`}
                    className={`h-6 w-6 ${i < startPositive ? 'text-yellow-400' : 'text-gray-300'}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path d={pathStart}></path>
                </svg>,
            );
        }
        return stars;
    };
    return <div className="flex mb-2">{renderStars()}</div>;
};
