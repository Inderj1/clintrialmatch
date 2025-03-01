

'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/Card';
import { Alert, AlertDescription } from '@/components/ui/Alert';
import {
  Brain, Calendar, Activity, Search, MessageSquare, Clock,
  ChevronRight, FileText, Bell, Settings, Home, ClipboardList,
  Users, ChevronDown, Database
} from 'lucide-react';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({ activeMenu, setActiveMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState({});

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

  const toggleSubmenu = (path) => {
    setExpandedMenus(prev => ({
      ...prev,
      [path]: !prev[path]
    }));
  };

  return (
    <div className="w-64 bg-white border-r h-screen fixed left-0 overflow-y-auto">
      <div className="p-4 border-b">
        <h1 className="text-xl font-bold">Patient Portal</h1>
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

const TopBar = ({ patientDetails }) => {
  return (
    <div className="h-16 bg-white border-b fixed top-0 right-0 left-64 z-10 flex items-center justify-between px-6">
      <div className="flex items-center space-x-4">
        <Search className="h-5 w-5 text-gray-400" />
        <input
          type="text"
          placeholder="Search trials, documents, messages..."
          className="border-none focus:ring-0 text-sm"
        />
      </div>
      <div className="flex items-center space-x-4">
        <Bell className="h-5 w-5 text-gray-400 cursor-pointer" />
        <Settings className="h-5 w-5 text-gray-400 cursor-pointer" />
        <div className="flex items-center space-x-3">
          <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-medium">
              {patientDetails.name.split(' ').map(n => n[0]).join('')}
            </span>
          </div>
          <span className="font-medium">{patientDetails.name}</span>
        </div>
      </div>
    </div>
  );
};

const DashboardContent = () => {
  const upcomingAppointments = [
    { date: "Mar 15, 2024", time: "9:00 AM", type: "Follow-up Visit" },
    { date: "Mar 22, 2024", time: "10:30 AM", type: "Treatment Session" }
  ];

  return (
    <div className="p-6 space-y-6">
      {/* AI Trial Match Alert */}
      <Alert className="bg-blue-50 border-blue-200">
        <Brain className="h-5 w-5 text-blue-500" />
        <AlertDescription className="ml-2">
          Our AI has found 3 new clinical trials that match your profile with 90%+ compatibility!
        </AlertDescription>
      </Alert>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Current Trial Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="text-sm text-gray-500">Trial ID</div>
              <div className="font-medium">ONCO-2024-BR</div>
              <div className="text-sm text-gray-500">Progress</div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '45%' }}></div>
              </div>
              <div className="text-sm text-gray-500">Phase 2 - Week 6 of 12</div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Next Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {upcomingAppointments.map((apt, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-gray-400" />
                  <div>
                    <div className="font-medium">{apt.type}</div>
                    <div className="text-sm text-gray-500">{apt.date} at {apt.time}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>AI Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">92/100</span>
                <Activity className="h-5 w-5 text-blue-600" />
              </div>
              <div className="text-sm text-gray-500">
                Based on your latest health updates and trial adherence
              </div>
              <div className="text-sm text-green-600">
                ↑ 5 points from last week
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>AI-Powered Trial Matches</CardTitle>
          </CardHeader>
          <CardContent>
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
                <div key={index} className="p-4 border rounded-lg hover:bg-gray-50 cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <div className="font-medium">{trial.title}</div>
                      <div className="text-sm text-gray-500">{trial.location}</div>
                      <div className="text-sm text-gray-500">{trial.distance}</div>
                    </div>
                    <div className="text-blue-600 font-medium">{trial.match} match</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Health Insights</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Symptom Tracking</div>
                  <Activity className="h-5 w-5 text-green-500" />
                </div>
                <div className="text-sm text-gray-500">
                  AI analysis shows reduced fatigue levels compared to last week
                </div>
              </div>

              <div className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">Treatment Response</div>
                  <Brain className="h-5 w-5 text-blue-500" />
                </div>
                <div className="text-sm text-gray-500">
                  Positive response to current protocol based on latest markers
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PatientPortal = () => {
  const router = useRouter();
  useEffect(() => {
    // Check if user is logged in
    const role = localStorage.getItem('role');
    if (!role || role !== 'Patient') {
      router.push('/patient-login');
    }
  }, [router]);
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const patientDetails = {
    name: "Sarah Thompson",
    age: 45,
    diagnosis: "Stage II Breast Cancer",
    currentTrial: "ONCO-2024-BR"
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
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