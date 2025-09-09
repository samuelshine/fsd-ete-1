function BreedDetailModal({ breed, onClose }) {
  // This prevents the modal from closing when you click inside the content area
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    // The Modal Overlay
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4"
      style={{ backdropFilter: 'blur(4px)' }} // Optional: for a blurred background effect
    >
      {/* The Modal Content */}
      <div
        onClick={handleModalContentClick}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 relative animate-fade-in-up"
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 text-3xl font-light leading-none"
          aria-label="Close"
        >
          &times;
        </button>
        [Image of a {breed.name} dog]
        <h2 className="text-3xl font-bold text-slate-800 mb-2">{breed.name}</h2>
        <p className="text-md font-semibold text-sky-700 mb-4">{breed.origin}</p>
        <p className="text-slate-600 text-base leading-relaxed">{breed.description}</p>
      </div>
    </div>
  );
}

export default BreedDetailModal;