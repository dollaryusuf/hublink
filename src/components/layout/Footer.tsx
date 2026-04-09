import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t bg-white pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center gap-2">
              <span className="text-2xl font-extrabold tracking-tight text-trust">HubLink</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-neutral-500 font-medium">
              Nigeria's most trusted marketplace for property rentals and verified artisans. 
              Simplifying your home and office needs with bank-grade security.
            </p>
            <div className="mt-6 flex gap-4">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:bg-trust hover:text-white transition-all">
                <Facebook size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:bg-trust hover:text-white transition-all">
                <Twitter size={18} />
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-50 text-neutral-400 hover:bg-trust hover:text-white transition-all">
                <Instagram size={18} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-trust">Marketplace</h3>
            <ul className="mt-6 space-y-3">
              <li><Link to="/properties" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Find a House</Link></li>
              <li><Link to="/properties" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Rent a Shop</Link></li>
              <li><Link to="/artisans" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Hire an Artisan</Link></li>
              <li><Link to="/artisans" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Verified Professionals</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-trust">Company</h3>
            <ul className="mt-6 space-y-3">
              <li><a href="#" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">How it Works</a></li>
              <li><a href="#" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Trust & Safety</a></li>
              <li><a href="#" className="text-sm font-medium text-neutral-500 hover:text-trust transition-colors">Contact Support</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-trust">Contact</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-trust">
                  <MapPin size={16} />
                </div>
                <span className="text-sm font-medium text-neutral-500">Lagos, Nigeria</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-trust">
                  <Phone size={16} />
                </div>
                <span className="text-sm font-medium text-neutral-500">+234 800 HUBLINK</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-neutral-50 text-trust">
                  <Mail size={16} />
                </div>
                <span className="text-sm font-medium text-neutral-500">hello@hublink.ng</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t pt-8 text-center">
          <p className="text-sm text-neutral-400">
            &copy; {new Date().getFullYear()} HubLink Technologies. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
