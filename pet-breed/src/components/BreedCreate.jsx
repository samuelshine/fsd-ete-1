import { useState } from 'react';

function BreedCreate({ onCreate }) {
  const [name, setName] = useState('');
  const [origin, setOrigin] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the new breed data up to the App component
    onCreate({ name, origin, description });
    // Clear the form fields
    setName('');
    setOrigin('');
    setDescription('');
  };

  return (
    <div className="p-6 mb-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-slate-700 mb-4">🐾 Add a New Dog Breed</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-600">Breed Name</label>
          <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
        </div>
        <div>
          <label htmlFor="origin" className="block text-sm font-medium text-slate-600">Origin</label>
          <input id="origin" type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-slate-600">Description</label>
          <textarea id="description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"></textarea>
        </div>
        <button type="submit" className="w-full py-2 px-4 bg-sky-600 hover:bg-sky-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
          Add Breed
        </button>
      </form>
    </div>
  );
}

export default BreedCreate;