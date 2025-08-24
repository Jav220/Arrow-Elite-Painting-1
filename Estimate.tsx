import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Phone, Mail, MapPin, ArrowLeft, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function EstimatePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    projectType: "",
    description: "",
    contactMethod: "email",
    timeline: "",
    zipCode: ""
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.projectType) {
      setError("Please fill in all required fields.");
      setIsSubmitting(false);
      return;
    }

    try {
      // Create email content
      const emailContent = `
New Estimate Request from Arrow Elite Painting Website

Customer Information:
- Name: ${formData.name}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Address: ${formData.address}
- Zip Code: ${formData.zipCode}

Project Details:
- Project Type: ${formData.projectType}
- Description: ${formData.description}
- Timeline: ${formData.timeline}
- Preferred Contact Method: ${formData.contactMethod}

Submitted on: ${new Date().toLocaleString()}
      `;

      // For now, we'll simulate the email sending
      // In a real app, you'd send this to your backend API
      console.log("Email would be sent to:", "javi@arowelitepainting.com, Marco@arrowelitepainting.com");
      console.log("Email content:", emailContent);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setSubmitted(true);
    } catch (err) {
      setError("There was an error submitting your request. Please try again or call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        {/* Header */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <Link to="/" className="flex items-center space-x-2">
                <ArrowLeft className="h-5 w-5 text-blue-600" />
                <span className="font-bold text-lg sm:text-xl md:text-2xl text-blue-900">Arrow Elite Painting</span>
              </Link>
              <div className="flex items-center space-x-4">
                <a href="tel:9188103453" className="flex items-center space-x-1 text-lg font-bold text-blue-600 hover:text-blue-800">
                  <Phone className="h-5 w-5" />
                  <span className="hidden sm:inline">(918) 810-3453</span>
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Success Message */}
        <div className="flex items-center justify-center min-h-[80vh] px-4">
          <Card className="w-full max-w-md text-center">
            <CardContent className="pt-8 pb-8">
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Request Submitted Successfully!</h2>
              <p className="text-gray-600 mb-6">
                Thank you for your interest in Arrow Elite Painting. We've received your estimate request and will contact you within 24 hours.
              </p>
              <div className="space-y-3 mb-6">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span>Confirmation sent to {formData.email}</span>
                </div>
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span>We'll call you at {formData.phone}</span>
                </div>
              </div>
              <Link to="/">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Return to Homepage
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="h-5 w-5 text-blue-600" />
              <span className="font-bold text-lg sm:text-xl md:text-2xl text-blue-900">Arrow Elite Painting</span>
            </Link>
            <div className="flex items-center space-x-4">
              <a href="tel:9188103453" className="flex items-center space-x-1 text-lg font-bold text-blue-600 hover:text-blue-800">
                <Phone className="h-5 w-5" />
                <span className="hidden sm:inline">(918) 810-3453</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get Your Free Painting Estimate</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ready to transform your home? Fill out the form below and we'll provide you with a detailed, 
            no-obligation estimate within 24 hours.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact Info Sidebar */}
          <div className="md:col-span-1">
            <div className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Get Your Free Estimate Now!</h3>
              
              {/* Prominent Phone Number */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm border-2 border-orange-200">
                <div className="text-center">
                  <p className="text-sm text-gray-600 mb-2">Call for Immediate Service</p>
                  <a href="tel:9188103453" className="block">
                    <div className="text-2xl font-bold text-orange-600 hover:text-orange-700 transition-colors">
                      (918) 810-3453
                    </div>
                  </a>
                  <p className="text-xs text-gray-500 mt-1">Available 7 Days a Week</p>
                </div>
              </div>

              {/* Email Contacts */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <h4 className="font-semibold text-gray-900 mb-3 text-center">Email Our Team</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <a href="mailto:javi@arowelitepainting.com" className="text-blue-600 font-medium hover:text-blue-700 text-sm">
                      javi@arowelitepainting.com
                    </a>
                  </div>
                  <div className="flex items-center justify-center">
                    <Mail className="w-4 h-4 text-blue-600 mr-2" />
                    <a href="mailto:Marco@arrowelitepainting.com" className="text-blue-600 font-medium hover:text-blue-700 text-sm">
                      Marco@arrowelitepainting.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white rounded-lg p-4 mb-4 shadow-sm">
                <div className="flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-blue-600 mr-3" />
                  <div className="text-center">
                    <p className="text-sm text-gray-600">Service Area</p>
                    <p className="text-gray-900 font-medium">Tulsa & Surrounding Areas</p>
                  </div>
                </div>
              </div>
              
              {/* Call Now Button */}
              <div className="mt-6">
                <a href="tel:9188103453">
                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-lg py-4 shadow-lg transform hover:scale-105 transition-all duration-200">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now: (918) 810-3453
                  </Button>
                </a>
                <p className="text-center text-xs text-gray-500 mt-2">
                  Fast Response • Free Estimates • Licensed & Insured
                </p>
              </div>
            </div>
          </div>

          {/* Estimate Form */}
          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Estimate Request Form</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible to help us prepare an accurate estimate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) => handleInputChange("name", e.target.value)}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="(918) 555-0123"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>

                  {/* Property Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="address">Property Address</Label>
                      <Input
                        id="address"
                        type="text"
                        value={formData.address}
                        onChange={(e) => handleInputChange("address", e.target.value)}
                        placeholder="Street address"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="zipCode">Zip Code</Label>
                      <Input
                        id="zipCode"
                        type="text"
                        value={formData.zipCode}
                        onChange={(e) => handleInputChange("zipCode", e.target.value)}
                        placeholder="74101"
                      />
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-2">
                    <Label htmlFor="projectType">Project Type *</Label>
                    <Select value={formData.projectType} onValueChange={(value) => handleInputChange("projectType", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select the type of project" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="interior">Interior Painting</SelectItem>
                        <SelectItem value="exterior">Exterior Painting</SelectItem>
                        <SelectItem value="kitchen">Kitchen Renovation</SelectItem>
                        <SelectItem value="stain">Stain Works</SelectItem>
                        <SelectItem value="multiple">Multiple Services</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="description">Project Description</Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange("description", e.target.value)}
                      placeholder="Please describe your project in detail (rooms, square footage, specific requirements, etc.)"
                      rows={4}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="timeline">Preferred Timeline</Label>
                    <Select value={formData.timeline} onValueChange={(value) => handleInputChange("timeline", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="When would you like to start?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="asap">As soon as possible</SelectItem>
                        <SelectItem value="1-2weeks">Within 1-2 weeks</SelectItem>
                        <SelectItem value="1month">Within 1 month</SelectItem>
                        <SelectItem value="2-3months">2-3 months</SelectItem>
                        <SelectItem value="flexible">I'm flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Contact Preference */}
                  <div className="space-y-3">
                    <Label>Preferred Contact Method</Label>
                    <RadioGroup
                      value={formData.contactMethod}
                      onValueChange={(value) => handleInputChange("contactMethod", value)}
                      className="flex flex-col space-y-2"
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="email" id="email-contact" />
                        <Label htmlFor="email-contact">Email</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="phone" id="phone-contact" />
                        <Label htmlFor="phone-contact">Phone Call</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="text" id="text-contact" />
                        <Label htmlFor="text-contact">Text Message</Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                      <p className="text-red-600 text-sm">{error}</p>
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    By submitting this form, you agree to be contacted by Arrow Elite Painting regarding your project.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}