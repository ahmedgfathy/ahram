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
    <div className="sidebar">
      <div className="px-6 py-6 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-bold">Real Estate CRM</h2>
      </div>
      <nav className="py-4">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="nav-item"
          >
            <item.icon />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </div>
  );
}
