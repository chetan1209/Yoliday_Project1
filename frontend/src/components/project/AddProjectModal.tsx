"use client";
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

interface AddProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: AddProjectFormData) => void;
}

const addProjectFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().min(1, 'Description is required'),
  category: z.string().min(1, 'Category is required'),
  author: z.string().min(1, 'Author is required'),
  image_url: z.string().url('Invalid URL format').min(1, 'Image URL is required'),
});

export type AddProjectFormData = z.infer<typeof addProjectFormSchema>;

const AddProjectModal: React.FC<AddProjectModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const { register, handleSubmit, formState: { errors } } = useForm<AddProjectFormData>({
    resolver: zodResolver(addProjectFormSchema),
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-xl font-bold mb-4 text-black">Add New Project</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-black">Title</label>
            <input id="title" {...register('title')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" />
            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-black">Description</label>
            <textarea id="description" {...register('description')} rows={3} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black"></textarea>
            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-black">Category</label>
            <input id="category" {...register('category')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" />
            {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category.message}</p>}
          </div>
          <div>
            <label htmlFor="author" className="block text-sm font-medium text-black">Author</label>
            <input id="author" {...register('author')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" />
            {errors.author && <p className="text-red-500 text-xs mt-1">{errors.author.message}</p>}
          </div>
          <div>
            <label htmlFor="image_url" className="block text-sm font-medium text-black">Image URL</label>
            <input id="image_url" type="url" {...register('image_url')} className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 text-black" />
            {errors.image_url && <p className="text-red-500 text-xs mt-1">{errors.image_url.message}</p>}
          </div>
          <button type="submit" className="w-full bg-[#F15A29] text-white px-4 py-2 rounded-md font-medium hover:bg-[#e04e1e] transition">Add Project</button>
        </form>
      </div>
    </div>
  );
};

export default AddProjectModal; 