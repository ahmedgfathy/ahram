import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="w-full p-4 shadow-md">
        <Link href="/" className="flex items-center justify-center">
          <Image
            src="/realtor.png"
            alt="REALTOR"
            width={200}
            height={60}
            priority
          />
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-xl w-full max-w-md">
          <h1 className="text-2xl font-bold text-center mb-6">Welcome Back</h1>
          
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Username</label>
              <input
                type="text"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter your username"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded-lg dark:bg-gray-700 dark:border-gray-600"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Sign In
            </button>
          </form>

          <div className="mt-4 flex flex-col gap-2 text-sm text-center">
            <Link href="/forgot-password" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
            <div className="text-gray-600">
              Don&apos;t have an account?{' '}
              <Link href="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full p-4 text-center text-sm text-gray-600 border-t">
        <p>copyright© 2024 Real Estate Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
