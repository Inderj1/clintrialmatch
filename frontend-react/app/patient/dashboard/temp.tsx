'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PatientDashboard() {
    const router = useRouter();

    useEffect(() => {
        // Check if user is logged in
        const role = localStorage.getItem('role');
        if (!role || role !== 'Patient') {
            router.push('/patient-login');
        }
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('role');
        router.push('/patient-login');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="bg-white shadow rounded-lg">
                    {/* Header */}
                    <div className="px-6 py-4 border-b border-gray-200">
                        <div className="flex items-center justify-between">
                            <h1 className="text-2xl font-bold text-gray-900">Patient Dashboard</h1>
                            <button
                                onClick={handleLogout}
                                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700"
                            >
                                Logout
                            </button>
                        </div>
                    </div>

                    {/* Main Content */}
                    <div className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Trial Information */}
                            <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Trial Information</h3>
                                <p className="text-gray-600">Access your current trial details and schedule.</p>
                                <button className="mt-4 text-blue-600 hover:text-blue-800">View Details →</button>
                            </div>

                            {/* Appointments */}
                            <div className="bg-green-50 p-6 rounded-lg border border-green-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Appointments</h3>
                                <p className="text-gray-600">Schedule and manage your appointments.</p>
                                <button className="mt-4 text-green-600 hover:text-green-800">Manage Schedule →</button>
                            </div>

                            {/* Documents */}
                            <div className="bg-purple-50 p-6 rounded-lg border border-purple-100">
                                <h3 className="text-lg font-semibold text-gray-900 mb-4">Documents</h3>
                                <p className="text-gray-600">Access and upload trial-related documents.</p>
                                <button className="mt-4 text-purple-600 hover:text-purple-800">View Documents →</button>
                            </div>
                        </div>

                        {/* Upcoming Appointments */}
                        <div className="mt-8">
                            <h2 className="text-xl font-semibold text-gray-900 mb-4">Upcoming Appointments</h2>
                            <div className="bg-white shadow overflow-hidden sm:rounded-md">
                                <ul className="divide-y divide-gray-200">
                                    <li className="px-6 py-4">No upcoming appointments</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
