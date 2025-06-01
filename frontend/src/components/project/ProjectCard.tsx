import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  author: string;
  category: string;
  onAddToCart?: () => void;
  inCart?: boolean;
  onSave?: () => void;
  onShare?: () => void;
  isSaved?: boolean;
  isShared?: boolean;
  onRemove?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  description,
  author,
  category,
  onAddToCart,
  inCart,
  onSave,
  onShare,
  isSaved,
  isShared,
  onRemove,
}) => {
  return (
    <div className="flex bg-white rounded-xl shadow p-4 mb-6 items-center gap-6 max-w-3xl w-full">
      <img src={image} alt={title} className="w-28 h-24 object-cover rounded-lg" />
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-2">{description}</p>
        <div className="text-gray-600 text-xs mb-1 font-medium">{category}</div>
        <div className="text-gray-600 text-xs font-medium">Oleh {author}</div>
      </div>
      <div className="flex flex-col gap-2 items-end">
        <button
          className={`px-5 py-2 rounded-md font-medium transition mb-1 ${inCart ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-[#F15A29] text-white hover:bg-[#e04e1e]'}`}
          onClick={onAddToCart}
          disabled={inCart}
        >
          {inCart ? 'Added' : 'Add to Cart'}
        </button>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded text-xs font-medium border transition ${isSaved ? 'bg-green-100 text-green-700 border-green-300 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:bg-green-50'}`}
            onClick={onSave}
            disabled={isSaved}
          >
            {isSaved ? 'Saved' : 'Save'}
          </button>
          <button
            className={`px-3 py-1 rounded text-xs font-medium border transition ${isShared ? 'bg-blue-100 text-blue-700 border-blue-300 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:bg-blue-50'}`}
            onClick={onShare}
            disabled={isShared}
          >
            {isShared ? 'Shared' : 'Share'}
          </button>
        </div>
        {onRemove && (
          <button
            className="mt-2 px-3 py-1 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-300 hover:bg-red-200 transition"
            onClick={onRemove}
          >
            Remove
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectCard; 