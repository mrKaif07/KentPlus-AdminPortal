'use client';

import Link from 'next/link';
import {
  Users, Truck, Package, CreditCard, PartyPopper, CheckCircle2,
  TrendingUp, ArrowUpRight, ArrowDownRight, Clock, MapPin,
  ChevronRight, AlertCircle, ShieldCheck
} from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const REVENUE_TREND = [
  { day: '01 Oct', rev: 14200 },
  { day: '02 Oct', rev: 15800 },
  { day: '03 Oct', rev: 16100 },
  { day: '04 Oct', rev: 18900 },
  { day: '05 Oct', rev: 17400 },
  { day: '06 Oct', rev: 19200 },
  { day: '07 Oct', rev: 18500 }
];

const SECTOR_DELIVERIES = [
  { area: 'Saket', cans: 240 },
  { area: 'Malviya Ngr', cans: 210 },
  { area: 'Lajpat Ngr', cans: 195 },
  { area: 'GK 1 & 2', cans: 280 },
  { area: 'Vasant Kunj', cans: 160 },
  { area: 'Hauz Khas', cans: 130 }
];

const LIVE_DISPATCH_FEED = [
  { id: 'DEL-8942', time: 'Just now', event: 'Driver Rajesh Kumar marked stop #13 In Transit (Saket)', status: 'In Transit' },
  { id: 'DEL-8941', time: '4 mins ago', event: 'Driver Vikram Singh completed delivery (2 Cans) at GK 1', status: 'Delivered' },
  { id: 'EVT-9921', time: '18 mins ago', event: 'New Event Booking received: Diwali Society Gathering (25 Cans)', status: 'New Event' },
  { id: 'PAY-9042', time: '25 mins ago', event: 'Online payment ₹1,950 received via UPI from Sunil Sethi', status: 'Payment' }
];

