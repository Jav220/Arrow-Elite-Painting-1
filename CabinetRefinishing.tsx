import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CabinetRefinishing() {
  const pageData = {
    title: "Cabinet Refinishing & Painting Tulsa | Kitchen Cabinet Makeover | Arrow Elite",
    metaDescription: "Transform your kitchen with professional cabinet refinishing in Tulsa, OK. Save thousands vs replacement. Expert painting, staining & hardware upgrades.",
    heroTitle: "Cabinet Refinishing & Painting",
    heroDescription: "Transform your kitchen without the cost of replacement. Our cabinet refinishing services give you a brand new look at a fraction of the price.",
    heroImage: "/assets/gallery/cabinet-refinishing.png",
    services: [
      "Kitchen Cabinet Painting",
      "Bathroom Vanity Refinishing",
      "Cabinet Door Replacement",
      "Hardware Installation & Upgrade",
      "Cabinet Staining & Clear Coating",
      "Built-in Furniture Refinishing",
      "Lacquer & Polyurethane Finishes",
      "Color Matching & Custom Colors",
      "Cabinet Repair & Restoration"
    ],
    process: [
      {
        title: "Cabinet Assessment",
        description: "Detailed evaluation of cabinet condition and refinishing options"
      },
      {
        title: "Professional Removal",
        description: "Careful door and hardware removal with detailed labeling system"
      },
      {
        title: "Surface Preparation",
        description: "Thorough cleaning, sanding, and priming for perfect finish"
      },
      {
        title: "Expert Application",
        description: "Professional spray application and quality control inspection"
      }
    ],
    benefits: [
      "Save 70% vs Cabinet Replacement",
      "Professional Spray Finish Quality",
      "Licensed & Insured Cabinet Specialists", 
      "2-Year Warranty on All Refinishing",
      "Eco-Friendly Low-VOC Finishes",
      "Complete Hardware Upgrade Options",
      "Fast 3-5 Day Turnaround Time",
      "Custom Color Matching Available",
      "Minimal Kitchen Disruption"
    ],
    pricing: [
      {
        title: "Basic Refinish",
        price: "Starting at $150/door",
        features: [
          "Professional cleaning & prep",
          "Single color paint finish",
          "Basic hardware reinstall",
          "Standard paint colors",
          "1-year warranty",
          "Basic cabinet adjustment"
        ]
      },
      {
        title: "Premium Refinish",
        price: "Starting at $225/door",
        features: [
          "Complete surface preparation",
          "Two-coat premium finish",
          "Hardware upgrade options",
          "Custom color matching",
          "Soft-close hinge upgrades",
          "2-year warranty"
        ]
      },
      {
        title: "Luxury Makeover",
        price: "Starting at $325/door", 
        features: [
          "Complete cabinet restoration",
          "Designer finish options",
          "Premium hardware package",
          "Custom stain & glaze effects",
          "Interior cabinet painting",
          "3-year warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "Kitchen Cabinet Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "White Cabinet Makeover"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Modern Cabinet Refinish"
      }
    ],
    gradientFrom: "from-green-600", 
    gradientTo: "to-emerald-600",
    accentColor: "green-600"
  };

  return <ServicePageLayout {...pageData} />;
}