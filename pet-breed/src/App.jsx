import { useState } from 'react';
import BreedCreate from './components/BreedCreate';
import BreedList from './components/BreedList';

function App() {
  const [breeds, setBreeds] = useState([
    // Some initial data to start with
    { id: 101, name: 'Siberian Husky', origin: 'Siberia', description: 'Known for their striking appearance and powerful pulling capabilities.' },
    { id: 102, name: 'German Shepherd', origin: 'Germany', description: 'A versatile and intelligent breed, often used in police and military roles.' }
  ]);

  // CREATE operation
  const createBreed = (newBreed) => {
    const updatedBreeds = [...breeds, newBreed];
    setBreeds(updatedBreeds);
  };

  // DELETE operation
  const deleteBreedById = (id) => {
    const updatedBreeds = breeds.filter((breed) => breed.id !== id);
    setBreeds(updatedBreeds);
  };

  // UPDATE operation
  const editBreedById = (id, newDetails) => {
    const updatedBreeds = breeds.map((breed) => {
      if (breed.id === id) {
        return { ...breed, ...newDetails };
      }
      return breed;
    });
    setBreeds(updatedBreeds);
  };

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">
            Dog Breed Manager
          </h1>
        </div>
      </header>
      <main className="max-w-5xl mx-auto p-4 md:p-6">
        <BreedCreate onCreate={createBreed} />
        <h2 className="text-3xl font-bold text-slate-700 mb-6 border-b-2 border-sky-200 pb-2">
          Your Breed Collection
        </h2>
        {breeds.length > 0 ? (
          <BreedList breeds={breeds} onDelete={deleteBreedById} onEdit={editBreedById} />
        ) : (
          <p className="text-center text-slate-500 mt-10">No dog breeds yet. Add one to get started!</p>
        )}
      </main>
    </div>
  );
}

export default App;