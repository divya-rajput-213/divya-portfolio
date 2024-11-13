// app/not-found.js

import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen  text-center p-4">
      <div className="space-y-8">
        <h1 className="text-8xl font-bold">404</h1>
        <p className="text-2xl font-semibold">{`Oops! The page you are looking for doesn't exist.`}</p>
        <p className="text-lg">{`The page you were trying to access might have been moved or no longer exists. Let's get you back on track.`}</p>
      </div>
      <Link
        href="/"
        className="px-6 py-3 bg-white text-blue-500 font-semibold rounded-lg hover:bg-gray-200 transition-colors pt-4"
      >
        Go to Home
      </Link>
    </div>
  );
}
