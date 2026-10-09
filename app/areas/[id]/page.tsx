'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, MapPin, Users, Truck, Package, IndianRupee } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminAreaDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const areaId = unwrappedParams.id;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/areas"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-kp-navy tracking-tight">Saket Sector Performance</h1>
              <span className="font-mono text-xs font-bold text-kp-primary bg-kp-light px-2 py-0.5 rounded-md">
                {areaId}
              </span>
            </div>
            <p className="text-xs text-kp-muted">Pincode: 110017 • Refill Hub: Okhla Plant Hub 1</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Subscribers</span>
            <div className="text-2xl font-black text-kp-navy mt-1">280 Accounts</div>
            <span className="text-[11px] text-emerald-600 font-bold">+12 this month</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Daily Volume</span>
            <div className="text-2xl font-black text-kp-primary mt-1">240 Cans / day</div>
            <span className="text-[11px] text-kp-muted">4,800 Litres</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Monthly Revenue</span>
            <div className="text-2xl font-black text-emerald-700 mt-1">₹4,68,000</div>
            <span className="text-[11px] text-kp-muted">Avg ₹1,670/account</span>
          </div>
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Assigned Drivers</span>
            <div className="text-2xl font-black text-kp-navy mt-1">2 Drivers</div>
            <span className="text-[11px] text-kp-muted">Rajesh Kumar, Sunil</span>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-4">
          <h3 className="font-bold text-base text-kp-navy">Route Sectors in Saket</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="font-bold text-kp-navy block">Block J & M Pockets</span>
              <span className="text-kp-muted">140 Customers • Morning Slot (6:30 – 8:30 AM)</span>
            </div>
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="font-bold text-kp-navy block">Press Enclave & Parijat Apartments</span>
              <span className="text-kp-muted">90 Customers • Morning Slot (8:30 – 10:00 AM)</span>
            </div>
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="font-bold text-kp-navy block">Anupam Complex & Commercial Road</span>
              <span className="text-kp-muted">50 Commercial Units • Daily bulk 20L supply</span>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
