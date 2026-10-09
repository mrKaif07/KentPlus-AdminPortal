'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import {
  ArrowLeft, User, Phone, MapPin, Truck, CreditCard,
  FileText, AlertCircle, CheckCircle2, Calendar
} from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminCustomerDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const custId = unwrappedParams.id;
  const [tab, setTab] = useState<'overview' | 'deliveries' | 'payments' | 'invoices'>('overview');

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-6xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/customers"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-kp-navy tracking-tight">Rahul Sharma</h1>
              <span className="font-mono text-xs font-bold text-kp-primary bg-kp-light px-2 py-0.5 rounded-md">
                {custId}
              </span>
            </div>
            <p className="text-xs text-kp-muted">Saket Sector • Registered since March 2024</p>
          </div>
        </div>

        {/* 360 Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Subscription Plan</span>
            <div className="text-lg font-black text-kp-navy mt-1">Daily 2 Cans (20L)</div>
            <span className="text-[11px] text-emerald-600 font-bold">● Active (Driver: Rajesh)</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Total Cans Consumed</span>
            <div className="text-lg font-black text-kp-navy mt-1">420 Cans</div>
            <span className="text-[11px] text-kp-muted">Over 7 months</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Lifetime Revenue</span>
            <div className="text-lg font-black text-emerald-700 mt-1">₹27,300</div>
            <span className="text-[11px] text-emerald-600 font-bold">100% on-time payer</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Security Deposit Held</span>
            <div className="text-lg font-black text-kp-primary mt-1">₹300.00</div>
            <span className="text-[11px] text-kp-muted">2 Jars deposit (Refundable)</span>
          </div>
        </div>

        {/* Tabs Bar */}
        <div className="flex border-b border-kp-border bg-white rounded-2xl p-1.5 shadow-xs">
          {[
            { id: 'overview', label: 'Customer Overview' },
            { id: 'deliveries', label: 'Delivery Trips (Oct)' },
            { id: 'payments', label: 'Payment Ledger' },
            { id: 'invoices', label: 'Monthly Statements' }
          ].map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id as any)}
              className={`flex-1 py-2 px-3 rounded-xl text-xs font-bold transition-all ${
                tab === t.id
                  ? 'bg-kp-primary text-white shadow-xs'
                  : 'text-kp-muted hover:text-kp-navy'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          {tab === 'overview' && (
            <div className="space-y-6">
              <h3 className="font-bold text-base text-kp-navy">Contact & Address Information</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border space-y-2">
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Mobile WhatsApp:</span>
                    <span className="font-bold text-kp-navy">+91 98111 22334</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Email ID:</span>
                    <span className="font-bold text-kp-navy">rahul.sharma@example.com</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Preferred Delivery Slot:</span>
                    <span className="font-bold text-kp-primary">Morning (6:30 AM - 9:30 AM)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border space-y-2">
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Delivery Address:</span>
                    <span className="font-bold text-kp-navy">Flat 302, Block M, Saket, Delhi</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Floor & Lift Access:</span>
                    <span className="font-bold text-kp-navy">3rd Floor (Working Lift: Yes)</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-kp-muted">Assigned Route Van:</span>
                    <span className="font-bold text-amber-600">DL 1V 3422 (Driver Rajesh)</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {tab === 'deliveries' && (
            <div className="space-y-3">
              <h3 className="font-bold text-base text-kp-navy mb-2">October 2026 Deliveries</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-kp-ice text-kp-navy font-semibold uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Trip ID</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Cans</th>
                      <th className="py-2.5 px-3">Empty Collected</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kp-border">
                    {[
                      { id: 'DEL-8942', date: '07 Oct 2026', cans: 2, empty: 2, status: 'In Transit' },
                      { id: 'DEL-8910', date: '06 Oct 2026', cans: 2, empty: 2, status: 'Delivered' },
                      { id: 'DEL-8867', date: '05 Oct 2026', cans: 2, empty: 1, status: 'Delivered' },
                      { id: 'DEL-8821', date: '04 Oct 2026', cans: 3, empty: 2, status: 'Delivered' }
                    ].map((row) => (
                      <tr key={row.id}>
                        <td className="py-3 px-3 font-mono font-bold text-kp-navy">{row.id}</td>
                        <td className="py-3 px-3 text-kp-navy">{row.date}</td>
                        <td className="py-3 px-3 font-bold text-kp-navy">{row.cans} Cans</td>
                        <td className="py-3 px-3 text-kp-muted">{row.empty} Empty</td>
                        <td className="py-3 px-3">
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {row.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'payments' && (
            <div className="space-y-3">
              <h3 className="font-bold text-base text-kp-navy mb-2">Payment Transaction Log</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-kp-ice text-kp-navy font-semibold uppercase">
                    <tr>
                      <th className="py-2.5 px-3">Trans ID</th>
                      <th className="py-2.5 px-3">Date</th>
                      <th className="py-2.5 px-3">Amount</th>
                      <th className="py-2.5 px-3">Method</th>
                      <th className="py-2.5 px-3">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kp-border">
                    <tr className="hover:bg-kp-ice/30">
                      <td className="py-3 px-3 font-mono font-bold text-kp-navy">PAY-9041</td>
                      <td className="py-3 px-3">01 Oct 2026</td>
                      <td className="py-3 px-3 font-bold text-kp-navy">₹3,900</td>
                      <td className="py-3 px-3">UPI (Google Pay)</td>
                      <td className="py-3 px-3 text-emerald-600 font-bold">✓ Settled</td>
                    </tr>
                    <tr className="hover:bg-kp-ice/30">
                      <td className="py-3 px-3 font-mono font-bold text-kp-navy">PAY-8120</td>
                      <td className="py-3 px-3">01 Sep 2026</td>
                      <td className="py-3 px-3 font-bold text-kp-navy">₹3,900</td>
                      <td className="py-3 px-3">Net Banking</td>
                      <td className="py-3 px-3 text-emerald-600 font-bold">✓ Settled</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {tab === 'invoices' && (
            <div className="space-y-3">
              <h3 className="font-bold text-base text-kp-navy mb-2">Generated Billing Statements</h3>
              <div className="divide-y divide-kp-border">
                <div className="py-3 flex justify-between items-center text-xs">
                  <div>
                    <span className="font-bold text-kp-navy block">INV-2026-09 (September Statement)</span>
                    <span className="text-[11px] text-kp-muted">60 Cans • ₹3,900 • Generated 30 Sep</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                    Paid
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
