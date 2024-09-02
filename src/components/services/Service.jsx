import PropTypes from 'prop-types';
import './styles.scss';

const Service = ({ title, subtitle, description, image }) => (
    <>
        <div className="content-inner service-anchor">
            <div className="crypto-box">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1 row">
                    <h6 className="text-blueGray-400 uppercase font-bold col-12">
                        {title}
                    </h6>
                    <span className="font-bold text-xl col-12">{subtitle}</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial row">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-24 h-24 shadow-lg rounded-full col-12">
                        <img src={image} alt={title} />
                    </div>

                    <div className="text-center inline-flex items-center justify-center col-12">
                        <h6>{description.toUpperCase()}</h6>
                    </div>
                </div>
            </div>
        </div>
    </>
);

Service.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
};

export default Service;
