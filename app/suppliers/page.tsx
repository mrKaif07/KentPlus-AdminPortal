'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Truck, Search, Plus, Star, MapPin, Phone, ChevronRight, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_SUPPLIERS = [
  { id: 'DRV-101', name: 'Rajesh Kumar', phone: '9876500001', vehicle: 'DL 1V 3422', area: 'Saket', rating: 4.9, activeDeliveries: 16, completedToday: 24, cashInHand: 1560, status: 'On Duty' },
  { id: 'DRV-102', name: 'Vikram Singh', phone: '9876500002', vehicle: 'DL 1V 8812', area: 'Malviya Nagar', rating: 4.8, activeDeliveries: 12, completedToday: 28, cashInHand: 2100, status: 'On Duty' },
  { id: 'DRV-103', name: 'Manoj Yadav', phone: '9876500003', vehicle: 'DL 1V 4490', area: 'Greater Kailash', rating: 4.9, activeDeliveries: 18, completedToday: 32, cashInHand: 1820, status: 'On Duty' },
  { id: 'DRV-104', name: 'Deepak Sharma', phone: '9876500004', vehicle: 'DL 1V 7711', area: 'Lajpat Nagar', rating: 4.7, activeDeliveries: 14, completedToday: 26, cashInHand: 975, status: 'On Duty' },
  { id: 'DRV-105', name: 'Suresh Chauhan', phone: '9876500005', vehicle: 'DL 1V 2209', area: 'Vasant Kunj', rating: 4.8, activeDeliveries: 10, completedToday: 20, cashInHand: 1300, status: 'On Duty' },
  { id: 'DRV-106', name: 'Amit Kumar', phone: '9876500006', vehicle: 'DL 1V 9943', area: 'Hauz Khas', rating: 4.9, activeDeliveries: 8, completedToday: 18, cashInHand: 650, status: 'On Duty' }
];

export default function AdminSuppliersPage() {
  const [suppliers, setSuppliers] = useState(MOCK_SUPPLIERS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newDriver, setNewDriver] = useState({ name: '', phone: '', vehicle: '', area: 'Saket' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `DRV-10${suppliers.length + 1}`,
      name: newDriver.name,
      phone: newDriver.phone,
      vehicle: newDriver.vehicle,
      area: newDriver.area,
      rating: 5.0,
      activeDeliveries: 0,
      completedToday: 0,
      cashInHand: 0,
      status: 'On Duty'
    };
    setSuppliers([...suppliers, created]);
    setShowAddModal(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Fleet & Delivery Personnel</h1>
            <p className="text-xs text-kp-muted mt-0.5">Manage delivery boys, vehicles, sector assignments, and cash collections</p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Add Delivery Partner
          </button>
        </div>

        {/* Suppliers Table */}
        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Driver ID</th>
                  <th className="py-3 px-4">Driver Name</th>
                  <th className="py-3 px-4">Vehicle Number</th>
                  <th className="py-3 px-4">Assigned Sector</th>
                  <th className="py-3 px-4">Rating</th>
                  <th className="py-3 px-4">Today Done / Pending</th>
                  <th className="py-3 px-4">Cash in Hand</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Profile</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {suppliers.map((s) => (
                  <tr key={s.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{s.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-kp-navy block">{s.name}</span>
                      <span className="text-[11px] text-kp-muted">{s.phone}</span>
                    </td>
                    <td className="py-3.5 px-4 font-semibold text-kp-navy">{s.vehicle}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{s.area}</td>
                    <td className="py-3.5 px-4 text-amber-600 font-bold">★ {s.rating}</td>
                    <td className="py-3.5 px-4">
                      <span className="text-emerald-600 font-bold">{s.completedToday} Done</span>
                      <span className="text-kp-muted font-normal"> / {s.activeDeliveries} Pending</span>
                    </td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-700">₹{s.cashInHand}</td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {s.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/suppliers/${s.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-kp-primary hover:underline"
                      >
                        View <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border mb-4">
                <h3 className="font-extrabold text-base text-kp-navy">Enroll Delivery Driver</h3>
                <button onClick={() => setShowAddModal(false)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Driver Name</label>
                  <input
                    type="text"
                    required
                    value={newDriver.name}
                    onChange={(e) => setNewDriver({ ...newDriver, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Phone Number</label>
                  <input
                    type="text"
                    required
                    value={newDriver.phone}
                    onChange={(e) => setNewDriver({ ...newDriver, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Vehicle Registration Number</label>
                  <input
                    type="text"
                    required
                    value={newDriver.vehicle}
                    onChange={(e) => setNewDriver({ ...newDriver, vehicle: e.target.value })}
                    placeholder="e.g. DL 1V 3422"
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Primary Route Sector</label>
                  <select
                    value={newDriver.area}
                    onChange={(e) => setNewDriver({ ...newDriver, area: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  >
                    <option value="Saket">Saket</option>
                    <option value="Malviya Nagar">Malviya Nagar</option>
                    <option value="Greater Kailash">Greater Kailash</option>
                    <option value="Lajpat Nagar">Lajpat Nagar</option>
                    <option value="Vasant Kunj">Vasant Kunj</option>
                  </select>
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowAddModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-kp-primary text-white text-xs font-bold hover:bg-kp-water"
                  >
                    Save Driver
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
