'use client';

import { useState } from 'react';
import { Package, Truck, RefreshCw, AlertTriangle, CheckCircle2, Plus, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminInventoryPage() {
  const [stock, setStock] = useState({
    filledPlant: 1240,
    emptySanitizing: 890,
    inVehicles: 420,
    withCustomers: 2840,
    damagedJars: 12
  });
  const [showRefillModal, setShowRefillModal] = useState(false);
  const [refillCans, setRefillCans] = useState(300);

  const handleRefill = (e: React.FormEvent) => {
    e.preventDefault();
    setStock({
      ...stock,
      filledPlant: stock.filledPlant + Number(refillCans),
      emptySanitizing: Math.max(0, stock.emptySanitizing - Number(refillCans))
    });
    setShowRefillModal(false);
  };

  const totalAssetJars = stock.filledPlant + stock.emptySanitizing + stock.inVehicles + stock.withCustomers + stock.damagedJars;

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Can & Container Inventory</h1>
            <p className="text-xs text-kp-muted mt-0.5">Track 20L polycarbonate jar cycles: bottling, vehicle distribution, and customer returns</p>
          </div>

          <button
            onClick={() => setShowRefillModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Log Plant Bottling Batch
          </button>
        </div>

        {/* 5 Status Cards */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Filled at Plant</span>
            <div className="text-2xl font-black text-kp-primary mt-1">{stock.filledPlant}</div>
            <span className="text-[11px] text-emerald-600 font-bold">Ready for dispatch</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Being Sanitized</span>
            <div className="text-2xl font-black text-blue-600 mt-1">{stock.emptySanitizing}</div>
            <span className="text-[11px] text-kp-muted">Jet wash cycle</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">In Fleet Vans</span>
            <div className="text-2xl font-black text-amber-600 mt-1">{stock.inVehicles}</div>
            <span className="text-[11px] text-kp-muted">Across 8 vehicles</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">With Customers</span>
            <div className="text-2xl font-black text-kp-navy mt-1">{stock.withCustomers}</div>
            <span className="text-[11px] text-emerald-600 font-bold">Deposit secured</span>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted block">Damaged / Retired</span>
            <div className="text-2xl font-black text-rose-600 mt-1">{stock.damagedJars}</div>
            <span className="text-[11px] text-kp-muted">0.2% breakage rate</span>
          </div>
        </div>

        {/* Summary Asset Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          <h3 className="font-bold text-base text-kp-navy mb-4">Total Fleet Jar Asset Reconciliation</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="text-kp-muted block">Total Registered 20L Polycarbonate Jars:</span>
              <span className="text-2xl font-black text-kp-navy mt-1 block">{totalAssetJars} Jars</span>
              <span className="text-[11px] text-kp-muted">Asset book value: ₹10,80,400</span>
            </div>
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="text-kp-muted block">Total Deposit Collected (₹150/jar):</span>
              <span className="text-2xl font-black text-emerald-700 mt-1 block">₹4,26,000</span>
              <span className="text-[11px] text-kp-muted">Held safely in escrow ledger</span>
            </div>
            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border">
              <span className="text-kp-muted block">Daily Can Turnaround Rate:</span>
              <span className="text-2xl font-black text-kp-primary mt-1 block">2.4 Days / Jar</span>
              <span className="text-[11px] text-kp-muted">Industry benchmark: 3.5 Days</span>
            </div>
          </div>
        </div>

        {/* Refill Modal */}
        {showRefillModal && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-sm w-full shadow-2xl border border-kp-border">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border mb-4">
                <h3 className="font-extrabold text-base text-kp-navy">Log Plant Bottling Batch</h3>
                <button onClick={() => setShowRefillModal(false)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleRefill} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Batch Bottling Cans</label>
                  <input
                    type="number"
                    min="50"
                    max="1000"
                    required
                    value={refillCans}
                    onChange={(e) => setRefillCans(Number(e.target.value))}
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Water Batch TDS (PPM)</label>
                  <input
                    type="text"
                    defaultValue="128 PPM (Optimal)"
                    readOnly
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy bg-kp-ice"
                  />
                </div>

                <div className="flex gap-3 pt-3">
                  <button
                    type="button"
                    onClick={() => setShowRefillModal(false)}
                    className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 py-2.5 rounded-xl bg-kp-primary text-white text-xs font-bold hover:bg-kp-water"
                  >
                    Confirm Batch
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
