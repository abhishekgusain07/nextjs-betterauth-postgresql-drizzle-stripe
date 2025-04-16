import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const TechnologyUsed = () => {
  const logos = [
    {
      name: "Drizzle ORM",
      height: "h-12",
      src: "https://res.cloudinary.com/dowiygzq3/image/upload/v1741087634/108468352_rdoifc.png",
      alt: "Drizzle ORM",
      additionalClasses: "rounded-md",
      tooltip: "Drizzle ORM"
    },
    {
      name: "Typescript",
      height: "h-12",
      src: "https://res.cloudinary.com/dowiygzq3/image/upload/v1741087544/typescript_wrgqvm.webp",
      alt: "Typescript",
      tooltip: "Typescript"
    },
    {
      name: "Better-auth",
      height: "h-12",
      src: "https://res.cloudinary.com/dowiygzq3/image/upload/v1740732044/163827765_qn4qmt.png",
      alt: "Better-auth",
      additionalClasses: "rounded-md",
      tooltip: "Better-auth"
    },
    {
      name: "Neon",
      height: "h-12",
      src: "https://res.cloudinary.com/dowiygzq3/image/upload/v1741087611/neon-logomark-dark-color_1_bzq0v2.svg",
      alt: "Neon",
      additionalClasses: "rounded-md",
      tooltip: "Neon"
    },
    {
      name: "Nextjs",
      height: "h-5",
      src: "/nextjs.svg",
      alt: "Nextjs"
    },
    {
      name: "Tailwindcss",
      height: "h-7",
      src: "/tailwindcss.svg",
      alt: "Tailwindcss"
    },
    {
      name: "React",
      height: "h-10",
      src: "/react.svg",
      alt: "React"
    },
    {
      name: "Stripe",
      height: "h-12",
      src: "/stripe.svg",
      alt: "Stripe"
    },
    {
      name: "Vercel",
      height: "h-7",
      src: "/vercel.svg",
      alt: "Vercel"
    },
    {
        name: "Posthog",
        height: "h-5",
        src: "/posthog.svg",
        alt: "Posthog"
    },
    {
        name: "Sentry",
        height: "h-8",
        src: "/sentry.svg",
        alt: "Sentry"
    },
    {
        
    }
  ];

  return (
    <TooltipProvider>
      <section className="bg-background py-16">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary/80 to-primary mb-2">Powered by Best-in-Class Technology</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Leveraging industry-leading tools to deliver a seamless, reliable experience.</p>
          </div>
          <div className="mx-auto mt-16 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
            {logos.map((logo, index) => (
              logo.tooltip ? (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <img
                      className={`${logo.height} w-fit max-w-32 transition-transform duration-300 hover:scale-110 ${logo.additionalClasses || ''} cursor-help`}
                      alt={logo.alt}
                      width="auto"
                      src={logo.src}
                    />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{logo.tooltip}</p>
                  </TooltipContent>
                </Tooltip>
              ) : (
                <img
                  key={index}
                  className={`${logo.height} w-fit max-w-32 transition-transform duration-300 hover:scale-110 ${logo.additionalClasses || ''}`}
                  alt={logo.alt}
                  width="auto"
                  src={logo.src}
                />
              )
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechnologyUsed;