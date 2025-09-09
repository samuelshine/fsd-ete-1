import BreedCard from './BreedCard';

function BreedList({ breeds, onDelete, onEdit }) {
  const renderedBreeds = breeds.map((breed) => (
    <BreedCard key={breed.id} breed={breed} onDelete={onDelete} onEdit={onEdit} />
  ));

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {renderedBreeds}
    </div>
  );
}

export default BreedList;