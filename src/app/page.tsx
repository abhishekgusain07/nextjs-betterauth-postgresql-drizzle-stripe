import { NavbarDemo } from "@/components/navbar";
import Pricing from "@/components/pricing";
import Image from "next/image";
import Link from "next/link";
import ProblemSection from "./components/problem";
import SolutionSection from "./components/solution";
import Footer from "./components/footer";
import TechnologyUsed from "./components/techused";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavbarDemo>
        {/* Hero Section */}
        <section className="pt-20 pb-20 px-4 md:px-8 lg:px-16 flex flex-col items-center text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            Ship Your SaaS <span className="text-blue-600 dark:text-blue-400">Blazingly Fast</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
            A comprehensive starter template with authentication, payments, and analytics built in.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/dashboard" className="bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-md font-medium">
              Get Started
            </Link>
            <Link href="#features" className="border border-border hover:bg-accent hover:text-accent-foreground px-6 py-3 rounded-md font-medium">
              Learn More
            </Link>
          </div>
        </section>
        
        <TechnologyUsed />
        {/* Features Section */}
        <section id="features" className="py-16 px-4 md:px-8 lg:px-16 bg-secondary/20">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-16">Everything You Need</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Authentication</h3>
                <p className="text-muted-foreground">Complete auth system with email, social login, magic links, and MFA support.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Payments</h3>
                <p className="text-muted-foreground">Stripe integration with subscription management, pricing tiers, and billing.</p>
              </div>
              <div className="p-6 rounded-lg border border-border bg-card">
                <div className="h-12 w-12 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2">Analytics</h3>
                <p className="text-muted-foreground">Built-in analytics with PostHog and error tracking with Sentry.</p>
              </div>
            </div>
          </div>
        </section>


        <ProblemSection />

        <SolutionSection />
        {/* Pricing Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16">
          <Pricing />
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 md:px-8 lg:px-16 bg-primary/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Launch your SaaS in record time with our production-ready template.
            </p>
            <Link href="/sign-up" className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-3 rounded-md font-medium inline-block">
              Start Building Now
            </Link>
          </div>
        </section>
        <Footer />
      </NavbarDemo>
    </div>
  );
}
