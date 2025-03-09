'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  Users, Search, Calendar, FileText, Settings, Brain,
  Home, Activity, Bell, ChevronDown, MessageSquare,
  Database, ClipboardList, UserCheck, BarChart2, Clock,
  ChevronRight
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

interface SidebarProps {
  isProvider: boolean;
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isProvider, activeMenu, setActiveMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  // Initialize common menu items as expanded
  useEffect(() => {
    setExpandedMenus({
      'trials': true,
      'patients': true
    });
  }, []);

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

  const toggleSubmenu = (path: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <div className="w-64 bg-gradient-to-b from-white to-blue-50 border-r border-blue-100 h-screen fixed left-0 overflow-y-auto shadow-md">
      <div className="p-5 border-b border-blue-100 bg-gradient-to-r from-primary-dark to-blue-700">
        <h1 className="text-xl font-bold text-white flex items-center">
          <UserCheck className="h-6 w-6 mr-2" /> 
          {isProvider ? 'Provider Portal' : 'Patient Portal'}
        </h1>
      </div>
      <div className="py-4">
        {menuItems.map((item) => (
          <div key={item.path}>
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-blue-100 ${
                activeMenu.startsWith(item.path) 
                  ? 'bg-gradient-to-r from-blue-700 to-primary-dark text-white font-medium shadow-sm' 
                  : 'hover:translate-x-1'
              }`}
              onClick={() => {
                setActiveMenu(item.path);
                if (item.submenu) {
                  toggleSubmenu(item.path);
                }
              }}
            >
              <div className="flex items-center space-x-3">
                <div className={`${activeMenu.startsWith(item.path) ? 'text-white' : 'text-primary-dark'}`}>
                  {item.icon}
                </div>
                <span>{item.title}</span>
              </div>
              {item.submenu && (
                <ChevronDown className={`h-4 w-4 transform transition-transform ${expandedMenus[item.path] ? 'rotate-180' : ''
                  }`} />
              )}
            </div>
            {item.submenu && expandedMenus[item.path] && (
              <div className="bg-blue-50 rounded-md my-1 overflow-hidden shadow-inner">
                {item.submenu.map((subItem) => (
                  <div
                    key={subItem.path}
                    className={`pl-12 pr-4 py-2.5 cursor-pointer transition-all duration-200 
                      ${activeMenu === subItem.path 
                        ? 'bg-primary-light text-blue-700 font-medium border-l-4 border-blue-700' 
                        : 'hover:bg-blue-100 hover:pl-14'}`}
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

interface TopBarProps {
  isProvider: boolean;
}

const TopBar: React.FC<TopBarProps> = ({ isProvider }) => {
  return (
    <div className="h-16 bg-white border-b border-blue-100 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-4 bg-blue-50 rounded-full px-4 py-2 w-96">
        <Search className="h-5 w-5 text-blue-700" />
        <input
          type="text"
          placeholder="Search patients, trials, reports..."
          className="border-none focus:ring-0 text-sm bg-transparent w-full"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="h-5 w-5 text-blue-700 hover:text-primary-dark transition-colors cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">5</span>
        </div>
        <Settings className="h-5 w-5 text-blue-700 hover:text-primary-dark transition-colors cursor-pointer" />
        <button 
          onClick={() => {
            localStorage.removeItem('role');
            window.location.href = '/provider-login';
          }}
          className="flex items-center text-blue-700 hover:text-primary-dark transition-colors cursor-pointer"
          title="Logout"
        >
          <LogOut className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-3 border-l border-blue-100 pl-5">
          <div className="h-9 w-9 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-medium">DR</span>
          </div>
          <div>
            <span className="font-medium block">Dr. Robert Chen</span>
            <span className="text-xs text-gray-500">Oncology Specialist</span>
          </div>
        </div>
      </div>
    </div>
  );
};

interface MainContentProps {
  activeMenu: string;
  isProvider: boolean;
}

const MainContent: React.FC<MainContentProps> = ({ activeMenu, isProvider }) => {
  // Sample data for the dashboard
  const trialStats = [
    { name: 'Active Trials', count: 8, icon: <Database className="h-5 w-5" />, color: 'blue' },
    { name: 'Enrolled Patients', count: 124, icon: <Users className="h-5 w-5" />, color: 'green' },
    { name: 'Pending Reviews', count: 12, icon: <ClipboardList className="h-5 w-5" />, color: 'amber' },
    { name: 'Completion Rate', count: '94%', icon: <BarChart2 className="h-5 w-5" />, color: 'indigo' }
  ];

  const recentPatients = [
    { id: 'PT-7842', name: 'Sarah Thompson', status: 'Active', trial: 'ONCO-2024-BR', lastVisit: '2 days ago' },
    { id: 'PT-6391', name: 'Michael Johnson', status: 'Active', trial: 'CARD-2023-HF', lastVisit: '1 week ago' },
    { id: 'PT-9023', name: 'Emily Rodriguez', status: 'Screening', trial: 'ONCO-2024-LG', lastVisit: 'Today' }
  ];

  if (activeMenu === 'dashboard') {
    return (
      <div className="p-6 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{trialStats[0].name}</div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  {trialStats[0].icon}
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">{trialStats[0].count}</div>
            </div>
          </Card>
          
          <Card className="border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{trialStats[1].name}</div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  {trialStats[1].icon}
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">{trialStats[1].count}</div>
            </div>
          </Card>
          
          <Card className="border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-amber-600 to-amber-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{trialStats[2].name}</div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  {trialStats[2].icon}
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">{trialStats[2].count}</div>
            </div>
          </Card>
          
          <Card className="border-none shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow">
            <div className="bg-gradient-to-r from-indigo-600 to-indigo-500 p-4 text-white">
              <div className="flex justify-between items-center">
                <div className="font-medium">{trialStats[3].name}</div>
                <div className="bg-white bg-opacity-20 p-2 rounded-lg">
                  {trialStats[3].icon}
                </div>
              </div>
              <div className="text-3xl font-bold mt-2">{trialStats[3].count}</div>
            </div>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Trial Progress */}
          <Card className="col-span-2 border-none shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-700 to-primary-dark text-white pb-3">
              <CardTitle className="flex items-center">
                <BarChart2 className="h-5 w-5 mr-2" /> Trial Progress Overview
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-4">
                {['ONCO-2024-BR', 'CARD-2023-HF', 'NEUR-2024-PK'].map((trial, index) => (
                  <div key={index} className="border border-blue-100 rounded-lg p-4 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-center mb-2">
                      <div className="font-medium text-blue-700">{trial}</div>
                      <div className="text-sm text-gray-500">Phase {index + 1}</div>
                    </div>
                    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-primary h-2.5 rounded-full" 
                        style={{ width: `${[75, 45, 90][index]}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-gray-500">Enrolled: {[18, 24, 12][index]}/{[24, 50, 15][index]}</div>
                      <div className="text-gray-500">Completion: {[75, 45, 90][index]}%</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Recent Patients */}
          <Card className="border-none shadow-lg rounded-xl overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-green-600 to-green-500 text-white pb-3">
              <CardTitle className="flex items-center">
                <Users className="h-5 w-5 mr-2" /> Recent Patients
              </CardTitle>
            </CardHeader>
            <CardContent className="p-4">
              <div className="space-y-3">
                {recentPatients.map((patient, index) => (
                  <div key={index} className="border border-gray-100 rounded-lg p-3 hover:bg-blue-50 transition-colors">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="font-medium">{patient.name}</div>
                        <div className="text-xs text-gray-500 mt-1">ID: {patient.id}</div>
                      </div>
                      <div className={`text-xs px-2 py-1 rounded-full ${
                        patient.status === 'Active' ? 'bg-green-100 text-green-700' : 
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {patient.status}
                      </div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      <div>Trial: {patient.trial}</div>
                      <div>Last visit: {patient.lastVisit}</div>
                    </div>
                  </div>
                ))}
                <div className="text-center pt-2">
                  <button className="text-sm text-blue-700 hover:text-primary-dark font-medium flex items-center justify-center w-full">
                    <span>View all patients</span>
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* AI Insights */}
        <Card className="border-none shadow-lg rounded-xl overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white pb-3">
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2" /> AI Insights & Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border border-purple-100 rounded-lg p-4 bg-gradient-to-r from-white to-purple-50">
                <div className="flex items-center mb-2">
                  <div className="bg-purple-100 p-2 rounded-full mr-2">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <div className="font-medium text-purple-700">Patient Matching</div>
                </div>
                <div className="text-sm text-gray-600">
                  5 new potential candidates identified for ONCO-2024-BR trial based on genetic markers
                </div>
              </div>
              
              <div className="border border-red-100 rounded-lg p-4 bg-gradient-to-r from-white to-red-50">
                <div className="flex items-center mb-2">
                  <div className="bg-red-100 p-2 rounded-full mr-2">
                    <Activity className="h-5 w-5 text-red-600" />
                  </div>
                  <div className="font-medium text-red-700">Dropout Risk</div>
                </div>
                <div className="text-sm text-gray-600">
                  3 patients showing signs of potential dropout. Early intervention recommended.
                </div>
              </div>
              
              <div className="border border-green-100 rounded-lg p-4 bg-gradient-to-r from-white to-green-50">
                <div className="flex items-center mb-2">
                  <div className="bg-green-100 p-2 rounded-full mr-2">
                    <BarChart2 className="h-5 w-5 text-green-600" />
                  </div>
                  <div className="font-medium text-green-700">Efficacy Analysis</div>
                </div>
                <div className="text-sm text-gray-600">
                  CARD-2023-HF showing 28% better outcomes than predicted. Review full report.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
  
  return (
    <div className="p-6">
      <Card className="border-none shadow-lg rounded-xl overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-blue-700 to-primary-dark text-white">
          <CardTitle className="capitalize">{activeMenu.replace('-', ' ')}</CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex items-center justify-center h-40 bg-blue-50 rounded-lg border border-blue-100">
            <div className="text-center">
              <div className="text-blue-700 mb-2">
                <Database className="h-12 w-12 mx-auto" />
              </div>
              <p className="text-gray-500">Content for {activeMenu.replace('-', ' ')} will be displayed here</p>
              <button className="mt-4 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-primary-dark transition-colors">
                Configure View
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const Dashboard: React.FC = () => {
  const router = useRouter();

  // Temporarily commented out for testing
  // useEffect(() => {
  //   // Check if user is logged in
  //   const role = localStorage.getItem('role');
  //   if (!role || role !== 'Provider') {
  //     router.push('/provider-login');
  //   }
  // }, [router]);
  
  const [isProvider, setIsProvider] = useState(true);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50">
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
