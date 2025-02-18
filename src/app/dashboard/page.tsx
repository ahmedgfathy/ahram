'use client';

import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { ChartBarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        
        <main className="flex-1 overflow-y-auto p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <StatsCard
              title="Total Properties"
              value="156"
              icon={HomeIcon}
              trend="+12.5%"
            />
            <StatsCard
              title="Active Clients"
              value="84"
              icon={UsersIcon}
              trend="+5.4%"
            />
            <StatsCard
              title="Total Revenue"
              value="$1.2M"
              icon={ChartBarIcon}
              trend="+8.2%"
            />
          </div>

          {/* Recent Activities & Tasks */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center space-x-3 pb-3 border-b">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm">New property listed: Modern Villa</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
              <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between pb-3 border-b">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded" />
                      <span>Property Viewing: 123 Main St</span>
                    </div>
                    <span className="text-sm text-gray-500">Tomorrow</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function StatsCard({ title, value, icon: Icon, trend }: { title: string; value: string; icon: React.ComponentType<{ className?: string }>; trend: string }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg p-6">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className={`text-sm ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
