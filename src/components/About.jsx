import React from "react";
import Footer from "./Footer";
import NavBar from './NavBar'
const About = () => {
  return (
    <div>
      <NavBar />
    <div className=" text-gray-800 min-h-screen py-10 px-6">
    
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Homely</h1>
        <p className="text-lg text-center mb-10">
          Welcome to <span className="font-semibold">Homely</span>, your trusted
          real estate marketplace designed to bridge the gap between landlords
          and potential tenants or buyers. With Homely, we eliminate
          intermediaries, ensuring a seamless, cost-effective, and transparent
          property renting and buying experience.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">What We Offer</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Landlord Registration & Property Listing:</strong>{" "}
              Landlords can easily register and showcase their properties.
            </li>
            <li>
              <strong>Property Search & Filtering Options:</strong> Users can
              search properties based on location, price range, type, and more,
              making it easier to find the perfect match.
            </li>
            <li>
              <strong>Secure Payment Processing:</strong> Facilitates
              hassle-free and secure rental or purchase transactions directly
              through the app.
            </li>
            <li>
              <strong>In-App Messaging:</strong> Enables direct communication
              between landlords and tenants or buyers, fostering transparency
              and efficiency.
            </li>
            <li>
              <strong>Verified User Profiles & Reviews:</strong> Enhances trust
              by ensuring all users and properties are authenticated and rated
              by the community.
            </li>
          </ul>
        </section>

      
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Why Choose HomeHub?</h2>
          <ul className="list-disc pl-6 space-y-3">
            <li>
              <strong>Direct Communication:</strong> Avoid the delays and
              miscommunication that come with middlemen. Speak directly with
              landlords or potential tenants/buyers.
            </li>
            <li>
              <strong>Cost-Effective:</strong> Save money by bypassing agents
              and their fees.
            </li>
            <li>
              <strong>Trustworthy Environment:</strong> Verified profiles and
              community-driven reviews ensure you’re interacting with credible
              users.
            </li>
            <li>
              <strong>Streamlined Process:</strong> From property search to
              secure payments, HomeHub simplifies the entire property
              acquisition journey.
            </li>
          </ul>
        </section>

      
        <section>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            At HomeHub, we aim to redefine the real estate experience by making
            it more accessible, transparent, and efficient for everyone. Whether
            you're a landlord looking to list your property or a tenant/buyer
            searching for your next home, HomeHub is here to make it happen with
            ease.
          </p>
        </section>
      </div>
    
    </div>
    <Footer/>
    </div>
  );
};

export default About;
