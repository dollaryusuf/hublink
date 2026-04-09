import { motion } from "motion/react";
import { Search, ShieldCheck, Zap, ArrowRight, Home as HomeIcon, Users } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white pt-16 pb-24 sm:pt-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:mx-auto md:max-w-2xl lg:col-span-6 lg:text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                  Now live in Lagos, Abuja & PH
                </span>
                <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-trust sm:text-5xl md:text-6xl lg:text-7xl">
                  The Trusted Hub for <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">Nigerian</span> Spaces & Skills.
                </h1>
                <p className="mt-8 text-lg text-neutral-500 leading-relaxed md:text-xl">
                  Find your next home or shop, and connect with NIN-verified artisans. 
                  Secure escrow payments and verified listings for peace of mind.
                </p>
                <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  <div className="relative flex-grow max-w-md">
                    <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-neutral-400" />
                    <Input 
                      placeholder="Search for 'Plumber' or '2 Bedroom Flat'..." 
                      className="pl-12 h-14 rounded-2xl border-neutral-200 focus:ring-trust shadow-sm"
                    />
                  </div>
                  <Button className="h-14 px-10 rounded-2xl bg-trust hover:bg-trust/90 text-lg font-semibold shadow-lg shadow-trust/20 transition-all hover:scale-[1.02]">
                    Search
                  </Button>
                </div>
              </motion.div>
            </div>
            <div className="relative mt-16 sm:mx-auto sm:max-w-lg lg:col-span-6 lg:mx-0 lg:mt-0 lg:flex lg:items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative mx-auto w-full"
              >
                <div className="relative overflow-hidden rounded-[2.5rem] bg-neutral-100 p-2 shadow-2xl ring-1 ring-neutral-200/50">
                  <img
                    src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80"
                    alt="Modern Nigerian Luxury Property"
                    className="rounded-[2rem] object-cover shadow-inner aspect-[4/3]"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating NIN Card with Glassmorphism */}
                <motion.div 
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 rounded-3xl bg-white/60 p-6 shadow-2xl backdrop-blur-2xl ring-1 ring-white/50 md:-left-12"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-[0_0_20px_rgba(37,99,235,0.3)]">
                      <ShieldCheck size={28} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-trust">NIN Verified</p>
                      <p className="text-xs text-neutral-500 font-medium">10,000+ Professionals</p>
                    </div>
                  </div>
                </motion.div>
                
                {/* Secondary Floating Element */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -top-6 -right-6 rounded-2xl bg-trust p-4 shadow-xl text-white"
                >
                  <div className="flex items-center gap-2">
                    <Zap size={20} className="text-yellow-400" />
                    <span className="text-sm font-bold">Escrow Protected</span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-extrabold tracking-tight text-trust sm:text-5xl">
              Why Choose HubLink?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-neutral-500 font-medium leading-relaxed">
              Built specifically for the Nigerian market with bank-grade security and data-saving at its core.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "NIN Verification",
                desc: "Every artisan and agent is verified using SmileID to ensure safety and accountability.",
                icon: ShieldCheck,
                color: "text-blue-600",
                bg: "bg-blue-50/50"
              },
              {
                title: "Escrow Payments",
                desc: "Your funds are protected by our secure escrow system—artisans are only paid when you are satisfied.",
                icon: Zap,
                color: "text-amber-600",
                bg: "bg-amber-50/50"
              },
              {
                title: "Data Saver Mode",
                desc: "Optimized images and offline capabilities to save your data costs on 3G networks.",
                icon: HomeIcon,
                color: "text-emerald-600",
                bg: "bg-emerald-50/50"
              }
            ].map((feature, idx) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -8 }}
                className="relative rounded-[2rem] bg-white p-10 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-neutral-100 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]"
              >
                <div className={`inline-flex rounded-2xl ${feature.bg} p-4 ${feature.color} shadow-inner`}>
                  <feature.icon size={32} strokeWidth={2.5} />
                </div>
                <h3 className="mt-8 text-2xl font-bold text-trust">{feature.title}</h3>
                <p className="mt-4 text-neutral-500 leading-loose font-medium">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="group relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-blue-700 to-blue-900 p-12 text-white shadow-2xl transition-all hover:scale-[1.01]">
              {/* Ghost Background Image */}
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay grayscale transition-transform duration-700 group-hover:scale-110">
                <img 
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                  alt="Background House" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              
              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-inner">
                  <HomeIcon size={36} className="text-blue-200 fill-blue-200/20 drop-shadow-[0_0_12px_rgba(191,219,254,0.4)]" />
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight">Find a Property</h3>
                <p className="mt-6 text-blue-100/80 font-medium leading-relaxed text-lg">
                  Browse verified houses and shops. No hidden fees, standardized agency rates.
                </p>
                <Link 
                  to="/properties"
                  className={cn(buttonVariants({ variant: "default" }), "mt-10 bg-white text-blue-900 hover:bg-blue-50 h-14 px-10 rounded-2xl font-bold shadow-[0_10px_30px_rgba(255,255,255,0.2)]")}
                >
                  Browse Listings <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />
            </div>

            <div className="group relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-neutral-800 to-black p-12 text-white shadow-2xl transition-all hover:scale-[1.01]">
              {/* Ghost Background Image */}
              <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay grayscale transition-transform duration-700 group-hover:scale-110">
                <img 
                  src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=800&q=80" 
                  alt="Background Professional" 
                  className="h-full w-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="relative z-10">
                <div className="mb-8 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-md shadow-inner">
                  <Users size={36} className="text-neutral-300 fill-neutral-300/20 drop-shadow-[0_0_12px_rgba(212,212,212,0.4)]" />
                </div>
                <h3 className="text-4xl font-extrabold tracking-tight">Hire an Artisan</h3>
                <p className="mt-6 text-neutral-400 font-medium leading-relaxed text-lg">
                  Connect with plumbers, electricians, and more. View portfolios and get quotes.
                </p>
                <Link 
                  to="/artisans"
                  className={cn(buttonVariants({ variant: "default" }), "mt-10 bg-blue-600 text-white hover:bg-blue-500 h-14 px-10 rounded-2xl font-bold shadow-[0_10px_30px_rgba(37,99,235,0.3)]")}
                >
                  Find Artisans <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              <div className="absolute -right-12 -bottom-12 h-80 w-80 rounded-full bg-neutral-700/10 blur-3xl" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
