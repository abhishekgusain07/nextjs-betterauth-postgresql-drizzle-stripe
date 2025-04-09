"use client"

import { useEffect, useState } from "react";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { User } from "better-auth";

export default function Dashboard() {
  const [user, setUser] = useState<User|undefined>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch the session only once when component mounts
    const getSession = async () => {
      try {
        const session = await authClient.getSession();
        
        if (!session) {
          redirect("/sign-in");
        }
        
        setUser(session?.data?.user);
      } catch (error) {
        console.error("Failed to get session:", error);
      } finally {
        setLoading(false);
      }
    };

    getSession();
  }, []); // Empty dependency array ensures this only runs once

  if (loading) {
    return <div className="p-8">Loading...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user.name || user.email}!</p>
          <p>You are signed in with: {user.email}</p>
          
          {/* Display other user information as needed */}
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
              window.location.href = "/sign-in";
            }}
            className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          >
            Sign Out
          </button>
        </div>
      ) : (
        <p>Please sign in to view this page</p>
      )}
    </div>
  );
}