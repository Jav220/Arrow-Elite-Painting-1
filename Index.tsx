import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Phone, MapPin, Star, Shield, Award, CheckCircle, ArrowRight, Paintbrush, Home, Building } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    serviceType: '',
    timeline: '',
    details: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! We\'ll contact you within 24 hours to schedule your free estimate.');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Paintbrush className="h-8 w-8 text-blue-600" />
                <h1 className="text-2xl font-bold text-blue-900">Arrow Elite Painting</h1>
              </div>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800 hidden sm:inline-flex">
                Broken Arrow & Tulsa's Trusted Painters
              </Badge>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/broken-arrow-painting" className="text-gray-700 hover:text-blue-600 font-medium">
                Broken Arrow
              </Link>
              <Link to="/interior-painting" className="text-gray-700 hover:text-blue-600">
                Interior
              </Link>
              <Link to="/exterior-painting" className="text-gray-700 hover:text-blue-600">
                Exterior
              </Link>
              <Link to="/cabinet-refinishing" className="text-gray-700 hover:text-blue-600">
                Cabinets
              </Link>
              <div className="flex items-center space-x-4">
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
            </nav>

            <div className="md:hidden flex items-center space-x-2">
              <a href="tel:+19188103453" className="text-blue-600">
                <Phone className="w-5 h-5" />
              </a>
              <Button size="sm" asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#estimate-form">Quote</a>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800 px-4 py-2">
              <Paintbrush className="h-4 w-4 mr-2" />
              Licensed & Insured Oklahoma Painters
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-blue-900 mb-6 leading-tight">
              Arrow Elite Painting<br />
              <span className="text-blue-600">Broken Arrow & Tulsa's</span><br />
              Premier Painting Contractors
            </h1>
            
            <p className="text-xl lg:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
              Licensed painting contractors proudly serving Broken Arrow, Tulsa, and surrounding Oklahoma communities. 
              From interior transformations to exterior protection, we deliver elite results with a 3-year warranty.
            </p>
            
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge className="bg-green-100 text-green-800 px-3 py-2">
                <Shield className="h-4 w-4 mr-2" />
                Licensed & Insured
              </Badge>
              <Badge className="bg-yellow-100 text-yellow-800 px-3 py-2">
                <Award className="h-4 w-4 mr-2" />
                BBB Accredited
              </Badge>
              <Badge className="bg-purple-100 text-purple-800 px-3 py-2">
                <Star className="h-4 w-4 mr-2" />
                5-Star Reviews
              </Badge>
              <Badge className="bg-blue-100 text-blue-800 px-3 py-2">
                <CheckCircle className="h-4 w-4 mr-2" />
                3-Year Warranty
              </Badge>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-4" asChild>
                <a href="#estimate-form">Get Free Estimate Today</a>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-4" asChild>
                <a href="tel:+19188103453">Call (918) 810-3453</a>
              </Button>
            </div>

            <div className="flex items-center justify-center text-gray-600">
              <MapPin className="h-5 w-5 mr-2" />
              <span>Serving Broken Arrow, Tulsa, Bixby, Jenks, Owasso & surrounding Oklahoma areas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Serving Oklahoma's Premier Communities
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 border-blue-200 shadow-lg bg-blue-50">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-blue-900">Broken Arrow Painting</CardTitle>
                <CardDescription className="text-blue-700">
                  Our home base - where Arrow Elite began serving Oklahoma families
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link to="/broken-arrow-painting">View Broken Arrow Services</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Tulsa Metro Painting</CardTitle>
                <CardDescription className="text-gray-600">
                  Expanding our elite services throughout the Tulsa metropolitan area
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="#estimate-form">Schedule Tulsa Estimate</a>
                </Button>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-gray-900">Surrounding Cities</CardTitle>
                <CardDescription className="text-gray-600">
                  Quality painting services throughout the greater Oklahoma region
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <a href="#estimate-form">Schedule Area Estimate</a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Complete Painting Solutions for Oklahoma
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Interior Painting</CardTitle>
                <CardDescription>
                  Transform your Broken Arrow or Tulsa home's interior with premium paints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/interior-painting">Learn More <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Exterior Painting</CardTitle>
                <CardDescription>
                  Protect your Oklahoma home's exterior with weather-resistant paints.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/exterior-painting">Learn More <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Cabinet Refinishing</CardTitle>
                <CardDescription>
                  Update your kitchen with professional cabinet refinishing services.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/cabinet-refinishing">Learn More <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-blue-900">Deck Staining</CardTitle>
                <CardDescription>
                  Protect your outdoor spaces from Oklahoma weather.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/deck-staining">Learn More <ArrowRight className="h-4 w-4 ml-2" /></Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Estimate Form */}
      <section id="estimate-form" className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Your Free Estimate Today
            </h2>
            <p className="text-xl text-gray-600">
              Ready to transform your home? Get a no-obligation estimate from Oklahoma's trusted painting professionals.
            </p>
          </div>

          <Card className="p-8 shadow-xl">
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
                    placeholder="Broken Arrow, Tulsa, etc."
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
                  <Label htmlFor="timeline">Project Timeline</Label>
                  <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="When do you want to start?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP</SelectItem>
                      <SelectItem value="within-month">Within 1 Month</SelectItem>
                      <SelectItem value="1-3-months">1-3 Months</SelectItem>
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
                  placeholder="Tell us about your painting project..."
                  rows={4}
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-4">
                Get My Free Estimate - Arrow Elite Painting
              </Button>
            </form>
          </Card>

          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              Prefer to call? 
              <a href="tel:+19188103453" className="font-semibold text-blue-600 hover:text-blue-800 ml-1">
                (918) 810-3453
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Arrow Elite Painting</h3>
              <p className="text-gray-300 mb-4">
                Broken Arrow and Tulsa's premier painting contractors.
              </p>
              <div className="flex items-center space-x-2 text-gray-300">
                <Phone className="h-5 w-5" />
                <span>(918) 810-3453</span>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/interior-painting" className="hover:text-white">Interior Painting</Link></li>
                <li><Link to="/exterior-painting" className="hover:text-white">Exterior Painting</Link></li>
                <li><Link to="/cabinet-refinishing" className="hover:text-white">Cabinet Refinishing</Link></li>
                <li><Link to="/deck-staining" className="hover:text-white">Deck Staining</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Service Areas</h4>
              <ul className="space-y-2 text-gray-300">
                <li><Link to="/broken-arrow-painting" className="hover:text-white">Broken Arrow, OK</Link></li>
                <li>Tulsa, OK</li>
                <li>Bixby, OK</li>
                <li>Jenks, OK</li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">About Us</h4>
              <ul className="space-y-2 text-gray-300">
                <li>Licensed & Insured</li>
                <li>3-Year Warranty</li>
                <li>Free Estimates</li>
                <li>Local Oklahoma Experts</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400 text-sm">
              © 2024 Arrow Elite Painting LLC. Licensed Oklahoma Painting Contractor.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}