import React from "react";
import ServicePageLayout from "@/components/ServicePageLayout";

export default function ColorConsultation() {
  const pageData = {
    title: "Color Consultation Services Tulsa | Paint Color Expert | Arrow Elite Painting",
    metaDescription: "Professional color consultation services in Tulsa, OK. Expert paint color selection, room design advice, and color matching. Transform your space today!",
    heroTitle: "Professional Color Consultation",
    heroDescription: "Take the guesswork out of color selection. Our expert color consultants help you choose the perfect colors to transform your space and reflect your style.",
    heroImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: [
      "In-Home Color Consultation",
      "Virtual Color Design Services", 
      "Paint Color Matching & Sampling",
      "Room-by-Room Color Planning",
      "Color Psychology & Mood Design",
      "Accent Wall & Feature Planning",
      "Exterior Color Scheme Design",
      "Commercial Color Branding",
      "Color Trend Analysis & Updates"
    ],
    process: [
      {
        title: "Space Analysis",
        description: "Assessment of lighting, architecture, and existing elements"
      },
      {
        title: "Style Discovery",
        description: "Understanding your preferences and lifestyle needs"
      },
      {
        title: "Color Development",
        description: "Creating custom color palettes and sample testing"
      },
      {
        title: "Final Selection",
        description: "Confirming choices and providing detailed paint specifications"
      }
    ],
    benefits: [
      "Certified Color Consultation Experts",
      "Benjamin Moore & Sherwin Williams Specialist",
      "Avoid Costly Color Mistakes", 
      "Increase Your Home's Value",
      "Personalized Color Recommendations",
      "Professional Sample Testing Service",
      "Lighting & Room Assessment Included",
      "Color Trend & Psychology Expertise",
      "Virtual & In-Person Options Available"
    ],
    pricing: [
      {
        title: "Basic Consultation",
        price: "$150 per session",
        features: [
          "1-hour color consultation",
          "Single room color planning",
          "3 paint color recommendations",
          "Basic lighting assessment", 
          "Color sample recommendations",
          "Written color report"
        ]
      },
      {
        title: "Premium Consultation",
        price: "$275 per session",
        features: [
          "2-hour comprehensive consultation",
          "Multi-room color coordination",
          "Custom color palette creation",
          "Detailed lighting analysis",
          "Sample testing & evaluation",
          "Complete color specification guide"
        ]
      },
      {
        title: "Whole House Design",
        price: "$450 per session",
        features: [
          "Complete home color planning",
          "Interior & exterior coordination", 
          "Room flow & color transitions",
          "Furniture & decor recommendations",
          "Seasonal color considerations",
          "Comprehensive design portfolio"
        ]
      }
    ],
    beforeAfter: [
      {
        before: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "/assets/gallery/work-example.jpeg",
        title: "Expert Color Selection Results"
      },
      {
        before: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Color Consultation Transformation"
      },
      {
        before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        after: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
        title: "Perfect Color Harmony"
      }
    ],
    gradientFrom: "from-yellow-500",
    gradientTo: "to-orange-500",
    accentColor: "yellow-600"
  };

  return <ServicePageLayout {...pageData} />;
}