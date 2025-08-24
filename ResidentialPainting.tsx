import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ResidentialPainting() {
  const pageData = {
    title: "Residential Painting Services Tulsa | House Painters | Arrow Elite Painting",
    metaDescription: "Professional residential painting services in Tulsa, OK. Interior & exterior house painting, 3-year warranty, free estimates. Trusted local painters.",
    heroTitle: "Residential Painting Services", 
    heroDescription: "Complete residential painting services for Tulsa homeowners. From single rooms to whole house makeovers, we deliver beautiful, lasting results.",
    heroImage: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Whole House Interior Painting",
      "Complete Exterior House Painting", 
      "Single Room Painting Projects",
      "Accent Wall & Feature Painting",
      "Popcorn Ceiling Removal & Painting",
      "Crown Molding & Trim Painting",
      "Garage & Basement Painting",
      "Touch-up & Maintenance Painting",
      "Move-in Ready Paint Services"
    ],
    process: [
      {
        title: "Home Consultation",
        description: "In-home assessment and personalized painting recommendations"
      },
      {
        title: "Color Selection",
        description: "Professional color consultation and sample testing"
      },
      {
        title: "Preparation & Painting",
        description: "Complete prep work and expert paint application"
      },
      {
        title: "Final Walkthrough",
        description: "Quality inspection and customer satisfaction guarantee"
      }
    ],
    benefits: [
      "Trusted Local Tulsa House Painters",
      "Licensed & Insured Residential Specialists",
      "3-Year Limited Warranty Coverage",
      "Free In-Home Color Consultation",
      "Furniture Moving & Protection Included",
      "Same-Day Estimate Service Available",
      "Premium Benjamin Moore & Sherwin Williams",
      "Flexible Scheduling Around Your Life", 
      "100% Customer Satisfaction Guarantee"
    ],
    pricing: [
      {
        title: "Single Room",
        price: "Starting at $450",
        features: [
          "One bedroom or bathroom",
          "Premium interior paint",
          "Basic surface preparation",
          "Trim & door painting",
          "Furniture protection",
          "1-year warranty"
        ]
      },
      {
        title: "Multi-Room Package",
        price: "Starting at $1,850",
        features: [
          "3-4 connected rooms",
          "Premium paint & materials", 
          "Complete surface preparation",
          "Detailed trim work",
          "Color consultation included",
          "2-year warranty"
        ]
      },
      {
        title: "Whole House",
        price: "Starting at $4,500",
        features: [
          "Complete interior painting",
          "Designer paint collection",
          "Extensive prep & repair work",
          "All trim & ceiling work",
          "Full color consultation",
          "3-year warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "Living Room Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Master Bedroom Makeover"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80", 
        title: "Kitchen Paint Refresh"
      }
    ],
    gradientFrom: "from-teal-600",
    gradientTo: "to-blue-600",
    accentColor: "teal-600"
  };

  return <ServicePageLayout {...pageData} />;
}