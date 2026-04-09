import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, Users, Search, Menu, LogIn, LogOut, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import DataSaverToggle from "@/components/shared/DataSaverToggle";
import { useAuth } from "@/contexts/AuthContext";
import { auth, googleProvider, handleFirestoreError, OperationType } from "@/lib/firebase";
import { signInWithPopup, signOut } from "firebase/auth";
import { doc, setDoc, serverTimestamp, getDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { toast } from "sonner";

export default function Navbar() {
  const { user, firebaseUser, loading } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const fUser = result.user;
      
      // Check if user exists in Firestore
      const userRef = doc(db, 'users', fUser.uid);
      const userSnap = await getDoc(userRef);
      
      if (!userSnap.exists()) {
        // Create new user profile
        const newUser = {
          uid: fUser.uid,
          name: fUser.displayName || "Anonymous",
          email: fUser.email || "",
          role: 'client',
          isVerified: false,
          ninVerified: false,
          walletBalance: 0,
          createdAt: serverTimestamp()
        };
        await setDoc(userRef, newUser);
      }
      toast.success("Signed in successfully!");
    } catch (error) {
      console.error("Login Error:", error);
      toast.error("Failed to sign in. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toast.success("Signed out successfully!");
    } catch (error) {
      toast.error("Failed to sign out.");
    }
  };

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Properties", href: "/properties", icon: Search },
    { name: "Artisans", href: "/artisans", icon: Users },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trust text-white shadow-xl shadow-trust/20 transition-transform group-hover:scale-105">
              <Home size={28} />
            </div>
            <span className="text-2xl font-extrabold tracking-tight text-trust">HubLink</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex md:items-center md:gap-10">
          <DataSaverToggle />
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className="text-sm font-bold uppercase tracking-widest text-neutral-500 transition-colors hover:text-trust"
            >
              {link.name}
            </Link>
          ))}
          
          {!loading && (
            firebaseUser ? (
              <div className="flex items-center gap-4">
                <Avatar className="h-11 w-11 border-2 border-white ring-2 ring-trust/10 shadow-md transition-transform hover:scale-105">
                  <AvatarImage src={firebaseUser.photoURL || ""} />
                  <AvatarFallback className="bg-neutral-100 text-trust">
                    <UserIcon className="h-6 w-6" />
                  </AvatarFallback>
                </Avatar>
                <Button variant="ghost" size="sm" onClick={handleLogout} className="text-neutral-500 font-bold hover:text-red-600 hover:bg-red-50/50">
                  <LogOut className="mr-2 h-4 w-4" /> Sign Out
                </Button>
              </div>
            ) : (
              <Button onClick={handleLogin} className="bg-trust hover:bg-trust/90 rounded-xl px-6 font-bold shadow-lg shadow-trust/20">
                <LogIn className="mr-2 h-4 w-4" /> Sign In
              </Button>
            )
          )}
        </div>

        {/* Mobile Nav */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col gap-8 py-8">
                <div className="flex items-center justify-between">
                  <Link to="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-trust text-white shadow-lg shadow-trust/20">
                      <Home size={28} />
                    </div>
                    <span className="text-2xl font-extrabold tracking-tight text-trust">HubLink</span>
                  </Link>
                  <DataSaverToggle />
                </div>
                <div className="flex flex-col gap-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.name}
                      to={link.href}
                      className="flex items-center gap-4 text-xl font-bold text-neutral-500 hover:text-trust transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-neutral-100 text-neutral-400 group-hover:bg-trust/10 group-hover:text-trust transition-colors">
                        <link.icon className="h-5 w-5" />
                      </div>
                      {link.name}
                    </Link>
                  ))}
                </div>
                
                {!loading && (
                  firebaseUser ? (
                    <div className="flex flex-col gap-6">
                      <div className="flex items-center gap-4 rounded-[2rem] bg-neutral-50 p-6 ring-1 ring-neutral-200 shadow-inner">
                        <Avatar className="h-14 w-14 border-4 border-white shadow-lg">
                          <AvatarImage src={firebaseUser.photoURL || ""} />
                          <AvatarFallback className="bg-neutral-100 text-trust">
                            <UserIcon className="h-8 w-8" />
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="text-lg font-bold text-trust">{firebaseUser.displayName}</p>
                          <p className="text-sm font-medium text-neutral-400">{firebaseUser.email}</p>
                        </div>
                      </div>
                      <Button variant="outline" onClick={handleLogout} className="w-full h-14 rounded-2xl font-bold border-neutral-200 text-neutral-500 hover:text-red-600 hover:bg-red-50/50">
                        <LogOut className="mr-2 h-4 w-4" /> Sign Out
                      </Button>
                    </div>
                  ) : (
                    <Button onClick={handleLogin} className="w-full h-14 bg-trust hover:bg-trust/90 rounded-2xl font-bold shadow-lg shadow-trust/20">
                      <LogIn className="mr-2 h-4 w-4" /> Sign In
                    </Button>
                  )
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
