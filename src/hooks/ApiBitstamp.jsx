import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';
import { useQuery } from '@tanstack/react-query';

const fetchTransactions = async (pair) => {
    const response = await fetch(
        `https://www.bitstamp.net/api/v2/transactions/${pair}/?time=day`,
    );
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    const data = await response.json();

    // Procesar los datos
    const processedData = data
        .map((transaction) => [
            new Date(parseInt(transaction.date) * 1000).getTime(), // Convertir a timestamp
            parseFloat(transaction.price),
        ])
        .sort((a, b) => a[0] - b[0]); // Ordenar por fecha

    return processedData;
};

// Inicializa el módulo de accesibilidad
HighchartsAccessibility(Highcharts);

export const ApiBitstamp = ({ pair }) => {
    const { error, data, isFetching } = useQuery({
        queryKey: ['transactions', pair],
        queryFn: () => fetchTransactions(pair),
    });

    // Obtener el valor del color de fondo desde las propiedades CSS personalizadas
    const backgroundColor = getComputedStyle(document.documentElement)
        .getPropertyValue('--background-color-dark')
        .trim();

    const chartOptions = {
        accessibility: { enabled: true },
        chart: {
            type: 'line',
            width: '200',
            height: '200',
            borderWidth: 0,
            backgroundColor: backgroundColor,
        },
        title: {
            text: null,
        },
        xAxis: {
            type: 'category',
            title: null,
            labels: { enabled: false },
            gridLineWidth: 0,
        },
        plotOptions: { series: { marker: { enabled: false } } },
        legend: { enabled: false },
        credits: { enabled: false },
        yAxis: {
            title: null,
            gridLineWidth: 0,
            labels: { enabled: false },
        },
        tooltip: {
            headerFormat: '<b>{point.x:%Y-%m-%d %H:%M:%S}</b><br>',
            pointFormat: 'Price: ${point.y:.2f}',
        },
        series: [
            {
                name: 'Price',
                data: data,
            },
        ],
    };
    if (isFetching) return <p disabled>Processing...</p>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <div className="mt-4">
                <p className="text-gray-600">Last Day:</p>
                <div className="text-gray-900 text-xl font-bold">
                    <div
                        className="flex items-center"
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div className="relative inline-block shrink-0 rounded-2xl">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
