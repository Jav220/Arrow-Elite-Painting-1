import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function PressureWashing() {
  const pageData = {
    title: "Pressure Washing Services Tulsa | House & Driveway Cleaning | Arrow Elite",
    metaDescription: "Professional pressure washing in Tulsa, OK. House washing, driveway cleaning, deck prep, commercial cleaning. Prepare surfaces for painting perfectly.",
    heroTitle: "Pressure Washing Services",
    heroDescription: "Restore your property's appearance with professional pressure washing services. Essential preparation for painting projects and general maintenance.",
    heroImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "House Exterior Washing",
      "Driveway & Sidewalk Cleaning",
      "Deck & Patio Cleaning",
      "Fence & Gate Washing",
      "Commercial Building Washing",
      "Parking Lot Cleaning",
      "Pre-Paint Surface Preparation",
      "Mold & Mildew Removal",
      "Gutter Cleaning & Washing"
    ],
    process: [
      {
        title: "Property Assessment",
        description: "Evaluation of surfaces and appropriate pressure settings"
      },
      {
        title: "Surface Protection",
        description: "Protection of landscaping and delicate surfaces"
      },
      {
        title: "Professional Washing",
        description: "Expert cleaning with appropriate techniques and detergents"
      },
      {
        title: "Quality Inspection",
        description: "Final walkthrough and customer satisfaction check"
      }
    ],
    benefits: [
      "Professional-Grade Equipment & Techniques",
      "Licensed & Insured Cleaning Specialists",
      "Eco-Friendly Cleaning Solutions Available",
      "Complete Landscape Protection Included",
      "Same-Day Service Often Available",
      "Perfect Prep for Painting Projects",
      "Mold & Mildew Treatment Specialists",
      "Commercial & Residential Services",
      "100% Customer Satisfaction Guarantee"
    ],
    pricing: [
      {
        title: "Basic House Wash",
        price: "Starting at $350",
        features: [
          "Up to 2,000 sq ft home",
          "Exterior siding cleaning",
          "Window exterior cleaning",
          "Basic landscape protection",
          "Standard pressure washing",
          "30-day satisfaction guarantee"
        ]
      },
      {
        title: "Complete Property",
        price: "Starting at $650",
        features: [
          "Full house exterior washing",
          "Driveway & walkway cleaning",
          "Deck or patio cleaning",
          "Complete landscape protection",
          "Mold & mildew treatment",
          "60-day satisfaction guarantee"
        ]
      },
      {
        title: "Premium Package",
        price: "Starting at $950",
        features: [
          "Complete property cleaning",
          "Fence & gate washing",
          "Gutter cleaning included",
          "Pre-paint surface preparation",
          "Eco-friendly solutions",
          "90-day satisfaction guarantee"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "House Washing Results"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Driveway Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Deck Cleaning Prep"
      }
    ],
    gradientFrom: "from-cyan-600",
    gradientTo: "to-blue-600",
    accentColor: "cyan-600"
  };

  return <ServicePageLayout {...pageData} />;
}