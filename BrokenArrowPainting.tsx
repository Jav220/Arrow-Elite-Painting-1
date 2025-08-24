import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MapPin, Clock, Star, Shield, Award, CheckCircle } from 'lucide-react';

export default function BrokenArrowPainting() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    projectSize: '',
    timeline: '',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
    alert('Thank you! We\'ll contact you within 24 hours to schedule your free Broken Arrow painting estimate.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for Local SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Arrow Elite Painting",
          "image": "/images/Logo.jpg",
          "telephone": "(918) 810-3453",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Broken Arrow",
            "addressRegion": "OK",
            "addressCountry": "US"
          },
          "areaServed": [
            {
              "@type": "City",
              "name": "Broken Arrow",
              "containedInPlace": "Oklahoma"
            }
          ],
          "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
          "priceRange": "$$",
          "description": "Broken Arrow's premier painting contractors providing interior, exterior, cabinet refinishing and deck staining services.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Painting Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Interior Painting Broken Arrow",
                  "description": "Professional interior painting services in Broken Arrow, Oklahoma"
                }
              },
              {
                "@type": "Offer", 
                "itemOffered": {
                  "@type": "Service",
                  "name": "Exterior Painting Broken Arrow",
                  "description": "Expert exterior painting services for Broken Arrow homes and businesses"
                }
              }
            ]
          }
        })
      }} />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-blue-900">Arrow Elite Painting</h1>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Broken Arrow Local</Badge>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 text-blue-900">
                <Phone className="h-5 w-5" />
                <a href="tel:+19188103453" className="font-semibold hover:text-blue-600">
                  (918) 810-3453
                </a>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#estimate-form">Free Estimate</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Broken Arrow's Premier Painting Contractors
            </h1>
            <p className="text-xl md:text-2xl text-blue-700 mb-8 max-w-4xl mx-auto">
              Proudly serving Broken Arrow, Oklahoma with elite painting services. From the Rose District to Arrow Springs, 
              we're your trusted local painting professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 px-4 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2">
                <Award className="h-4 w-4 mr-2" />
                BBB Accredited
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2">
                <Star className="h-4 w-4 mr-2" />
                5-Star Reviews
              </Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" asChild>
                <a href="#estimate-form">Get Free Broken Arrow Estimate</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <a href="tel:+19188103453">Call (918) 810-3453</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Local Connection Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Deep Roots in Broken Arrow
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Arrow Elite Painting isn't just our name – it's our connection to the community we love. 
                Based right here in Broken Arrow, we understand the unique character of our neighborhoods, 
                from the historic charm of downtown to the modern elegance of newer developments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Oklahoma Weather Expertise</h3>
                    <p className="text-gray-600">We know how Oklahoma's extreme weather affects your paint, and we choose products that last.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Local Architecture Knowledge</h3>
                    <p className="text-gray-600">From craftsman homes to modern builds, we understand Broken Arrow's diverse architectural styles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Community Involvement</h3>
                    <p className="text-gray-600">Proud supporters of Broken Arrow schools, local businesses, and community events.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Serving All of Broken Arrow</h3>
              <div className="grid grid-cols-2 gap-4 text-gray-700">
                <div>
                  <h4 className="font-semibold mb-2">Historic Areas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Rose District</li>
                    <li>• Downtown Broken Arrow</li>
                    <li>• Central Park</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Neighborhoods:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Arrow Springs</li>
                    <li>• Arrowhead</li>
                    <li>• Indian Springs</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">New Developments:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Tiger Ridge</li>
                    <li>• Stonebrook</li>
                    <li>• Aspen Creek</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">South Areas:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Forest Ridge</li>
                    <li>• Willows</li>
                    <li>• Nienhuis Park Area</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Painting Services for Broken Arrow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From interior transformations to exterior protection, we provide comprehensive painting solutions 
              designed for Oklahoma's climate and Broken Arrow's unique home styles.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Interior Painting Broken Arrow</CardTitle>
                <CardDescription>
                  Transform your Broken Arrow home's interior with premium paints perfect for Oklahoma's indoor climate.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Living rooms & bedrooms</li>
                  <li>• Kitchens & bathrooms</li>
                  <li>• Accent walls & color consultation</li>
                  <li>• Texture repair & preparation</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Exterior Painting Broken Arrow</CardTitle>
                <CardDescription>
                  Protect and beautify your home's exterior with weather-resistant paints designed for Oklahoma conditions.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Siding & trim painting</li>
                  <li>• Storm damage repair</li>
                  <li>• Pressure washing prep</li>
                  <li>• Weather-resistant coatings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Cabinet Refinishing Broken Arrow</CardTitle>
                <CardDescription>
                  Update your kitchen with professional cabinet refinishing, popular in Broken Arrow's established neighborhoods.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kitchen cabinet painting</li>
                  <li>• Bathroom vanity updates</li>
                  <li>• Hardware installation</li>
                  <li>• Custom color matching</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Deck Staining Broken Arrow</CardTitle>
                <CardDescription>
                  Protect your outdoor living spaces from Oklahoma weather with professional deck staining and sealing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Deck cleaning & prep</li>
                  <li>• Staining & sealing</li>
                  <li>• Fence staining</li>
                  <li>• Weather protection</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local Projects Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Recent Broken Arrow Projects
            </h2>
            <p className="text-xl text-gray-600">
              See the transformation we've brought to homes across Broken Arrow neighborhoods
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="/assets/gallery/exterior-project-1.png" 
                  alt="Exterior painting project in Rose District, Broken Arrow"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Rose District Craftsman</h3>
                <p className="text-gray-600 text-sm">Complete exterior transformation in historic downtown area</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="/assets/gallery/exterior-project-2.png" 
                  alt="Interior painting project in Arrow Springs, Broken Arrow"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Arrow Springs Modern</h3>
                <p className="text-gray-600 text-sm">Contemporary interior update with custom color palette</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-64 bg-gray-200 relative">
                <img 
                  src="/assets/gallery/luxury-interior-excellence-new.png" 
                  alt="Cabinet refinishing project in Indian Springs, Broken Arrow"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-gray-900">Indian Springs Kitchen</h3>
                <p className="text-gray-600 text-sm">Kitchen cabinet refinishing with modern hardware</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Broken Arrow Homeowners Choose Arrow Elite
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Expertise</h3>
              <p className="text-gray-600">
                Born and raised in Broken Arrow, we understand your neighborhood's unique character and needs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Licensed & Insured</h3>
              <p className="text-gray-600">
                Fully licensed Oklahoma contractor with comprehensive insurance for your peace of mind.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Response</h3>
              <p className="text-gray-600">
                We respond to Broken Arrow estimates within 24 hours and respect your schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section id="estimate-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Broken Arrow Painting Estimate
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your home? Get a detailed, no-obligation estimate from Broken Arrow's trusted painting professionals.
            </p>
          </div>

          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    placeholder="(918) 555-0123"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="address">Property Address/City</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Broken Arrow, OK"
                    required
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <Label htmlFor="serviceType">Service Needed</Label>
                  <Select value={formData.serviceType} onValueChange={(value) => handleInputChange('serviceType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="interior">Interior Painting</SelectItem>
                      <SelectItem value="exterior">Exterior Painting</SelectItem>
                      <SelectItem value="cabinet">Cabinet Refinishing</SelectItem>
                      <SelectItem value="deck">Deck Staining</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="projectSize">Project Size</Label>
                  <Select value={formData.projectSize} onValueChange={(value) => handleInputChange('projectSize', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select project size" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="single-room">Single Room</SelectItem>
                      <SelectItem value="multiple-rooms">Multiple Rooms</SelectItem>
                      <SelectItem value="whole-house-interior">Whole House Interior</SelectItem>
                      <SelectItem value="whole-house-exterior">Whole House Exterior</SelectItem>
                      <SelectItem value="commercial">Commercial Property</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="timeline">Project Timeline</Label>
                <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="When do you want to start?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asap">ASAP</SelectItem>
                    <SelectItem value="within-month">Within 1 Month</SelectItem>
                    <SelectItem value="1-3-months">1-3 Months</SelectItem>
                    <SelectItem value="3-6-months">3-6 Months</SelectItem>
                    <SelectItem value="planning">Just Planning</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  placeholder="Tell us about your painting project..."
                  rows={4}
                />
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="flex items-start space-x-3">
                  <Shield className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-blue-900">Your Estimate Includes:</h3>
                    <ul className="text-blue-700 text-sm mt-2 space-y-1">
                      <li>• Free in-home consultation</li>
                      <li>• Detailed written estimate</li>
                      <li>• Color consultation & recommendations</li>
                      <li>• No obligation - completely free</li>
                    </ul>
                  </div>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                Get My Free Broken Arrow Estimate
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Or call us directly: 
              <a href="tel:+19188103453" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
                (918) 810-3453
              </a>
            </p>
            <p className="text-sm text-gray-500 mt-2">
              We respond to all Broken Arrow estimate requests within 24 hours
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Arrow Elite Painting</h3>
              <p className="text-gray-300 mb-4">
                Broken Arrow's premier painting contractors, proudly serving our community with elite painting services.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>(918) 810-3453</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Interior Painting Broken Arrow</li>
                <li>Exterior Painting Broken Arrow</li>
                <li>Cabinet Refinishing Broken Arrow</li>
                <li>Deck Staining Broken Arrow</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Broken Arrow, OK</li>
                <li>Tulsa, OK</li>
                <li>Bixby, OK</li>
                <li>Jenks, OK</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arrow Elite Painting. Licensed Oklahoma Painting Contractor serving Broken Arrow and surrounding areas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}