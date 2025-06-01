"use client";
import React, { useState } from "react";
import Layout from "@/components/layout/Layout";
import Tabs from "@/components/ui/Tabs";
import SearchBar from "@/components/ui/SearchBar";
import ProjectCard from "@/components/project/ProjectCard";
import AddProjectModal from "@/components/project/AddProjectModal";

const sampleProjects = [
  {
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=500&auto=format&fit=crop&q=60",
    title: "Kemampuan Merangkum Tulisan",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    author: "Al-Baigi Samaan",
    category: "BAHASA SUNDA",
  },
  {
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=500&auto=format&fit=crop&q=60",
    title: "Kemampuans",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    author: "Al-Baigi Samaan",
    category: "BAHASA SUNDA",
  },
  {
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=500&auto=format&fit=crop&q=60",
    title: "Kemampuan Merangkum Tulisan",
    description: "Lorem Ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus.Lorem Ipsum Dolor Sit Amet Consectetur....",
    author: "Al-Baigi Samaan",
    category: "BAHASA SUNDA",
  },
];

const tabList = ["Project", "Saved", "Shared", "Achievement"];

export default function Home() {
  const [activeTab, setActiveTab] = useState(tabList[0]);
  const [search, setSearch] = useState("");
  const [cart, setCart] = useState<string[]>([]);
  const [saved, setSaved] = useState<string[]>([]);
  const [shared, setShared] = useState<string[]>([]);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  const filteredProjects = sampleProjects.filter(
    (project) =>
      project.title.toLowerCase().includes(search.toLowerCase()) ||
      project.description.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (title: string) => {
    setCart((prev) => [...prev, title]);
  };

  const handleSave = (title: string) => {
    setSaved((prev) => prev.includes(title) ? prev : [...prev, title]);
  };
  const handleShare = (title: string) => {
    setShared((prev) => prev.includes(title) ? prev : [...prev, title]);
  };
  const handleRemoveSaved = (title: string) => {
    setSaved((prev) => prev.filter((t) => t !== title));
  };
  const handleRemoveShared = (title: string) => {
    setShared((prev) => prev.filter((t) => t !== title));
  };
  const handleRemoveCart = (title: string) => {
    setCart((prev) => prev.filter((t) => t !== title));
  };

  const handleAddProjectSubmit = (newProjectData: any) => {
    console.log('New project data:', newProjectData);
    setIsAddModalOpen(false);
  };

  const getProjectByTitle = (title: string) => sampleProjects.find(p => p.title === title);

  const cartProjects = cart.map(getProjectByTitle).filter(Boolean) as typeof sampleProjects;

  return (
    <Layout
      cartCount={cart.length}
      cartItems={cart}
      cartProjects={cartProjects}
      onRemoveCartItem={handleRemoveCart}
    >
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-black">Portfolio</h1>
        <button
          className="bg-[#F15A29] text-white px-4 py-2 rounded-md font-medium hover:bg-[#e04e1e] transition"
          onClick={() => setIsAddModalOpen(true)}
        >
          Add Project
        </button>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 w-full">
        <Tabs onTabChange={setActiveTab} />
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      <div className="flex flex-col">
        {activeTab === "Project" && (
          filteredProjects.length > 0 ? (
            filteredProjects.map((project, idx) => (
              <ProjectCard
                key={idx}
                {...project}
                inCart={cart.includes(project.title)}
                onAddToCart={() => handleAddToCart(project.title)}
                isSaved={saved.includes(project.title)}
                isShared={shared.includes(project.title)}
                onSave={() => handleSave(project.title)}
                onShare={() => handleShare(project.title)}
              />
            ))
          ) : (
            <div className="text-gray-400 text-lg mt-8">No projects found.</div>
          )
        )}
        {activeTab === "Saved" && (
          saved.length > 0 ? (
            saved.map((title, idx) => {
              const project = getProjectByTitle(title);
              return project ? (
                <ProjectCard
                  key={idx}
                  {...project}
                  inCart={cart.includes(project.title)}
                  onAddToCart={() => handleAddToCart(project.title)}
                  isSaved={true}
                  isShared={shared.includes(project.title)}
                  onShare={() => handleShare(project.title)}
                  onRemove={() => handleRemoveSaved(project.title)}
                />
              ) : null;
            })
          ) : (
            <div className="text-gray-400 text-lg mt-8">No saved projects yet.</div>
          )
        )}
        {activeTab === "Shared" && (
          shared.length > 0 ? (
            shared.map((title, idx) => {
              const project = getProjectByTitle(title);
              return project ? (
                <ProjectCard
                  key={idx}
                  {...project}
                  inCart={cart.includes(project.title)}
                  onAddToCart={() => handleAddToCart(project.title)}
                  isSaved={saved.includes(project.title)}
                  isShared={true}
                  onRemove={() => handleRemoveShared(project.title)}
                />
              ) : null;
            })
          ) : (
            <div className="text-gray-400 text-lg mt-8">No shared projects yet.</div>
          )
        )}
        {activeTab === "Achievement" && (
          <div className="text-gray-400 text-lg mt-8">No achievements yet.</div>
        )}
      </div>
      
      <AddProjectModal isOpen={isAddModalOpen} onClose={() => setIsAddModalOpen(false)} onSubmit={handleAddProjectSubmit} />
    </Layout>
  );
}
