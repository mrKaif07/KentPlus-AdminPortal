'use client';

import { BarChart3, Download, TrendingUp, Users, Truck, Package, CreditCard } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';
import { BarChart, Bar, AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const MONTHLY_GROWTH = [
  { month: 'May', cans: 14200, revenue: 923000 },
  { month: 'Jun', cans: 16800, revenue: 1092000 },
  { month: 'Jul', cans: 18100, revenue: 1176500 },
  { month: 'Aug', cans: 19500, revenue: 1267500 },
  { month: 'Sep', cans: 20400, revenue: 1326000 },
  { month: 'Oct (Est)', cans: 22800, revenue: 1482000 }
];

export default function AdminReportsPage() {
  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Business Intelligence & Reports</h1>
            <p className="text-xs text-kp-muted mt-0.5">Comprehensive analytics on revenue run-rate, fleet efficiency, and sector growth</p>
          </div>

          <button
            onClick={() => alert('Exporting full CSV report dataset for Kent Plus South Delhi operations!')}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" /> Export Operations CSV
          </button>
        </div>

        {/* Growth Chart */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-bold text-base text-kp-navy">Monthly Revenue Run-Rate (₹)</h3>
              <p className="text-xs text-kp-muted">Past 6 months growth trend</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-xl">
              +60.5% Growth since May
            </span>
          </div>

          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={MONTHLY_GROWTH}>
                <defs>
                  <linearGradient id="growthGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="month" stroke="#64748B" fontSize={11} tickLine={false} />
                <YAxis stroke="#64748B" fontSize={11} tickLine={false} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#071923', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={2.5} fill="url(#growthGrad)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* 2-Column Metrics */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <h3 className="font-bold text-base text-kp-navy mb-4">Driver Efficiency Leaderboard</h3>
            <div className="space-y-3 text-xs">
              {[
                { driver: 'Rajesh Kumar', area: 'Saket', rate: '99.4% On-Time', rating: '4.9★', trips: '1,840 Trips' },
                { driver: 'Vikram Singh', area: 'Malviya Nagar', rate: '98.8% On-Time', rating: '4.8★', trips: '1,620 Trips' },
                { driver: 'Manoj Yadav', area: 'Greater Kailash', rate: '99.1% On-Time', rating: '4.9★', trips: '1,590 Trips' },
                { driver: 'Deepak Sharma', area: 'Lajpat Nagar', rate: '97.9% On-Time', rating: '4.7★', trips: '1,430 Trips' }
              ].map((d, i) => (
                <div key={d.driver} className="p-3.5 rounded-2xl bg-kp-ice/50 border border-kp-border flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-kp-primary text-white font-bold flex items-center justify-center text-xs">
                      {i + 1}
                    </span>
                    <div>
                      <span className="font-bold text-kp-navy block">{d.driver}</span>
                      <span className="text-[11px] text-kp-muted">{d.area} • {d.trips}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-emerald-600 block">{d.rate}</span>
                    <span className="text-[11px] text-amber-600 font-bold">{d.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <h3 className="font-bold text-base text-kp-navy mb-4">Customer Cohort Health</h3>
            <div className="space-y-3 text-xs">
              <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border flex justify-between">
                <div>
                  <span className="text-kp-muted block">Subscriber Churn Rate:</span>
                  <span className="font-black text-emerald-700 text-lg">1.8%</span>
                </div>
                <div className="text-right">
                  <span className="text-kp-muted block">Customer Lifetime Value:</span>
                  <span className="font-black text-kp-navy text-lg">₹34,800</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border flex justify-between">
                <div>
                  <span className="text-kp-muted block">Daily On-Time Delivery SLA:</span>
                  <span className="font-black text-emerald-700 text-lg">98.9%</span>
                </div>
                <div className="text-right">
                  <span className="text-kp-muted block">Avg Delivery Time:</span>
                  <span className="font-black text-kp-navy text-lg">7:42 AM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
