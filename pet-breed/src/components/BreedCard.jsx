function BreedCard({ breed, onDelete, onStartEdit, onShowDetails }) {
  // Prevent the card's onClick event from firing when a button is clicked
  const handleEditClick = (e) => {
    e.stopPropagation();
    onStartEdit(breed);
  };

  const handleDeleteClick = (e) => {
    e.stopPropagation();
    onDelete(breed.id);
  };

  return (
    // 1. Add the onClick handler and cursor-pointer class to the main div
    <div
      onClick={() => onShowDetails(breed)}
      className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 truncate">{breed.name}</h3>
        <p className="text-sm font-semibold text-sky-700">{breed.origin}</p>
      </div>

      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end items-center space-x-2">
        {/* 2. The "View Details" button is now removed */}
        <button
          onClick={handleEditClick}
          className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={handleDeleteClick}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BreedCard;