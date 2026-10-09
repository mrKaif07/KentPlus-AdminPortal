'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Search, Filter, ChevronRight, UserCheck, CheckCircle2, Clock, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_DISPATCH = [
  { id: 'DEL-8942', customer: 'Rahul Sharma', area: 'Saket', cans: 2, driver: 'Rajesh Kumar', status: 'In Transit', time: '8:15 AM', otpVerified: false },
  { id: 'DEL-8943', customer: 'Vikram Malhotra', area: 'Saket', cans: 2, driver: 'Rajesh Kumar', status: 'Pending', time: '8:30 AM', otpVerified: false },
  { id: 'DEL-8944', customer: 'Pooja Verma', area: 'Saket', cans: 3, driver: 'Rajesh Kumar', status: 'Pending', time: '8:45 AM', otpVerified: false },
  { id: 'DEL-8935', customer: 'Meenakshi Iyer', area: 'Saket', cans: 2, driver: 'Rajesh Kumar', status: 'Delivered', time: '7:50 AM', otpVerified: true },
  { id: 'DEL-8930', customer: 'Kunal Kapoor', area: 'Greater Kailash', cans: 3, driver: 'Manoj Yadav', status: 'Delivered', time: '7:40 AM', otpVerified: true },
  { id: 'DEL-8928', customer: 'Amit Saxena', area: 'Malviya Nagar', cans: 2, driver: 'Vikram Singh', status: 'Delivered', time: '7:30 AM', otpVerified: true },
  { id: 'DEL-8920', customer: 'Sunil Sethi', area: 'Malviya Nagar', cans: 2, driver: 'Vikram Singh', status: 'Delivered', time: '7:15 AM', otpVerified: true }
];

export default function AdminDeliveriesPage() {
  const [deliveries, setDeliveries] = useState(MOCK_DISPATCH);
  const [filter, setFilter] = useState<'All' | 'Pending' | 'In Transit' | 'Delivered'>('All');
  const [search, setSearch] = useState('');
  const [reassignModal, setReassignModal] = useState<any | null>(null);

  const filtered = deliveries.filter((d) => {
    if (filter !== 'All' && d.status !== filter) return false;
    if (search && !d.customer.toLowerCase().includes(search.toLowerCase()) && !d.id.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  const handleReassign = (newDriver: string) => {
    if (!reassignModal) return;
    setDeliveries(deliveries.map((d) => (d.id === reassignModal.id ? { ...d, driver: newDriver } : d)));
    setReassignModal(null);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Delivery Dispatch Grid</h1>
            <p className="text-xs text-kp-muted mt-0.5">Real-time status of all daily route deliveries and vehicle dispatch assignments</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
              124 Pending Delivery Stops
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-kp-border shadow-xs">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            {(['All', 'In Transit', 'Pending', 'Delivered'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-2 rounded-xl text-xs font-bold capitalize transition-all ${
                  filter === f
                    ? 'bg-kp-primary text-white shadow-xs'
                    : 'bg-kp-ice text-kp-muted hover:text-kp-navy'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search customer, ID, or driver..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-kp-primary"
            />
          </div>
        </div>

        {/* Dispatch Table */}
        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Trip Ref</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Assigned Driver</th>
                  <th className="py-3 px-4">Time Window</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {filtered.map((d) => (
                  <tr key={d.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{d.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{d.customer}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{d.area}</td>
                    <td className="py-3.5 px-4 font-extrabold text-kp-navy">{d.cans} × 20L Jars</td>
                    <td className="py-3.5 px-4 text-kp-navy font-medium">
                      <span>{d.driver}</span>
                      <button
                        onClick={() => setReassignModal(d)}
                        className="text-[10px] text-kp-primary block hover:underline"
                      >
                        Reassign Driver
                      </button>
                    </td>
                    <td className="py-3.5 px-4 text-kp-muted">{d.time}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        d.status === 'Delivered'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : d.status === 'In Transit'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200 animate-pulse'
                          : 'bg-slate-100 text-slate-700 border border-slate-200'
                      }`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/deliveries/${d.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-kp-primary hover:underline"
                      >
                        Inspect <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Reassign Driver Modal */}
        {reassignModal && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-kp-border">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border mb-4">
                <h3 className="font-extrabold text-base text-kp-navy">Reassign Delivery Driver</h3>
                <button onClick={() => setReassignModal(null)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-xs text-kp-muted mb-4">
                Select a new delivery partner for <strong>{reassignModal.customer}</strong> ({reassignModal.id}).
              </p>

              <div className="space-y-2 mb-6">
                {['Rajesh Kumar (Saket)', 'Vikram Singh (Malviya Nagar)', 'Manoj Yadav (GK)', 'Deepak Sharma (Lajpat)'].map((driverName) => (
                  <button
                    key={driverName}
                    type="button"
                    onClick={() => handleReassign(driverName.split(' ')[0] + ' ' + driverName.split(' ')[1])}
                    className="w-full p-3 rounded-xl border border-kp-border hover:border-kp-primary bg-kp-ice/50 hover:bg-kp-light text-left text-xs font-bold text-kp-navy transition-all"
                  >
                    🚚 {driverName}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={() => setReassignModal(null)}
                className="w-full py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
