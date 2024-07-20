export const TitleGraphic = ({ titleName, img }) => {
    return (
        <div className="flex items-center justify-between h-10">
            <h2 className="text-lg font-semibold text-gray-800">{titleName}</h2>
            <img
                src={img}
                alt={titleName}
                className="w-20 h-20 relative right-4 top-6"
            />
        </div>
    );
};
