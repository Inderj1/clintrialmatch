'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  Users, Search, Calendar, FileText, Settings, Brain,
  Home, Activity, Bell, ChevronDown, MessageSquare,
  Database, ClipboardList, UserCheck, BarChart2, Clock
} from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ isProvider, activeMenu, setActiveMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

  const providerMenuItems = [
    {
      title: 'Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: 'dashboard'
    },
    {
      title: 'Trial Management',
      icon: <Database className="h-5 w-5" />,
      path: 'trials',
      submenu: [
        { title: 'Active Trials', path: 'active-trials' },
        { title: 'Trial Setup', path: 'trial-setup' },
        { title: 'Protocol Management', path: 'protocols' }
      ]
    },
    {
      title: 'Patient Management',
      icon: <Users className="h-5 w-5" />,
      path: 'patients',
      submenu: [
        { title: 'All Patients', path: 'all-patients' },
        { title: 'Risk Assessment', path: 'risk-assessment' },
        { title: 'Retention Analytics', path: 'retention' }
      ]
    },
    {
      title: 'AI Insights',
      icon: <Brain className="h-5 w-5" />,
      path: 'ai-insights',
      submenu: [
        { title: 'Patient Matching', path: 'matching' },
        { title: 'Dropout Prediction', path: 'dropout' },
        { title: 'Treatment Analysis', path: 'analysis' }
      ]
    },
    {
      title: 'Reports',
      icon: <BarChart2 className="h-5 w-5" />,
      path: 'reports',
      submenu: [
        { title: 'Trial Progress', path: 'trial-progress' },
        { title: 'Patient Outcomes', path: 'outcomes' },
        { title: 'Compliance Reports', path: 'compliance' }
      ]
    },
    {
      title: 'Communications',
      icon: <MessageSquare className="h-5 w-5" />,
      path: 'communications',
      submenu: [
        { title: 'Patient Messages', path: 'messages' },
        { title: 'Announcements', path: 'announcements' },
        { title: 'Automated Alerts', path: 'alerts' }
      ]
    }
  ];

  const patientMenuItems = [
    {
      title: 'My Dashboard',
      icon: <Home className="h-5 w-5" />,
      path: 'dashboard'
    },
    {
      title: 'Trial Matches',
      icon: <Search className="h-5 w-5" />,
      path: 'matches',
      submenu: [
        { title: 'AI Recommendations', path: 'recommendations' },
        { title: 'Match History', path: 'history' },
        { title: 'Saved Trials', path: 'saved' }
      ]
    },
    {
      title: 'My Trial',
      icon: <ClipboardList className="h-5 w-5" />,
      path: 'my-trial',
      submenu: [
        { title: 'Trial Overview', path: 'overview' },
        { title: 'Protocol Schedule', path: 'schedule' },
        { title: 'Documents', path: 'documents' }
      ]
    },
    {
      title: 'Health Tracking',
      icon: <Activity className="h-5 w-5" />,
      path: 'health',
      submenu: [
        { title: 'Symptoms Log', path: 'symptoms' },
        { title: 'Medication Log', path: 'medications' },
        { title: 'AI Health Insights', path: 'insights' }
      ]
    },
    {
      title: 'Appointments',
      icon: <Calendar className="h-5 w-5" />,
      path: 'appointments',
      submenu: [
        { title: 'Upcoming', path: 'upcoming' },
        { title: 'Past Visits', path: 'past' },
        { title: 'Schedule New', path: 'schedule' }
      ]
    },
    {
      title: 'Communication',
      icon: <MessageSquare className="h-5 w-5" />,
      path: 'communication',
      submenu: [
        { title: 'Messages', path: 'messages' },
        { title: 'Updates', path: 'updates' },
        { title: 'Support', path: 'support' }
      ]
    }
  ];

  const menuItems = isProvider ? providerMenuItems : patientMenuItems;

  const toggleSubmenu = (path) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <div className="w-64 bg-white border-r h-screen fixed left-0 overflow-y-auto">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">
          {isProvider ? 'Provider Portal' : 'Patient Portal'}
        </h1>
      </div>
      <div className="py-4">
        {menuItems.map((item) => (
          <div key={item.path}>
            <div
              className={`flex items-center justify-between px-4 py-2 cursor-pointer hover:bg-gray-100 ${activeMenu.startsWith(item.path) ? 'bg-blue-50 text-blue-600' : ''
                }`}
              onClick={() => {
                setActiveMenu(item.path);
                if (item.submenu) {
                  toggleSubmenu(item.path);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedMenus[item.path] ? 'rotate-180' : ''
                  }`} />
              )}
            </div>
            {item.submenu && expandedMenus[item.path] && (
              <div className="bg-gray-50">
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.path}
                    className={`pl-12 pr-4 py-2 cursor-pointer hover:bg-gray-100 ${activeMenu === subItem.path ? 'text-blue-600' : ''
                      }`}
                    onClick={() => setActiveMenu(subItem.path)}
                  >
                    {subItem.title}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const TopBar = ({ isProvider }) => {
  return (
    <div className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search..."
          className="border-none focus:ring-0 text-sm"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-400 cursor-pointer" />
        <Settings className="h-5 w-5 text-gray-400 cursor-pointer" />
        <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
      </div>
    </div>
  );
};

const MainContent = ({ activeMenu, isProvider }) => {
  return (
    <div className="p-6">
      <Card>
        <CardHeader>
          <CardTitle>{activeMenu}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-500">Content for {activeMenu} will be displayed here</p>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard = () => {
  const router = useRouter();

  useEffect(() => {
    // Check if user is logged in
    const role = localStorage.getItem('role');
    if (!role || role !== 'Provider') {
      router.push('/provider-login');
    }
  }, [router]);
  const [isProvider, setIsProvider] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar
        isProvider={isProvider}
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />
      <div className="ml-64 flex-1">
        <TopBar isProvider={isProvider} />
        <div className="mt-16">
          <MainContent
            activeMenu={activeMenu}
            isProvider={isProvider}
          />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;