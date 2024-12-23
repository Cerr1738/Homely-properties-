import React, { useState } from "react";
import PropertyCard from "./PropertyCard";
import EditPropertyModal from "./EditPropertyModal";
import { ArrowLeft, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import property from "../images/house1.jpeg";
import Header from "./Header";
import FAQ from "./FAQ";
import { FiSearch, FiSliders } from "react-icons/fi";

const sampleProperties = Array(6)
  .fill()
  .map(() => ({
    id: Math.random().toString(36).substr(2, 9),
    title: "4 bedroom apartment",
    location: "GRA, Port Harcourt Rivers state",
    price: "500,000.00",
    totalFees: "700,000.00",
    status: "Available",
    image: property,
  }));

function ManageListings() {
  const navigate = useNavigate();

  const [searchTerm, setSearchTerm] = useState("");
  const [properties, setProperties] = useState(sampleProperties);
  const [editingProperty, setEditingProperty] = useState(null);

  const handleDelete = (id) => {
    setProperties(properties.filter((property) => property.id !== id));
  };

  const handleEdit = (id) => {
    const propertyToEdit = properties.find((property) => property.id === id);
    setEditingProperty(propertyToEdit);
  };

  const handleSaveEdit = (editedProperty) => {
    setProperties(
      properties.map((property) =>
        property.id === editedProperty.id ? editedProperty : property
      )
    );
    setEditingProperty(null);
  };

  const handleCloseEdit = () => {
    setEditingProperty(null);
  };

  return (
    <div>
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8 mx-[80px]">
          <div className="flex flex-col md:flex-row items-center gap-4 p-2 md:p-4">
            <Link
              to="/"
              className="p-2 hover:bg-gray-100 rounded-full flex-shrink-0"
            >
              <ArrowLeft className="h-6 w-6" />
            </Link>

            <div className="relative flex-1 w-full md:max-w-xl">
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-2 w-full shadow-sm">
                <button className="flex-shrink-0 text-gray-500 hover:text-gray-700 mr-3">
                  <FiSliders className="h-5 w-5" />
                </button>

                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none bg-transparent text-gray-700"
                />

                <button className="flex-shrink-0 text-gray-500 hover:text-gray-700 ">
                  <FiSearch className="h-5 w-5"  
                  />
                </button>
              </div>
            </div>
          </div>

          <button className="bg-[#966453] text-white px-6 py-2 rounded-md hover:bg-[#704B2A]"
          onClick={() => navigate("/add-listing")}>
            Add listing
          </button>
        </div>

        <h1 className="text-2xl font-bold mb-6 ml-[80px] text-[#503025]">
          Property Listings
        </h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mx-[80px]">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              property={property}
              onDelete={handleDelete}
              onEdit={handleEdit}
            />
          ))}
        </div>

        {editingProperty && (
          <EditPropertyModal
            property={editingProperty}
            onSave={handleSaveEdit}
            onClose={handleCloseEdit}
          />
        )}
      </main>
      <FAQ />
    </div>
  );
}

export default ManageListings;
