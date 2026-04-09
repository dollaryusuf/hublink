import { useState } from "react";
import { Search, MapPin, Filter, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import VerifiedBadge from "@/components/shared/VerifiedBadge";

const MOCK_PROPERTIES = [
  {
    id: 1,
    title: "Modern 3 Bedroom Apartment",
    location: "Lekki Phase 1, Lagos",
    price: "₦4,500,000/year",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=800&q=80",
    verified: true,
    rating: 4.8
  },
  {
    id: 2,
    title: "Prime Office Space",
    location: "Victoria Island, Lagos",
    price: "₦120,000/sqm",
    type: "Commercial",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80",
    verified: true,
    rating: 4.5
  },
  {
    id: 3,
    title: "Self-Contain Studio",
    location: "Yaba, Lagos",
    price: "₦600,000/year",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=800&q=80",
    verified: false,
    rating: 4.2
  },
  {
    id: 4,
    title: "Luxury Duplex with Pool",
    location: "Maitama, Abuja",
    price: "₦15,000,000/year",
    type: "Residential",
    image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    verified: true,
    rating: 4.9
  }
];

export default function Properties() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-trust">Properties</h1>
            <p className="text-neutral-500 font-medium">Find verified houses and shops across Nigeria.</p>
          </div>
          <div className="flex gap-3">
            <Button variant="outline" className="flex gap-2 rounded-xl border-neutral-200 font-bold text-neutral-600">
              <Filter size={18} /> Filters
            </Button>
            <Button className="bg-trust hover:bg-trust/90 rounded-xl font-bold shadow-lg shadow-trust/10">List Property</Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <Input 
            placeholder="Search by location, type, or price..." 
            className="pl-12 h-14 rounded-2xl border-neutral-200 focus:ring-trust shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Categories */}
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex w-max space-x-4 pb-4">
            {["All", "Apartments", "Houses", "Shops", "Offices", "Land", "Shortlet"].map((cat) => (
              <Button key={cat} variant="secondary" className="rounded-full px-6">
                {cat}
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {MOCK_PROPERTIES.map((prop) => (
            <Card key={prop.id} className="overflow-hidden rounded-3xl border-neutral-200 transition-all hover:shadow-lg">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={prop.image}
                  alt={prop.title}
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {prop.verified && (
                  <VerifiedBadge className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm shadow-sm" />
                )}
                <div className="absolute top-4 right-4 rounded-full bg-white/90 px-2 py-1 text-xs font-bold text-neutral-900 backdrop-blur-sm shadow-sm">
                  <Star className="mr-1 inline h-3 w-3 fill-yellow-400 text-yellow-400" /> {prop.rating}
                </div>
              </div>
              <CardHeader className="p-4 pb-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-blue-600">{prop.type}</span>
                </div>
                <h3 className="text-lg font-bold text-neutral-900 line-clamp-1">{prop.title}</h3>
              </CardHeader>
              <CardContent className="px-4 py-0">
                <div className="flex items-center gap-1 text-sm text-neutral-500">
                  <MapPin size={14} /> {prop.location}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between p-4 pt-4">
                <span className="text-lg font-bold text-neutral-900">{prop.price}</span>
                <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 hover:bg-blue-50">
                  View Details
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
