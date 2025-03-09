'use client'

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import {
  Brain, Calendar, Activity, Search, MessageSquare, Clock,
  ChevronRight, FileText, Bell, Settings, Home, ClipboardList,
  Users, ChevronDown, Database
} from 'lucide-react';
import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: (menu: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, setActiveMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState<Record<string, boolean>>({});

  // Initialize common menu items as expanded
  useEffect(() => {
    setExpandedMenus({
      'matches': true,
      'health': true
    });
  }, []);

  const menuItems = [
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

  const toggleSubmenu = (path: string) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <div className="w-64 bg-gradient-to-b from-white to-blue-50 border-r border-blue-100 h-screen fixed left-0 overflow-y-auto shadow-md">
      <div className="p-5 border-b border-blue-100 bg-primary-dark">
        <h1 className="text-xl font-bold text-white flex items-center">
          <Users className="h-6 w-6 mr-2" /> Patient Portal
        </h1>
      </div>
      <div className="py-4">
        {menuItems.map((item) => (
          <div key={item.path}>
            <div
              className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-200 hover:bg-blue-100 ${
                activeMenu.startsWith(item.path) 
                  ? 'bg-gradient-to-r from-primary-dark to-primary text-white font-medium shadow-sm' 
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
                        ? 'bg-primary-light text-primary-dark font-medium border-l-4 border-primary-dark' 
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

interface PatientDetails {
  name: string;
  age: number;
  diagnosis: string;
  currentTrial: string;
}

interface TopBarProps {
  patientDetails: PatientDetails;
}

const TopBar: React.FC<TopBarProps> = ({ patientDetails }) => {
  return (
    <div className="h-16 bg-white border-b border-blue-100 fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6 shadow-sm">
      <div className="flex items-center space-x-4 bg-blue-50 rounded-full px-4 py-2 w-96">
        <Search className="h-5 w-5 text-primary-dark" />
        <input
          type="text"
          placeholder="Search trials, documents, messages..."
          className="border-none focus:ring-0 text-sm bg-transparent w-full"
        />
      </div>
      <div className="flex items-center space-x-6">
        <div className="relative">
          <Bell className="h-5 w-5 text-primary-dark hover:text-primary transition-colors cursor-pointer" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
        </div>
        <Settings className="h-5 w-5 text-primary-dark hover:text-primary transition-colors cursor-pointer" />
        <button 
          onClick={() => {
            localStorage.removeItem('role');
            window.location.href = '/patient-login';
          }}
          className="flex items-center text-primary-dark hover:text-primary transition-colors cursor-pointer"
          title="Logout"
        >
          <LogOut className="h-5 w-5" />
        </button>
        <div className="flex items-center space-x-3 border-l border-blue-100 pl-5">
          <div className="h-9 w-9 bg-gradient-to-br from-primary to-primary-dark rounded-full flex items-center justify-center shadow-md">
            <span className="text-white font-medium">
              {patientDetails.name.split(' ').map((n: string) => n[0]).join('')}
            </span>
          </div>
          <div>
            <span className="font-medium block">{patientDetails.name}</span>
            <span className="text-xs text-gray-500">{patientDetails.diagnosis}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const DashboardContent: React.FC = () => {
  const upcomingAppointments = [
    { date: "Mar 15, 2024", time: "9:00 AM", type: "Follow-up Visit" },
    { date: "Mar 22, 2024", time: "10:30 AM", type: "Treatment Session" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* AI Trial Match Alert */}
      <Alert className="bg-gradient-to-r from-blue-50 to-primary-light border-l-4 border-primary-dark shadow-md rounded-lg">
        <div className="flex items-center">
          <div className="bg-white p-2 rounded-full shadow-sm">
            <Brain className="h-5 w-5 text-primary-dark" />
          </div>
          <AlertDescription className="ml-3 font-medium">
            Our AI has found 3 new clinical trials that match your profile with 90%+ compatibility!
            <span className="text-primary-dark underline ml-2 cursor-pointer">View matches</span>
          </AlertDescription>
        </div>
      </Alert>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="overflow-hidden border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-primary-dark to-primary text-white pb-3">
            <CardTitle className="flex items-center">
              <Database className="h-5 w-5 mr-2" /> Current Trial Status
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">Trial ID</div>
                <div className="font-medium text-primary-dark bg-blue-50 px-2 py-0.5 rounded-md">ONCO-2024-BR</div>
              </div>
              <div className="text-sm text-gray-500 mt-2">Progress</div>
              <div className="w-full bg-gray-100 rounded-full h-3 shadow-inner">
                <div className="bg-gradient-to-r from-primary to-primary-dark h-3 rounded-full transition-all duration-1000 ease-in-out" style={{ width: '45%' }}></div>
              </div>
              <div className="flex justify-between items-center mt-1">
                <div className="text-sm font-medium text-primary-dark">Phase 2</div>
                <div className="text-sm text-gray-500">Week 6 of 12</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-primary to-blue-300 text-white pb-3">
            <CardTitle className="flex items-center">
              <Calendar className="h-5 w-5 mr-2" /> Next Appointments
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {upcomingAppointments.map((apt, index) => (
                <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 transition-colors">
                  <div className="bg-primary-light p-2 rounded-full">
                    <Calendar className="h-5 w-5 text-primary-dark" />
                  </div>
                  <div>
                    <div className="font-medium text-primary-dark">{apt.type}</div>
                    <div className="text-sm text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {apt.date} at {apt.time}
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <button className="text-sm text-primary-dark hover:text-primary font-medium flex items-center justify-center w-full">
                  <span>View all appointments</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-blue-400 to-green-400 text-white pb-3">
            <CardTitle className="flex items-center">
              <Activity className="h-5 w-5 mr-2" /> AI Health Score
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 relative">
            <div className="absolute top-0 right-0 -mt-12 mr-4 bg-white rounded-full p-2 shadow-lg">
              <div className="h-14 w-14 rounded-full border-4 border-white bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <span className="text-xl font-bold text-white">92</span>
              </div>
            </div>
            <div className="space-y-3 pt-2">
              <div className="flex items-center">
                <Brain className="h-5 w-5 text-primary-dark mr-2" />
                <span className="font-medium text-primary-dark">AI Health Analysis</span>
              </div>
              <div className="text-sm text-gray-600 bg-blue-50 p-2 rounded-md">
                Based on your latest health updates and trial adherence
              </div>
              <div className="flex items-center text-sm text-green-600 font-medium bg-green-50 p-2 rounded-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                5 points from last week
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="overflow-hidden border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-primary-dark to-blue-500 text-white pb-3">
            <CardTitle className="flex items-center">
              <Search className="h-5 w-5 mr-2" /> AI-Powered Trial Matches
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              {[
                {
                  title: 'Phase II Immunotherapy Trial',
                  match: '95%',
                  location: 'Memorial Cancer Center',
                  distance: '2.5 miles'
                },
                {
                  title: 'Targeted Therapy Study',
                  match: '92%',
                  location: 'University Research Hospital',
                  distance: '5.1 miles'
                }
              ].map((trial, index) => (
                <div key={index} className="p-4 border border-blue-100 rounded-xl hover:bg-blue-50 cursor-pointer transition-all duration-200 hover:shadow-md transform hover:-translate-y-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium text-primary-dark">{trial.title}</div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {trial.location}
                      </div>
                      <div className="text-sm text-gray-500 flex items-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {trial.distance}
                      </div>
                    </div>
                    <div className="bg-gradient-to-r from-primary to-primary-dark text-white font-medium px-3 py-1 rounded-full text-sm">
                      {trial.match} match
                    </div>
                  </div>
                </div>
              ))}
              <div className="text-center pt-2">
                <button className="text-sm text-primary-dark hover:text-primary font-medium flex items-center justify-center w-full">
                  <span>View all matches</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="overflow-hidden border-none shadow-lg rounded-xl hover:shadow-xl transition-shadow">
          <CardHeader className="bg-gradient-to-r from-green-400 to-blue-400 text-white pb-3">
            <CardTitle className="flex items-center">
              <Brain className="h-5 w-5 mr-2" /> Health Insights
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4">
            <div className="space-y-4">
              <div className="p-4 border border-green-100 rounded-xl bg-gradient-to-r from-white to-green-50 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-green-700 flex items-center">
                    <Activity className="h-5 w-5 mr-2 text-green-500" />
                    Symptom Tracking
                  </div>
                  <div className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full font-medium">
                    Improving
                  </div>
                </div>
                <div className="text-sm text-gray-600 bg-white p-2 rounded-md shadow-inner">
                  AI analysis shows reduced fatigue levels compared to last week
                </div>
              </div>

              <div className="p-4 border border-blue-100 rounded-xl bg-gradient-to-r from-white to-blue-50 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium text-blue-700 flex items-center">
                    <Brain className="h-5 w-5 mr-2 text-blue-500" />
                    Treatment Response
                  </div>
                  <div className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full font-medium">
                    Positive
                  </div>
                </div>
                <div className="text-sm text-gray-600 bg-white p-2 rounded-md shadow-inner">
                  Positive response to current protocol based on latest markers
                </div>
              </div>
              
              <div className="text-center pt-2">
                <button className="text-sm text-primary-dark hover:text-primary font-medium flex items-center justify-center w-full">
                  <span>View detailed health report</span>
                  <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PatientPortal: React.FC = () => {
  const router = useRouter();
  // Temporarily commented out for testing
  // useEffect(() => {
  //   // Check if user is logged in
  //   const role = localStorage.getItem('role');
  //   if (!role || role !== 'Patient') {
  //     router.push('/patient-login');
  //   }
  // }, [router]);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const patientDetails = {
    name: "Sarah Thompson",
    age: 45,
    diagnosis: "Stage II Breast Cancer",
    currentTrial: "ONCO-2024-BR"
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <div className="ml-64 flex-1">
        <TopBar patientDetails={patientDetails} />
        <div className="mt-16">
          <DashboardContent />
        </div>
      </div>
    </div>
  );
};

export default PatientPortal;
