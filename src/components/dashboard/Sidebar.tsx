import Link from 'next/link';
import { 
  HomeIcon, 
  UsersIcon, 
  CalendarIcon, 
  ChartBarIcon,
  DocumentTextIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export default function Sidebar() {
  const menuItems = [
    { name: 'Overview', icon: HomeIcon, href: '/dashboard' },
    { name: 'Properties', icon: DocumentTextIcon, href: '/dashboard/properties' },
    { name: 'Clients', icon: UsersIcon, href: '/dashboard/clients' },
    { name: 'Calendar', icon: CalendarIcon, href: '/dashboard/calendar' },
    { name: 'Analytics', icon: ChartBarIcon, href: '/dashboard/analytics' },
    { name: 'Settings', icon: CogIcon, href: '/dashboard/settings' },
  ];

  return (
    <div className="h-screen w-64 bg-white dark:bg-gray-800 border-r dark:border-gray-700">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold">Real Estate CRM</h2>
      </div>
      <nav className="mt-6">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="flex items-center px-6 py-3 text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <span className="icon-container">
              <item.icon className="w-5 h-5 mr-3" />
            </span>
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
