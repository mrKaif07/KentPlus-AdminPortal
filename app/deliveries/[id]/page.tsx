'use client';

import { use } from 'react';
import Link from 'next/link';
import { ArrowLeft, Truck, CheckCircle2, ShieldCheck, MapPin, KeyRound, Phone } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminDeliveryDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const deliveryId = unwrappedParams.id;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/deliveries"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-kp-navy tracking-tight">Trip #{deliveryId}</h1>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200">
                In Transit (ETA 8:15 AM)
              </span>
            </div>
            <p className="text-xs text-kp-muted">Customer: Rahul Sharma • Saket Sector</p>
          </div>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-kp-ice p-4 rounded-2xl border border-kp-border">
              <span className="text-xs text-kp-muted block">Assigned Driver</span>
              <span className="text-base font-extrabold text-kp-navy mt-1 block">Rajesh Kumar</span>
              <span className="text-[11px] text-kp-muted">Tempo DL 1V 3422</span>
            </div>
            <div className="bg-kp-ice p-4 rounded-2xl border border-kp-border">
              <span className="text-xs text-kp-muted block">Cans to Deliver</span>
              <span className="text-base font-extrabold text-kp-navy mt-1 block">2 × 20L Water Jars</span>
              <span className="text-[11px] text-kp-muted">Value: ₹130 (Monthly Ledger)</span>
            </div>
            <div className="bg-kp-ice p-4 rounded-2xl border border-kp-border">
              <span className="text-xs text-kp-muted block">Security OTP Verification</span>
              <span className="text-base font-extrabold text-kp-primary font-mono mt-1 block">OTP: 1234</span>
              <span className="text-[11px] text-amber-600 font-semibold">● Awaiting Delivery Conf</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm text-kp-navy mb-2">Delivery Address</h3>
            <p className="p-4 rounded-2xl bg-kp-ice border border-kp-border text-xs text-kp-navy leading-relaxed">
              Flat 302, Block M, Pocket 4, Saket, New Delhi - 110017 (3rd Floor, Lift: Yes). Contact: +91 98111 22334.
            </p>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
