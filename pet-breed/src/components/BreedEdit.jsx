import { useState, useEffect } from 'react';

function BreedEdit({ breed, onSave, onCancel }) {
  const [name, setName] = useState(breed.name);
  const [origin, setOrigin] = useState(breed.origin);
  const [description, setDescription] = useState(breed.description);

  // If the user clicks edit on another breed while this form is open,
  // this effect ensures the form fields update to the new breed's data.
  useEffect(() => {
    setName(breed.name);
    setOrigin(breed.origin);
    setDescription(breed.description);
  }, [breed]);

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave({ name, origin, description });
  };

  return (
    <div className="p-6 mb-8 bg-yellow-50 border-2 border-yellow-300 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-slate-700 mb-4">✍️ Edit Dog Breed</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="edit-name" className="block text-sm font-medium text-slate-600">Breed Name</label>
          <input id="edit-name" type="text" value={name} onChange={(e) => setName(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500" />
        </div>
        <div>
          <label htmlFor="edit-origin" className="block text-sm font-medium text-slate-600">Origin</label>
          <input id="edit-origin" type="text" value={origin} onChange={(e) => setOrigin(e.target.value)} required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500" />
        </div>
        <div>
          <label htmlFor="edit-description" className="block text-sm font-medium text-slate-600">Description</label>
          <textarea id="edit-description" value={description} onChange={(e) => setDescription(e.target.value)} rows="3" required className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500"></textarea>
        </div>
        <div className="flex space-x-3">
          <button type="submit" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
            Save Changes
          </button>
          <button type="button" onClick={onCancel} className="w-full py-2 px-4 bg-slate-500 hover:bg-slate-600 text-white font-semibold rounded-lg shadow-md transition-colors duration-200">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default BreedEdit;