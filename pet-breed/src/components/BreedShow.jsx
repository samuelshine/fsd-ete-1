import { useState, useEffect } from 'react';
import axios from 'axios';

function BreedShow({ breed, onClose }) {
  // 1. Add state for the image URL and a loading indicator
  const [imageUrl, setImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleModalContentClick = (e) => e.stopPropagation();

  // 2. Fetch the image from Unsplash when the component is shown
  useEffect(() => {
    const fetchImage = async () => {
      // Reset state for new breed
      setIsLoading(true);
      setImageUrl('');

      try {
        const response = await axios.get('https://api.unsplash.com/search/photos', {
          headers: {
            // IMPORTANT: Replace this with your own Unsplash Access Key
            Authorization: 'Client-ID 1d8IQlysKErskIa4e4yLL97abGPXjGLiVHz998_yRgU'
          },
          params: {
            query: `${breed.name} dog`,
            orientation: 'landscape',
            per_page: 1, // We only need the first result
          }
        });

        // 3. If images are found, set the URL of the FIRST image
        if (response.data.results.length > 0) {
          setImageUrl(response.data.results[0].urls.small);
        }
      } catch (error) {
        console.error("Error fetching image from Unsplash:", error);
      } finally {
        setIsLoading(false); // Stop loading, whether successful or not
      }
    };

    fetchImage();
  }, [breed.name]); // Re-run this effect if the breed name changes

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      style={{ backdropFilter: 'blur(4px)' }}
    >
      <div
        onClick={handleModalContentClick}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full overflow-hidden animate-fade-in-up"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-white bg-black bg-opacity-20 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-50 z-10"
          aria-label="Close"
        >
          &times;
        </button>

        {/* 4. Conditionally render a loading state or the image */}
        <div className="w-full h-48 bg-slate-200 flex items-center justify-center">
          {isLoading ? (
            <div className="text-slate-500">Loading Image...</div>
          ) : imageUrl ? (
            <img
              src={imageUrl}
              alt={`A ${breed.name}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-slate-500">No Image Found</div>
          )}
        </div>

        <div className="p-6">
          <h2 className="text-3xl font-bold text-slate-800 mb-2">{breed.name}</h2>
          <p className="text-md font-semibold text-sky-700 mb-4">{breed.origin}</p>
          <p className="text-slate-600 text-base leading-relaxed">{breed.description}</p>
        </div>
      </div>
    </div>
  );
}

export default BreedShow;