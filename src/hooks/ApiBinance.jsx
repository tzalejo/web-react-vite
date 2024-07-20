import React, { useState, useEffect } from 'react';

export const ApiBinance = ({ symbol }) => {
    const [price, setPrice] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPrice = async () => {
            try {
                const response = await fetch(
                    `/binance/api/v3/ticker/price?symbol=${symbol}`,
                );
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setPrice(parseFloat(data.price).toFixed(2));
                setLoading(false);
            } catch (error) {
                setError('Error fetching price');
                setLoading(false);
            }
        };

        fetchPrice();
        // Set up an interval to fetch the price every 10 seconds
        const interval = setInterval(fetchPrice, 10000);

        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [symbol]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <>
            <div className="mt-4">
                <p className="text-gray-600">Precio:</p>
                <p className="text-gray-900 text-xl font-bold">
                    <p>$ {price}</p>
                </p>
            </div>
        </>
    );
};
