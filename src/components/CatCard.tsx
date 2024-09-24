import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CatCard: React.FC = () => {
    const [catImage, setCatImage] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    const fetchCatImage = async () => {
        setLoading(true);
        try {
            const response = await axios.get('https://cataas.com/cat');
            setCatImage(response.request.responseURL);
        } catch (error) {
            console.error('Error fetching cat image:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchCatImage();
    }, []);

    return (
        <div className="max-w-sm p-4 bg-white rounded-lg shadow-md">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <>
                    <img src={catImage} alt="A cute cat" className="rounded-lg h-[300px] w-[300px]" />
                    <button
                        onClick={fetchCatImage}
                        className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
                    >
                        Reload Image
                    </button>
                </>
            )}
        </div>
    );
};

export default CatCard;
