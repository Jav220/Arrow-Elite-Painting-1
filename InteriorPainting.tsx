import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function InteriorPainting() {
  const pageData = {
    title: "Interior Painting Services Tulsa | Arrow Elite Painting | Free Estimates",
    metaDescription: "Professional interior painting services in Tulsa, OK. Expert painters, premium paints, 3-year warranty. Call (918) 810-3453 for your free estimate today!",
    heroTitle: "Interior Painting Services",
    heroDescription: "Transform your home's interior with Arrow Elite Painting's professional interior painting services. From living rooms to bedrooms, we deliver flawless results that last.",
    heroImage: "/assets/gallery/luxury-interior-painting.png",
    services: [
      "Living Room Painting",
      "Bedroom Painting", 
      "Kitchen Painting",
      "Bathroom Painting",
      "Hallway & Stairwell Painting",
      "Ceiling Painting",
      "Trim & Molding Painting",
      "Accent Wall Creation",
      "Wallpaper Removal & Painting"
    ],
    process: [
      {
        title: "Free Consultation",
        description: "We assess your space and provide color recommendations"
      },
      {
        title: "Surface Preparation", 
        description: "Professional prep work ensures perfect paint adhesion"
      },
      {
        title: "Quality Application",
        description: "Expert painting with premium materials and techniques"
      },
      {
        title: "Final Inspection",
        description: "Thorough quality check and customer walkthrough"
      }
    ],
    benefits: [
      "Premium Benjamin Moore & Sherwin Williams Paints",
      "Licensed & Insured Professional Painters",
      "3-Year Limited Warranty on All Work",
      "Free Color Consultation Services", 
      "Flexible Scheduling Around Your Life",
      "Complete Furniture Protection",
      "Same-Day Estimates Available",
      "Eco-Friendly Paint Options",
      "Expert Surface Preparation"
    ],
    pricing: [
      {
        title: "Basic Package",
        price: "Starting at $2.50/sq ft",
        features: [
          "Premium quality paint",
          "Professional surface prep", 
          "One coat primer & paint",
          "Basic trim painting",
          "Cleanup included",
          "1-year warranty"
        ]
      },
      {
        title: "Premium Package", 
        price: "Starting at $3.50/sq ft",
        features: [
          "Premium Benjamin Moore paint",
          "Extensive surface preparation",
          "Two coats of paint",
          "Detailed trim & molding",
          "Ceiling painting included",
          "3-year warranty"
        ]
      },
      {
        title: "Luxury Package",
        price: "Starting at $4.50/sq ft", 
        features: [
          "Designer paint collection",
          "Complete surface restoration",
          "Multiple paint coats", 
          "Custom color matching",
          "Accent walls & textures",
          "5-year warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/interior-remodeling.png",
        title: "Complete Interior Remodeling"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/interior-remodeling-2.png",
        title: "Modern Interior Design & Paint"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
        after: "/assets/gallery/luxury-interior-excellence.jpg",
        title: "Luxury Interior Painting Excellence"
      }
    ],
    gradientFrom: "from-purple-600",
    gradientTo: "to-pink-600", 
    accentColor: "purple-600"
  };

  return (
    <div>
      <ServicePageLayout {...pageData} />
      
      {/* Luxury Interior Painting Excellence Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            {/* Left side - Text content */}
            <div className="space-y-6">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Luxury Interior Painting Excellence
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Experience the pinnacle of interior painting craftsmanship with our luxury services. 
                We specialize in creating sophisticated, elegant spaces that reflect your unique style 
                and elevate your home's aesthetic appeal.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Premium paint systems and finishes
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Custom color consultation and matching
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Meticulous attention to detail
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mr-3"></div>
                  Luxury interior design integration
                </li>
              </ul>
              <div className="pt-4">
                <a 
                  href="/estimate" 
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Get Your Luxury Quote
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
            
            {/* Right side - Image */}
            <div className="relative">
              <img 
                src="/assets/gallery/luxury-interior-excellence-new.png"
                alt="Luxury Interior Painting Excellence - High-end interior paint finish showcasing premium craftsmanship"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}