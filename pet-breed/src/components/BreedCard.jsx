import { useState } from 'react';

function BreedCard({ breed, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(breed.name);
  const [editedOrigin, setEditedOrigin] = useState(breed.origin);
  const [editedDescription, setEditedDescription] = useState(breed.description);

  const handleSave = (e) => {
    e.preventDefault();
    onEdit(breed.id, {
      name: editedName,
      origin: editedOrigin,
      description: editedDescription,
    });
    setIsEditing(false);
  };
  
  // Content to show when viewing the breed
  let content = (
    <div className="p-6">
      <h3 className="text-xl font-bold text-slate-800 mb-2">{breed.name}</h3>
      <p className="text-sm font-semibold text-sky-700 mb-3">{breed.origin}</p>
      <p className="text-slate-600 text-base">{breed.description}</p>
    </div>
  );

  // Content to show when editing the breed
  if (isEditing) {
    content = (
      <form onSubmit={handleSave} className="p-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-600">Name</label>
            <input
              value={editedName}
              onChange={(e) => setEditedName(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600">Origin</label>
            <input
              value={editedOrigin}
              onChange={(e) => setEditedOrigin(e.target.value)}
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-600">Description</label>
            <textarea
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
              rows="4"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm"
              required
            ></textarea>
          </div>
        </div>
        <div className="mt-4">
            <button type="submit" className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md">
            Save
            </button>
        </div>
      </form>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-xl">
      
      {content}
      <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex justify-end space-x-2">
        <button
          onClick={() => setIsEditing(!isEditing)}
          className="px-4 py-2 text-sm font-medium text-white bg-yellow-500 rounded-md hover:bg-yellow-600"
        >
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button
          onClick={() => onDelete(breed.id)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default BreedCard;