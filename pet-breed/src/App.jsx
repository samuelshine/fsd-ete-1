import { useState } from 'react';
import BreedCreate from './components/BreedCreate';
import BreedEdit from './components/BreedEdit';
import BreedList from './components/BreedList';
import BreedShow from './components/BreedShow';

function App() {
  const [breeds, setBreeds] = useState([
    { id: 101, name: 'Siberian Husky', origin: 'Siberia', description: 'Known for their striking appearance and powerful pulling capabilities.' },
    { id: 102, name: 'German Shepherd', origin: 'Germany', description: 'A versatile and intelligent breed, often used in police and military roles.' }
  ]);
  
  // State for showing the details modal
  const [selectedBreed, setSelectedBreed] = useState(null);
  
  // State to track which breed is being edited.
  // If null, show BreedCreate. If it has a breed object, show BreedEdit.
  const [breedToEdit, setBreedToEdit] = useState(null);

  // --- HANDLER FUNCTIONS ---

  const handleCreateBreed = (newBreedData) => {
    const newBreed = { ...newBreedData, id: Math.round(Math.random() * 9999) };
    setBreeds([...breeds, newBreed]);
  };

  const handleDeleteBreed = (id) => {
    setBreeds(breeds.filter((b) => b.id !== id));
  };

  const handleStartEdit = (breed) => {
    setBreedToEdit(breed);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleCancelEdit = () => {
    setBreedToEdit(null);
  };
  
  const handleSaveEdit = (updatedData) => {
    setBreeds(breeds.map((b) => (b.id === breedToEdit.id ? { ...b, ...updatedData } : b)));
    setBreedToEdit(null); // Exit edit mode after saving
  };

  const handleShowDetails = (breed) => setSelectedBreed(breed);
  const handleCloseDetails = () => setSelectedBreed(null);

  return (
    <div className="min-h-screen bg-slate-100 font-sans">
      <header className="bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-extrabold text-slate-800 tracking-tight">Dog Breed Manager</h1>
        </div>
      </header>

      <main className="max-w-5xl mx-auto p-4 md:p-6">
        {/* === CONDITIONAL RENDERING LOGIC === */}
        {/* If breedToEdit has a value, show the Edit form. Otherwise, show the Create form. */}
        {breedToEdit ? (
          <BreedEdit breed={breedToEdit} onSave={handleSaveEdit} onCancel={handleCancelEdit} />
        ) : (
          <BreedCreate onCreate={handleCreateBreed} />
        )}

        <h2 className="text-3xl font-bold text-slate-700 mb-6 border-b-2 border-sky-200 pb-2">
          Your Breed Collection
        </h2>
        
        <BreedList
          breeds={breeds}
          onDelete={handleDeleteBreed}
          onStartEdit={handleStartEdit}
          onShowDetails={handleShowDetails}
        />
      </main>

      {/* The modal (BreedShow) is rendered here when a breed is selected */}
      {selectedBreed && <BreedShow breed={selectedBreed} onClose={handleCloseDetails} />}
    </div>
  );
}

export default App;