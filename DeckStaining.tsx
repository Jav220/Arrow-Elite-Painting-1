import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function DeckStaining() {
  const pageData = {
    title: "Deck Staining & Fence Painting Tulsa | Wood Protection | Arrow Elite Painting",
    metaDescription: "Professional deck staining and fence painting in Tulsa, OK. Weather protection, wood restoration, expert application. Call (918) 810-3453 for estimates!",
    heroTitle: "Deck Staining & Fence Services",
    heroDescription: "Protect and beautify your outdoor wood surfaces with professional deck staining and fence painting services. Weather-resistant finishes that last.",
    heroImage: "/assets/gallery/deck-staining.jpg",
    services: [
      "Deck Staining & Sealing",
      "Fence Painting & Staining", 
      "Pergola & Gazebo Finishing",
      "Outdoor Furniture Restoration",
      "Pressure Washing & Prep",
      "Wood Repair & Replacement",
      "Weatherproofing & Protection",
      "Custom Color Matching",
      "Annual Maintenance Programs"
    ],
    process: [
      {
        title: "Surface Inspection",
        description: "Comprehensive assessment of wood condition and repair needs"
      },
      {
        title: "Power Washing & Prep",
        description: "Deep cleaning and surface preparation for optimal stain penetration"
      },
      {
        title: "Expert Application",
        description: "Professional staining with weather-resistant products"
      },
      {
        title: "Protection Guarantee",
        description: "Quality inspection and maintenance recommendations"
      }
    ],
    benefits: [
      "Weather-Resistant Stain Systems",
      "Professional Power Washing Included",
      "Licensed Wood Finishing Specialists",
      "2-Year Stain & Seal Warranty",
      "UV Protection & Water Resistance",
      "Eco-Friendly Stain Options Available",
      "Fast 1-2 Day Project Completion",
      "Custom Color & Opacity Options",
      "Annual Maintenance Programs"
    ],
    pricing: [
      {
        title: "Basic Deck Staining",
        price: "Starting at $2.50/sq ft",
        features: [
          "Power washing included",
          "Premium semi-transparent stain",
          "Basic surface preparation",
          "Single coat application",
          "1-year warranty",
          "Standard color selection"
        ]
      },
      {
        title: "Premium Package",
        price: "Starting at $3.75/sq ft",
        features: [
          "Complete surface preparation",
          "Premium solid or semi stain",
          "Minor repair work included",
          "Two-coat application",
          "2-year warranty",
          "Custom color matching"
        ]
      },
      {
        title: "Complete Restoration",
        price: "Starting at $5.25/sq ft",
        features: [
          "Full deck restoration service",
          "Board replacement as needed",
          "Premium stain & sealer system",
          "Railings & trim included",
          "3-year warranty",
          "Annual maintenance plan"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1519947486511-46149fa0a254?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Deck Restoration Project"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "Fence Staining Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Outdoor Wood Protection"
      }
    ],
    gradientFrom: "from-amber-600",
    gradientTo: "to-yellow-600",
    accentColor: "amber-600"
  };

  return <ServicePageLayout {...pageData} />;
}