import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ExteriorPainting() {
  const pageData = {
    title: "Exterior Painting Services Tulsa | House Painting | Arrow Elite Painting",
    metaDescription: "Professional exterior house painting in Tulsa, OK. Weather-resistant paints, expert prep work, 3-year warranty. Transform your home's curb appeal today!",
    heroTitle: "Exterior Painting Services",
    heroDescription: "Boost your home's curb appeal and protect it from the elements with Arrow Elite Painting's professional exterior painting services in Tulsa and surrounding areas.",
    heroImage: "/images/exteriorpainting.jpg",
    services: [
      "Siding Painting (Vinyl, Wood, Fiber Cement)",
      "Trim & Window Painting",
      "Front Door Painting",
      "Garage Door Painting", 
      "Fence & Deck Staining",
      "Brick & Stucco Painting",
      "Power Washing & Prep",
      "Weather Damage Repair",
      "Color Consultation"
    ],
    process: [
      {
        title: "Property Assessment",
        description: "Thorough inspection of exterior surfaces and damage assessment"
      },
      {
        title: "Power Washing & Prep",
        description: "Complete cleaning and surface preparation for optimal paint adhesion"
      },
      {
        title: "Weather-Resistant Application", 
        description: "Premium exterior paints applied with professional techniques"
      },
      {
        title: "Quality Guarantee",
        description: "Final inspection and 3-year warranty on all work"
      }
    ],
    benefits: [
      "Weather-Resistant Premium Paints",
      "Professional Power Washing Included",
      "Licensed & Insured Painting Contractors",
      "3-Year Limited Warranty Coverage",
      "Free Exterior Color Consultation",
      "Complete Landscape Protection", 
      "Oklahoma Weather-Tested Materials",
      "Flexible Scheduling & Fast Service",
      "Comprehensive Surface Preparation"
    ],
    pricing: [
      {
        title: "Standard Exterior",
        price: "Starting at $3,500",
        features: [
          "Up to 1,500 sq ft home",
          "Premium exterior paint",
          "Power washing included",
          "Basic trim painting",
          "Surface preparation",
          "2-year warranty"
        ]
      },
      {
        title: "Full House Package",
        price: "Starting at $6,500", 
        features: [
          "Up to 2,500 sq ft home",
          "Premium weather-resistant paint",
          "Complete power washing",
          "Detailed trim work",
          "Minor repair work included",
          "3-year warranty"
        ]
      },
      {
        title: "Premium Exterior",
        price: "Starting at $9,500",
        features: [
          "Up to 3,500 sq ft home",
          "Top-tier paint systems",
          "Extensive prep & repair work",
          "Custom color consultation", 
          "All trim & detail work",
          "5-year warranty"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "/assets/gallery/exterior-before-new.jpg",
        after: "/assets/gallery/exterior-after-new.jpg",
        title: "Exterior Painting Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/exterior-project-1.png",
        title: "Professional Exterior Painting Project"
      },
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/exterior-project-2.png", 
        title: "Complete Home Exterior Makeover"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/exterior-project-3.png",
        title: "Premium Exterior Paint Finish"
      },
      {
        before: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/exterior-project-4.png",
        title: "Modern Exterior Design"
      }
    ],
    gradientFrom: "from-blue-600",
    gradientTo: "to-cyan-600",
    accentColor: "blue-600"
  };

  return <ServicePageLayout {...pageData} />;
}