import clsx from 'clsx';
import './styles.scss';

const GoogleMapArea = ({ space, className }) => (
    <div
        className={clsx(
            'rn-contact-map-area position-relative',
            space === 1 && 'rn-section-gapTop',
            className,
        )}
    >
        <div className="container">
            <div className="g-5">
                <div
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="connect-thumbnail" sytle={{ flex: 1 }}>
                        <iframe
                            style={{
                                width: '100%',
                                height: '100%',
                                aspectRatio: '16 / 9',
                                border: 0,
                            }}
                            title="Google Map"
                            src="https://www.google.com/maps/place/BITCOIN+NEUQU%C3%89N/@-38.9683059,-68.0626006,18.93z/data=!4m6!3m5!1s0x960a32306782fd7d:0x233d387ea2d24e3!8m2!3d-38.9682923!4d-68.0621509!16s%2Fg%2F11b7266gxb?entry=ttu"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default GoogleMapArea;
