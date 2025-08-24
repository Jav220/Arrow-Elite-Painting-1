import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function CommercialPainting() {
  const pageData = {
    title: "Commercial Painting Services Tulsa | Office & Retail Painting | Arrow Elite",
    metaDescription: "Professional commercial painting in Tulsa, OK. Office buildings, retail spaces, warehouses. Licensed, insured, flexible scheduling. Call (918) 810-3453!",
    heroTitle: "Commercial Painting Services",
    heroDescription: "Professional commercial painting services for Tulsa businesses. From offices to retail spaces, we deliver quality results with minimal disruption to your operations.",
    heroImage: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "Office Building Painting",
      "Retail Space Painting", 
      "Warehouse & Industrial Painting",
      "Restaurant & Hospitality Painting",
      "Medical Facility Painting",
      "Educational Institution Painting",
      "Parking Garage Painting",
      "Signage & Logo Painting",
      "Emergency Restoration Services"
    ],
    process: [
      {
        title: "Site Assessment",
        description: "Comprehensive evaluation of commercial painting requirements"
      },
      {
        title: "Project Planning",
        description: "Detailed scheduling to minimize business disruption"
      },
      {
        title: "Professional Execution",
        description: "Efficient application with minimal downtime impact"
      },
      {
        title: "Quality Assurance", 
        description: "Final inspection and project completion documentation"
      }
    ],
    benefits: [
      "Licensed Commercial Painting Contractors",
      "Fully Insured with Commercial Coverage",
      "Flexible Scheduling (Nights & Weekends)",
      "Minimal Business Disruption Guarantee",
      "Commercial-Grade Paint Systems",
      "OSHA Safety Compliance Standards",
      "Project Management & Documentation",
      "Emergency Response Available",
      "Multi-Location Service Capability"
    ],
    pricing: [
      {
        title: "Small Office",
        price: "Starting at $2,500",
        features: [
          "Up to 2,000 sq ft space",
          "Interior painting only",
          "Standard commercial paint",
          "Basic surface preparation",
          "Weekend scheduling available", 
          "1-year warranty"
        ]
      },
      {
        title: "Medium Commercial",
        price: "Starting at $8,500",
        features: [
          "Up to 10,000 sq ft space",
          "Interior & exterior options",
          "Premium commercial coatings",
          "Complete surface preparation",
          "Flexible scheduling options",
          "2-year warranty"
        ]
      },
      {
        title: "Large Scale",
        price: "Custom Pricing",
        features: [
          "10,000+ sq ft facilities",
          "Multi-building projects", 
          "Specialized coating systems",
          "Project management included",
          "Phased completion options",
          "3-year warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Office Space Refresh"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "Retail Store Makeover" 
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Conference Room Update"
      }
    ],
    gradientFrom: "from-orange-600",
    gradientTo: "to-red-600", 
    accentColor: "orange-600"
  };

  return <ServicePageLayout {...pageData} />;
}