'use client';

import { useState } from 'react';
import Link from 'next/link';
import { MapPin, Users, Truck, Plus, ChevronRight, Package, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_AREAS = [
  { id: 'AREA-01', name: 'Saket', pincode: '110017', customers: 280, dailyCans: 240, revenue: '₹4,68,000', drivers: 2, hub: 'Okhla Hub 1', status: 'Optimal' },
  { id: 'AREA-02', name: 'Malviya Nagar', pincode: '110017', customers: 240, dailyCans: 210, revenue: '₹4,09,500', drivers: 2, hub: 'Okhla Hub 1', status: 'Optimal' },
  { id: 'AREA-03', name: 'Greater Kailash (GK 1 & 2)', pincode: '110048', customers: 310, dailyCans: 280, revenue: '₹5,46,000', drivers: 2, hub: 'Okhla Hub 2', status: 'Optimal' },
  { id: 'AREA-04', name: 'Lajpat Nagar', pincode: '110024', customers: 220, dailyCans: 195, revenue: '₹3,80,250', drivers: 1, hub: 'Okhla Hub 2', status: 'Capacity Warning' },
  { id: 'AREA-05', name: 'Vasant Kunj', pincode: '110070', customers: 180, dailyCans: 160, revenue: '₹3,12,000', drivers: 1, hub: 'Okhla Hub 1', status: 'Optimal' },
  { id: 'AREA-06', name: 'Hauz Khas', pincode: '110016', customers: 150, dailyCans: 130, revenue: '₹2,53,500', drivers: 1, hub: 'Okhla Hub 1', status: 'Optimal' }
];

export default function AdminAreasPage() {
  const [areas, setAreas] = useState(MOCK_AREAS);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newArea, setNewArea] = useState({ name: '', pincode: '', hub: 'Okhla Hub 1' });

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `AREA-0${areas.length + 1}`,
      name: newArea.name,
      pincode: newArea.pincode,
      customers: 0,
      dailyCans: 0,
      revenue: '₹0',
      drivers: 1,
      hub: newArea.hub,
      status: 'New Route'
    };
    setAreas([...areas, created]);
    setShowAddModal(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">South Delhi Service Sectors</h1>
            <p className="text-xs text-kp-muted mt-0.5">Manage delivery hubs, route sectors, active accounts, and vehicle allocation</p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Add Delivery Zone
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((a) => (
            <div key={a.id} className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-2xl bg-kp-light flex items-center justify-center text-kp-primary">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-extrabold text-base text-kp-navy">{a.name}</h3>
                      <span className="text-[11px] text-kp-muted font-mono">Pin: {a.pincode} • {a.hub}</span>
                    </div>
                  </div>
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                    a.status === 'Optimal' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {a.status}
                  </span>
                </div>

                <div className="grid grid-cols-3 gap-2 p-3 bg-kp-ice/60 rounded-2xl border border-kp-border text-center text-xs my-4">
                  <div>
                    <span className="text-kp-muted text-[10px] block uppercase font-bold">Subscribers</span>
                    <span className="font-black text-kp-navy text-sm">{a.customers}</span>
                  </div>
                  <div>
                    <span className="text-kp-muted text-[10px] block uppercase font-bold">Daily Volume</span>
                    <span className="font-black text-kp-primary text-sm">{a.dailyCans} Cans</span>
                  </div>
                  <div>
                    <span className="text-kp-muted text-[10px] block uppercase font-bold">Vehicles</span>
                    <span className="font-black text-kp-navy text-sm">{a.drivers} Vans</span>
                  </div>
                </div>
              </div>

              <div className="pt-3 border-t border-kp-border flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-kp-muted block uppercase font-bold">Monthly Revenue</span>
                  <span className="font-black text-emerald-700 text-sm">{a.revenue}</span>
                </div>
                <Link
                  href={`/areas/${a.id}`}
                  className="inline-flex items-center gap-1 font-bold text-xs text-kp-primary hover:underline"
                >
                  Sector Analytics <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Add Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border mb-4">
                <h3 className="font-extrabold text-base text-kp-navy">Add Service Zone</h3>
                <button onClick={() => setShowAddModal(false)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAdd} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Locality Name</label>
                  <input
                    type="text"
                    required
                    value={newArea.name}
                    onChange={(e) => setNewArea({ ...newArea, name: e.target.value })}
                    placeholder="e.g. Panchsheel Park"
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Postal Pincode</label>
                  <input
                    type="text"
                    required
                    value={newArea.pincode}
                    onChange={(e) => setNewArea({ ...newArea, pincode: e.target.value })}
                    placeholder="110017"
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Assigned Refill Plant</label>
                  <select
                    value={newArea.hub}
                    onChange={(e) => setNewArea({ ...newArea, hub: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  >
                    <option value="Okhla Hub 1">Okhla Industrial Area Hub 1</option>
                    <option value="Okhla Hub 2">Okhla Industrial Area Hub 2</option>
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
                    Create Sector
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
