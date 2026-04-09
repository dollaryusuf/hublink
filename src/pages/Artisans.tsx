import { useState } from "react";
import { Search, Star, MapPin, Briefcase, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import VerifiedBadge from "@/components/shared/VerifiedBadge";

const MOCK_ARTISANS = [
  {
    id: 1,
    name: "Emeka Okafor",
    role: "Professional Plumber",
    location: "Surulere, Lagos",
    rating: 4.9,
    reviews: 124,
    verified: true,
    image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?auto=format&fit=crop&w=400&q=80",
    jobs: 450
  },
  {
    id: 2,
    name: "Bisi Akande",
    role: "Electrician & Solar Expert",
    location: "Ikeja, Lagos",
    rating: 4.7,
    reviews: 89,
    verified: true,
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80",
    jobs: 320
  },
  {
    id: 3,
    name: "Musa Ibrahim",
    role: "Carpenter & Furniture Maker",
    location: "Garki, Abuja",
    rating: 4.5,
    reviews: 56,
    verified: true,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    jobs: 210
  },
  {
    id: 4,
    name: "Chioma Nelson",
    role: "Interior Designer",
    location: "Lekki, Lagos",
    rating: 4.8,
    reviews: 112,
    verified: false,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
    jobs: 180
  }
];

export default function Artisans() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-8">
        {/* Header */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-trust">Artisans</h1>
            <p className="text-neutral-500 font-medium">Hire verified professionals for your home and office repairs.</p>
          </div>
          <Button className="bg-trust hover:bg-trust/90 rounded-xl font-bold shadow-lg shadow-trust/10">Join as Artisan</Button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
          <Input 
            placeholder="Search for 'Electrician', 'Painter', 'AC Repair'..." 
            className="pl-12 h-14 rounded-2xl border-neutral-200 focus:ring-trust shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {MOCK_ARTISANS.map((art) => (
            <Card key={art.id} className="rounded-3xl border-neutral-200 transition-all hover:shadow-lg">
              <CardHeader className="flex flex-row items-center gap-4 p-6">
                <Avatar className="h-16 w-16 border-2 border-blue-100">
                  <AvatarImage src={art.image} alt={art.name} />
                  <AvatarFallback>{art.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <h3 className="text-lg font-bold text-neutral-900">{art.name}</h3>
                    {art.verified && <VerifiedBadge showText={false} />}
                  </div>
                  <p className="text-sm text-neutral-500">{art.role}</p>
                  <div className="mt-1 flex items-center gap-1 text-xs text-neutral-400">
                    <MapPin size={12} /> {art.location}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="px-6 py-0">
                <div className="grid grid-cols-3 gap-4 rounded-2xl bg-neutral-50 p-4">
                  <div className="text-center">
                    <p className="text-xs text-neutral-400">Rating</p>
                    <p className="flex items-center justify-center gap-1 text-sm font-bold text-neutral-900">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" /> {art.rating}
                    </p>
                  </div>
                  <div className="text-center border-x border-neutral-200">
                    <p className="text-xs text-neutral-400">Jobs</p>
                    <p className="text-sm font-bold text-neutral-900">{art.jobs}+</p>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-neutral-400">Reviews</p>
                    <p className="text-sm font-bold text-neutral-900">{art.reviews}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex gap-3 p-6">
                <Button variant="outline" className="flex-1 gap-2 rounded-xl">
                  <MessageSquare size={18} /> Chat
                </Button>
                <Button className="flex-1 gap-2 rounded-xl bg-blue-600 hover:bg-blue-700">
                  <Briefcase size={18} /> Hire Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
