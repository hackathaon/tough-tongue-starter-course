import Image from "next/image";

// Header component
const Header = () => {
  return (
    <>
      <h1 className="text-4xl font-bold">[Course Name]</h1>
      <p className="text-xl text-center sm:text-left max-w-2xl">
        Master new skills with interactive voice-based learning powered by Tough Tongue AI
      </p>
    </>
  );
};

// Course feature card component
const FeatureCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

// Course benefits grid component
const BenefitsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
      <FeatureCard 
        title="Interactive Learning" 
        description="Practice conversations with AI tutors that adapt to your learning pace" 
      />
      <FeatureCard 
        title="Real-time Feedback" 
        description="Receive instant feedback on your responses and communication style" 
      />
      <FeatureCard 
        title="Flexible Schedule" 
        description="Learn anytime, anywhere with 24/7 access to practice sessions" 
      />
    </div>
  );
};

// Course modules component
const CourseModules = () => {
  return (
    <div className="w-full max-w-4xl">
      <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>
      <div className="space-y-4">
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium">Module 1: [Module Name]</h3>
          <p className="text-gray-600 dark:text-gray-300">Brief description of this module and what students will learn.</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium">Module 2: [Module Name]</h3>
          <p className="text-gray-600 dark:text-gray-300">Brief description of this module and what students will learn.</p>
        </div>
        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h3 className="text-lg font-medium">Module 3: [Module Name]</h3>
          <p className="text-gray-600 dark:text-gray-300">Brief description of this module and what students will learn.</p>
        </div>
      </div>
    </div>
  );
};

// CTA buttons component
const CTAButtons = () => {
  return (
    <div className="flex gap-4 items-center flex-col sm:flex-row mt-6">
      <a
        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
        href="#"
      >
        Enroll Now
      </a>
      <a
        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
        href="/course"
      >
        Get Started
      </a>
    </div>
  );
};

// Footer component
const Footer = () => {
  return (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://app.toughtongueai.com/docs/api-integration/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/file.svg"
          alt="File icon"
          width={16}
          height={16}
        />
        Documentation
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://app.toughtongueai.com/developer/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/window.svg"
          alt="Window icon"
          width={16}
          height={16}
        />
        Developer Portal
      </a>
      <a
        className="flex items-center gap-2 hover:underline hover:underline-offset-4"
        href="https://app.toughtongueai.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          aria-hidden
          src="/globe.svg"
          alt="Globe icon"
          width={16}
          height={16}
        />
        Visit Tough Tongue AI →
      </a>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Header />
        <BenefitsGrid />
        <CourseModules />
        <CTAButtons />
      </main>
      <Footer />
    </div>
  );
}
