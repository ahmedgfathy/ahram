'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import Sidebar from '@/components/dashboard/Sidebar';
import Header from '@/components/dashboard/Header';
import { ChartBarIcon, HomeIcon, UsersIcon } from '@heroicons/react/24/outline';

export default function Dashboard() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const { data: { session }, error } = await supabase.auth.getSession();
        if (error || !session) {
          router.push('/');
        }
      } catch (error) {
        console.error('Auth error:', error);
        router.push('/');
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  return (
    <div className="dashboard-layout">
      <Sidebar />
      
      <div className="main-content">
        <Header />
        
        <main className="p-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="activity-card">
              <h2 className="text-lg font-semibold mb-4">Recent Activities</h2>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="py-3 flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New property listed: Modern Villa</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="activity-card">
              <h2 className="text-lg font-semibold mb-4">Upcoming Tasks</h2>
              <div className="divide-y divide-gray-200 dark:divide-gray-700">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="py-3 flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <input type="checkbox" className="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
                      <span className="text-sm font-medium">Property Viewing: 123 Main St</span>
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

interface StatsCardProps {
  title: string;
  value: string;
  icon: React.ElementType;
  trend: string;
}

function StatsCard({ title, value, icon: Icon, trend }: StatsCardProps) {
  return (
    <div className="stats-card">
      <div className="flex items-center justify-between mb-4">
        <div className="p-2 bg-blue-50 dark:bg-blue-900/50 rounded-lg">
          <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
        </div>
        <span className={`text-sm font-medium ${trend.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
          {trend}
        </span>
      </div>
      <h3 className="text-gray-500 dark:text-gray-400 text-sm">{title}</h3>
      <p className="text-2xl font-semibold mt-1">{value}</p>
    </div>
  );
}