export default function AdminDashboardPage() {
  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        {/* Welcome Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                ● Live Operations Normal
              </span>
              <span className="text-xs text-kp-muted">Okhla Central Hub 1 & 2</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-black text-kp-navy tracking-tight">
              Executive Command Overview
            </h1>
            <p className="text-xs text-kp-muted mt-0.5">Real-time status of customers, daily dispatch volume, and cash settlements</p>
          </div>

          <div className="flex items-center gap-2">
            <Link
              href="/deliveries"
              className="px-5 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
            >
              Open Dispatch Grid
            </Link>
          </div>
        </div>

        {/* 8 Metric KPIs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Total Customers</span>
              <Users className="w-4 h-4 text-kp-primary" />
            </div>
            <div className="text-2xl font-black text-kp-navy">1,840</div>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
              <ArrowUpRight className="w-3 h-3" /> +14 this week
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Active Daily Subs</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-kp-navy">1,420</div>
            <span className="text-[11px] text-kp-muted mt-1 block">92.4% Retention</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Today's Deliveries</span>
              <Truck className="w-4 h-4 text-amber-500" />
            </div>
            <div className="text-2xl font-black text-kp-navy">310 Stops</div>
            <span className="text-[11px] text-amber-600 font-semibold mt-1 block">186 Done • 124 Pending</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Cans Delivered Today</span>
              <Package className="w-4 h-4 text-kp-primary" />
            </div>
            <div className="text-2xl font-black text-kp-primary">680 Cans</div>
            <span className="text-[11px] text-kp-muted mt-1 block">13,600 Litres Pure RO</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>October Revenue</span>
              <CreditCard className="w-4 h-4 text-emerald-600" />
            </div>
            <div className="text-2xl font-black text-emerald-700">₹4,82,500</div>
            <span className="text-[11px] text-emerald-600 font-semibold flex items-center gap-0.5 mt-1">
              <ArrowUpRight className="w-3 h-3" /> +18.4% vs Sep
            </span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Pending Ledgers</span>
              <CreditCard className="w-4 h-4 text-rose-500" />
            </div>
            <div className="text-2xl font-black text-rose-600">₹28,400</div>
            <span className="text-[11px] text-rose-600 font-semibold mt-1 block">Due Nov 05</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Event Bookings</span>
              <PartyPopper className="w-4 h-4 text-purple-600" />
            </div>
            <div className="text-2xl font-black text-purple-700">12 Bookings</div>
            <span className="text-[11px] text-kp-muted mt-1 block">3 Weddings • 9 Functions</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <div className="flex justify-between items-center text-kp-muted mb-1 text-xs font-semibold">
              <span>Fleet Vehicles</span>
              <Truck className="w-4 h-4 text-blue-600" />
            </div>
            <div className="text-2xl font-black text-blue-700">8 / 8 Active</div>
            <span className="text-[11px] text-emerald-600 font-semibold mt-1 block">0 Breakdowns</span>
          </div>
        </div>

        {/* 2-Column Analytics Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-kp-navy text-base">October Daily Revenue Trend</h3>
                <p className="text-xs text-kp-muted">Daily water billing run-rate</p>
              </div>
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-xl">
                Avg: ₹17,185 / day
              </span>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_TREND}>
                  <defs>
                    <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#16B8E8" stopOpacity={0.4} />
                      <stop offset="95%" stopColor="#16B8E8" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="day" stroke="#64748B" fontSize={11} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#071923', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                  <Area type="monotone" dataKey="rev" stroke="#16B8E8" strokeWidth={2.5} fill="url(#revGrad)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-bold text-kp-navy text-base">Cans Delivered by Sector</h3>
                <p className="text-xs text-kp-muted">Volume distribution across Delhi zones</p>
              </div>
              <Link href="/areas" className="text-xs font-semibold text-kp-primary hover:underline">
                All Sectors →
              </Link>
            </div>

            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={SECTOR_DELIVERIES}>
                  <XAxis dataKey="area" stroke="#64748B" fontSize={10} tickLine={false} />
                  <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                  <Tooltip
                    contentStyle={{ backgroundColor: '#071923', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                  <Bar dataKey="cans" fill="#0B8FC4" radius={[6, 6, 0, 0]} barSize={24} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Live Dispatch Feed & Fleet Status */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-7 bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-kp-navy text-base">Live Operational Feed</h3>
              <span className="text-[11px] text-kp-muted">Auto-refreshed</span>
            </div>

            <div className="space-y-3">
              {LIVE_DISPATCH_FEED.map((feed, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-kp-ice/50 border border-kp-border/80 flex items-center justify-between gap-4 text-xs">
                  <div>
                    <span className="font-bold text-kp-navy block">{feed.event}</span>
                    <span className="text-[11px] text-kp-muted">{feed.time}</span>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white border border-kp-border text-kp-navy shrink-0">
                    {feed.status}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 bg-white p-6 rounded-3xl border border-kp-border shadow-xs flex flex-col justify-between">
            <div>
              <h3 className="font-bold text-kp-navy text-base mb-3">Inventory Health</h3>
              <div className="space-y-3 text-xs">
                <div className="flex justify-between p-3 rounded-xl bg-kp-light border border-kp-border">
                  <span className="text-kp-muted">Filled Jars at Central Plant:</span>
                  <span className="font-bold text-kp-navy">1,240 Cans</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-kp-ice border border-kp-border">
                  <span className="text-kp-muted">Empty Jars Being Sanitized:</span>
                  <span className="font-bold text-kp-navy">890 Jars</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-kp-ice border border-kp-border">
                  <span className="text-kp-muted">Jars in Fleet Vehicles:</span>
                  <span className="font-bold text-kp-navy">420 Jars</span>
                </div>
                <div className="flex justify-between p-3 rounded-xl bg-kp-ice border border-kp-border">
                  <span className="text-kp-muted">Damaged / Retired Jars:</span>
                  <span className="font-bold text-rose-600">12 Jars (0.3%)</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-kp-border mt-4">
              <Link
                href="/inventory"
                className="w-full py-2.5 rounded-xl bg-kp-navy text-white text-xs font-bold flex items-center justify-center gap-1.5 hover:bg-kp-navy/90"
              >
                Open Full Can Inventory Ledger <ChevronRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
