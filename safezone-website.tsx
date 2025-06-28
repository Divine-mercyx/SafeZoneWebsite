"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Users, MapPin, Clock, Eye } from "lucide-react"

export default function SafeZoneWebsite() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-100 px-4 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-600">SafeZone</div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#how" className="text-gray-600 hover:text-gray-900">
              How it Works
            </a>
            <a href="#report" className="text-gray-600 hover:text-gray-900">
              Live Reports
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Community
            </a>
          </nav>
          <a href="http://localhost:5173/" className="bg-blue-600 p-2 text-white rounded text-decoration-none hover:bg-blue-700">Create a Report</a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-4 py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-8 text-sm text-gray-600">
            <Shield className="w-4 h-4 mr-2" />
            Trusted by communities worldwide
          </div>

          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-blue-600">Report.</span>
            <span className="text-orange-500">Verify.</span>
            <span className="text-gray-900"> Stay Safe.</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Empower your community with decentralized reporting. Share incidents, verify information, and keep everyone
            informed through transparent, community-driven safety alerts.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/*<Button size="lg" className="bg-blue-600 hover:bg-blue-700 px-8">*/}
            {/*  <Shield className="w-5 h-5 mr-2" />*/}
            {/*  Create a Report*/}
            {/*</Button>*/}
            <a href="http://localhost:5173/" className="bg-blue-600 flex flex-col sm:flex-row gap-2 justify-center p-2 text-white rounded text-decoration-none hover:bg-blue-700">
              <Shield className="w-5 h-5 mr-2" />
              Create a Report
            </a>
            <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 px-8">
              <Eye className="w-5 h-5 mr-2" />
              See Reports
            </Button>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-blue-600 mb-2">1,247</div>
              <div className="text-gray-600">Active Reports</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-orange-500 mb-2">89%</div>
              <div className="text-gray-600">Verified Reports</div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border">
              <div className="text-4xl font-bold text-gray-900 mb-2">156</div>
              <div className="text-gray-600">Communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="px-4 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It <span className="text-blue-600">Works</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our decentralized platform empowers communities to share, verify, and respond to safety incidents
              together.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Decentralized Reporting</h3>
                <p className="text-gray-600">
                  No single point of failure. Reports are distributed across the network, ensuring transparency and
                  reliability.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold mb-4">Community Verification</h3>
                <p className="text-gray-600">
                  Community members verify reports through democratic consensus, ensuring accuracy and preventing
                  misinformation.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 border-0 shadow-sm">
              <CardContent className="pt-6">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-gray-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Location-Based Alerts</h3>
                <p className="text-gray-600">
                  Get real-time safety alerts for your area. Stay informed about incidents that matter to your
                  community.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Reports */}
      <section id="report" className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Recent <span className="text-orange-500">Reports</span>
            </h2>
            <p className="text-xl text-gray-600">
              Stay updated with the latest community reports and safety alerts in your area verified.
            </p>
          </div>

          <div className="space-y-4">
            <Card className="p-6 border shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
                    <Badge variant="outline" className="text-gray-600">
                      Traffic
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Road Closure on Main Street</h3>
                  <div className="flex items-center text-sm text-gray-600 gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Soho, Yaba
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      12 reporters
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />7 hours ago
                </div>
              </div>
            </Card>

            <Card className="p-6 border shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Verified</Badge>
                    <Badge variant="outline" className="text-gray-600">
                      Event
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Community Event Safety Update</h3>
                  <div className="flex items-center text-sm text-gray-600 gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Ikeja, Lagos
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />8 reporters
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />5 hours ago
                </div>
              </div>
            </Card>

            <Card className="p-6 border shadow-sm">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-100">Pending</Badge>
                    <Badge variant="outline" className="text-gray-600">
                      Weather
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-1">Community Event Safety Update</h3>
                  <div className="flex items-center text-sm text-gray-600 gap-4">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      Lekki, Phase 1
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />7 reporters
                    </span>
                  </div>
                </div>
                <div className="text-sm text-gray-500 flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  10 hours ago
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">SafeZone</div>
              <p className="text-gray-400 mb-4">
                Building safer communities through decentralized reporting and community verification.
              </p>
              <p className="text-sm text-gray-500">© 2024 SafeReport. Empowering communities worldwide.</p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Create Report
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    View Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Verify Reports
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Community Guidelines
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
