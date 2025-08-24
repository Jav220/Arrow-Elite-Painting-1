import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MapPin, Star, Shield, Award, CheckCircle, Paintbrush, Home, Building } from 'lucide-react';

export default function TulsaPainting() {
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
    alert('Thank you! We\'ll contact you within 24 hours to schedule your free Tulsa painting estimate.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Schema Markup for Tulsa Local SEO */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Arrow Elite Painting",
          "image": "/images/logo.jpg",
          "telephone": "(918) 810-3453",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Tulsa",
            "addressRegion": "OK",
            "addressCountry": "US"
          },
          "areaServed": {
            "@type": "City",
            "name": "Tulsa",
            "containedInPlace": "Oklahoma"
          },
          "openingHours": "Mo-Fr 07:00-18:00, Sa 08:00-16:00",
          "priceRange": "$$",
          "description": "Professional painting contractors serving Tulsa, Oklahoma with interior, exterior, cabinet refinishing and deck staining services."
        })
      }} />

      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <h1 className="text-2xl font-bold text-blue-900">Arrow Elite Painting</h1>
              <Badge variant="secondary" className="bg-green-100 text-green-800">Tulsa Metro</Badge>
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
      <section className="bg-gradient-to-br from-green-50 to-blue-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-blue-900 mb-6">
              Professional Painting Contractors<br />
              <span className="text-green-600">Serving Tulsa, Oklahoma</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              From our base in Broken Arrow, we proudly serve the greater Tulsa metro area with premium painting services. 
              Licensed and insured contractors bringing elite results to Tulsa homes and businesses.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Badge className="bg-green-100 text-green-800 px-4 py-2 text-base">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-4 py-2 text-base">
                <Award className="h-4 w-4 mr-2" />
                BBB Accredited
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-4 py-2 text-base">
                <Star className="h-4 w-4 mr-2" />
                5-Star Tulsa Reviews
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3" asChild>
                <a href="#estimate-form">Get Free Tulsa Estimate</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3" asChild>
                <a href="tel:+19188103453">Call (918) 810-3453</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Tulsa Areas Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving All Tulsa Metro Areas
            </h2>
            <p className="text-xl text-gray-600">
              Premium painting services throughout the greater Tulsa metropolitan area
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <Building className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Downtown Tulsa</h3>
                <p className="text-sm text-gray-600">Historic buildings and modern condos</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Home className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">Midtown Tulsa</h3>
                <p className="text-sm text-gray-600">Established neighborhoods and businesses</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <Paintbrush className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">South Tulsa</h3>
                <p className="text-sm text-gray-600">Upscale homes and Brookside area</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-gray-900 mb-2">East Tulsa</h3>
                <p className="text-sm text-gray-600">Cherry Street and surrounding areas</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Painting Services for Tulsa Properties
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-900">Interior Painting Tulsa</CardTitle>
                <CardDescription>
                  Transform your Tulsa home or business interior with professional painting services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Residential interior painting</li>
                  <li>• Commercial office painting</li>
                  <li>• Color consultation</li>
                  <li>• Specialty finishes</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-900">Exterior Painting Tulsa</CardTitle>
                <CardDescription>
                  Protect your Tulsa property with weather-resistant exterior painting services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• House exterior painting</li>
                  <li>• Commercial building painting</li>
                  <li>• Pressure washing preparation</li>
                  <li>• Weather protection coatings</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-900">Cabinet Refinishing Tulsa</CardTitle>
                <CardDescription>
                  Update your Tulsa kitchen or bathroom with professional cabinet refinishing.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Kitchen cabinet painting</li>
                  <li>• Bathroom vanities</li>
                  <li>• Custom color matching</li>
                  <li>• Hardware updates</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-green-900">Commercial Painting Tulsa</CardTitle>
                <CardDescription>
                  Professional commercial painting services for Tulsa businesses and offices.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Office building painting</li>
                  <li>• Retail space painting</li>
                  <li>• Warehouse painting</li>
                  <li>• Industrial coatings</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estimate Form Section */}
      <section id="estimate-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Tulsa Painting Estimate
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your Tulsa property? Get a detailed, no-obligation estimate from our professional team.
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
                  <Label htmlFor="address">Property Address</Label>
                  <Input
                    id="address"
                    value={formData.address}
                    onChange={(e) => handleInputChange('address', e.target.value)}
                    placeholder="Tulsa, OK"
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
                      <SelectItem value="commercial">Commercial Painting</SelectItem>
                      <SelectItem value="multiple">Multiple Services</SelectItem>
                    </SelectContent>
                  </Select>
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
              </div>

              <div>
                <Label htmlFor="details">Project Details</Label>
                <Textarea
                  id="details"
                  value={formData.details}
                  onChange={(e) => handleInputChange('details', e.target.value)}
                  placeholder="Tell us about your Tulsa painting project..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                Get My Free Tulsa Estimate
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600">
              Or call us directly: 
              <a href="tel:+19188103453" className="font-semibold text-green-600 hover:text-green-800 ml-1">
                (918) 810-3453
              </a>
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
                Professional painting contractors serving Tulsa and the greater Oklahoma metro area.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>(918) 810-3453</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Interior Painting Tulsa</li>
                <li>Exterior Painting Tulsa</li>
                <li>Cabinet Refinishing Tulsa</li>
                <li>Commercial Painting Tulsa</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Tulsa, OK</li>
                <li>Broken Arrow, OK</li>
                <li>Bixby, OK</li>
                <li>Jenks, OK</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Arrow Elite Painting. Licensed Oklahoma Painting Contractor serving Tulsa and surrounding areas.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}