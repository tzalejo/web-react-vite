import Service from './../../components/services/Service';
import { images } from './images';

export const MarketBalance = () => {
    const dataCurrency = [
        {
            id: 1,
            title: 'USD/USDT',
            subtitle: '5.00%',
            description: 'CABLE',
            image: images['cable'],
        },
        {
            id: 2,
            title: 'USD/USDT',
            subtitle: '6.00%',
            description: 'WISE',
            image: images['wise'],
        },
        {
            id: 3,
            title: 'USD/USDT',
            subtitle: '6.50%',
            description: 'PAYONEER',
            image: images['payoneer'],
        },
    ];
    return (
        <div className="row align-items-center">
            {dataCurrency.map((item) => {
                return (
                    <div
                        className="col-12 col-md-6 col-lg-4 mb-10"
                        key={item.id}
                    >
                        <Service
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            image={item.image}
                        />
                    </div>
                );
            })}
        </div>
    );
};
