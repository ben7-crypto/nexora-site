import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      <div style={{ marginTop: "20px" }}>
        <SignedOut>
          <Link href="/sign-in">
            <button style={{
              padding: "10px 20px",
              backgroundColor: "#111827",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Log in / Sign up
            </button>
          </Link>
        </SignedOut>

        <SignedIn>
          <Link href="/dashboard">
            <button style={{
              padding: "10px 20px",
              backgroundColor: "#10B981",
              color: "white",
              borderRadius: "8px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold"
            }}>
              Go to Dashboard
            </button>
          </Link>
        </SignedIn>
      </div>

      <div className="bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">What Nexora Offers</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            A Full-Stack AI Business Platform
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 mx-auto">
            Nexora isn't just a website builder. It's your launchpad to 8-figure scale.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">🚀</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">AI Website Launch</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Create high-converting sites in minutes. Zero code. Fully scalable.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">🌐</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Smart Client Systems</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Built-in automation, wallet, and intelligent dashboards — no plugins needed.
              </dd>
            </div>

            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-600 text-white">💰</div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">Monetization Engine</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600">
                Accept payments globally. Built-in wallet coming soon. No IDs required.
              </dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How Nexora Works</h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            It’s as easy as launch, activate, and scale. The full AI business experience.
          </p>
        </div>

        <div className="mt-16 max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div>
            <div className="text-4xl text-blue-600 mb-4">🛠</div>
            <h3 className="text-xl font-semibold text-gray-900">1. Launch Your Site</h3>
            <p className="mt-2 text-gray-600">
              Instantly generate your platform with Nexora’s AI site engine.
            </p>
          </div>

          <div>
            <div className="text-4xl text-blue-600 mb-4">🤖</div>
            <h3 className="text-xl font-semibold text-gray-900">2. Add AI Systems</h3>
            <p className="mt-2 text-gray-600">
              Choose powerful modules — automation, payments, CRM, more.
            </p>
          </div>

          <div>
            <div className="text-4xl text-blue-600 mb-4">📈</div>
            <h3 className="text-xl font-semibold text-gray-900">3. Scale Your Empire</h3>
            <p className="mt-2 text-gray-600">
              Let Nexora optimize, grow, and monetize your business automatically.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-blue-600 py-20 px-4 sm:px-6 lg:px-8 text-white text-center">
        <h2 className="text-3xl font-extrabold sm:text-4xl">Ready to launch your AI-powered business?</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Get started with Nexora today — it’s free, fast, and frictionless.
        </p>
        <a href="#" className="mt-8 inline-block bg-white text-blue-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition">
          Get Started Now
        </a>
      </div>

      <footer className="bg-gray-900 text-white py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Nexora. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm hover:underline">Privacy</a>
            <a href="#" className="text-sm hover:underline">Terms</a>
            <a href="#" className="text-sm hover:underline">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

