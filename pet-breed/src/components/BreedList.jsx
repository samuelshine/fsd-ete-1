import BreedCard from './BreedCard';

function BreedList({ breeds, onDelete, onStartEdit, onShowDetails }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {breeds.map((breed) => (
        <BreedCard
          key={breed.id}
          breed={breed}
          onDelete={onDelete}
          onStartEdit={onStartEdit}
          onShowDetails={onShowDetails}
        />
      ))}
    </div>
  );
}

export default BreedList;