'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, Phone, Star, CheckCircle2, MapPin, IndianRupee, Package } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminSupplierDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const supplierId = unwrappedParams.id;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/suppliers"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-kp-navy tracking-tight">Rajesh Kumar</h1>
              <span className="font-mono text-xs font-bold text-amber-600 bg-amber-50 px-2 py-0.5 rounded-md border border-amber-200">
                {supplierId}
              </span>
            </div>
            <p className="text-xs text-kp-muted">Vehicle DL 1V 3422 • Primary Sector: Saket</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Driver Rating</span>
            <div className="text-xl font-black text-amber-600 mt-1">★ 4.9 / 5.0</div>
            <span className="text-[11px] text-kp-muted">420 customer reviews</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Today's Progress</span>
            <div className="text-xl font-black text-kp-navy mt-1">24 Delivered</div>
            <span className="text-[11px] text-kp-muted">16 pending stops</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Cash in Hand</span>
            <div className="text-xl font-black text-emerald-700 mt-1">₹1,560.00</div>
            <span className="text-[11px] text-kp-muted">To be reconciled today</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Assigned Customers</span>
            <div className="text-xl font-black text-kp-primary mt-1">38 Accounts</div>
            <span className="text-[11px] text-kp-muted">Saket Sector Route</span>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-4">
          <h3 className="font-bold text-base text-kp-navy">Driver Contact & Logistics Details</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border space-y-2">
              <div className="flex justify-between">
                <span className="text-kp-muted">Direct Mobile Phone:</span>
                <span className="font-bold text-kp-navy">+91 98765 00001</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Vehicle Registration:</span>
                <span className="font-bold text-kp-navy">DL 1V 3422 (Tempo Bolero)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Max Can Capacity:</span>
                <span className="font-bold text-kp-navy">60 Cans (20L)</span>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border space-y-2">
              <div className="flex justify-between">
                <span className="text-kp-muted">Duty Shift:</span>
                <span className="font-bold text-emerald-700">Morning (5:30 AM – 12:00 PM)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Assigned Hub Plant:</span>
                <span className="font-bold text-kp-navy">Okhla Industrial Phase-III</span>
              </div>
              <div className="flex justify-between">
                <span className="text-kp-muted">Empty Cans Balance:</span>
                <span className="font-bold text-kp-navy">22 Empty Jars in Vehicle</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
