import { useState, useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsAccessibility from 'highcharts/modules/accessibility';

// Inicializa el módulo de accesibilidad
HighchartsAccessibility(Highcharts);

export const ApiBitstamp = ({ pair }) => {
    const [chartOptions, setChartOptions] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
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

                setChartOptions({
                    accessibility: { enabled: true },
                    chart: {
                        type: 'line',
                        width: 300,
                        height: 200,
                        borderWidth: 0,
                    },
                    title: {
                        text: null, // text: `${crypto.toUpperCase()}(Daily)`,
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
                            data: processedData,
                        },
                    ],
                });
                setLoading(false);
            } catch (error) {
                setError('Error fetching transactions: ' + error.message);
                setLoading(false);
            }
        };

        fetchTransactions();

        const interval = setInterval(fetchTransactions, 5000); // Update every 5 seconds
        return () => clearInterval(interval); // Cleanup interval on unmount
    }, [setChartOptions]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="mt-4">
                <p className="text-gray-600">Last Day:</p>
                <p className="text-gray-900 text-xl font-bold">
                    <div
                        className="flex items-center"
                        style={{
                            display: 'flex',
                            flexWrap: 'nowrap',
                            justifyContent: 'space-around',
                        }}
                    >
                        <div className="relative inline-block shrink-0 rounded-2xl me-3">
                            <HighchartsReact
                                highcharts={Highcharts}
                                options={chartOptions}
                            />
                        </div>
                    </div>
                </p>
            </div>
        </>
    );
};
