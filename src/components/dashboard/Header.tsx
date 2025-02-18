import { BellIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { UserCircleIcon } from '@heroicons/react/24/solid';  // Add this import

export default function Header() {
  return (
    <header className="h-16 bg-white dark:bg-gray-800 border-b dark:border-gray-700 flex items-center justify-between px-6">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">Dashboard</h1>
      </div>
      <div className="flex items-center space-x-4">
        <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full">
          <BellIcon className="w-6 h-6" />
        </button>
        <div className="flex items-center space-x-3">
          <span className="text-sm">John Doe</span>
          <div className="h-8 w-8 rounded-full bg-gray-200 overflow-hidden flex items-center justify-center">
            <UserCircleIcon className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </div>
    </header>
  );
}
