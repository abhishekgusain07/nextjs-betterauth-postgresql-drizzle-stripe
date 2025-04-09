"use client"

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { User } from "better-auth";

export default function Dashboard() {
  const [user, setUser] = useState<User|undefined>();
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const session = await authClient.getSession();
        
        if (!session) {
          router.replace("/sign-in");
          return;
        }
        
        setUser(session?.data?.user);
      } catch (error) {
        console.error("Auth check failed:", error);
        router.replace("/sign-in");
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-lg">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return null; // Will redirect in useEffect
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div>
        <p>Welcome, {user.name || user.email}!</p>
        <p>You are signed in with: {user.email}</p>
        
        {user.image && (
          <img 
            src={user.image} 
            alt="Profile" 
            className="w-16 h-16 rounded-full mt-4" 
          />
        )}
        
        <button 
          onClick={async () => {
            await authClient.signOut();
            router.replace("/sign-in");
          }}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
}