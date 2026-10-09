'use client';

import { useState } from 'react';
import { Settings, Save, CheckCircle2, ShieldCheck, IndianRupee } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminSettingsPage() {
  const [canRate, setCanRate] = useState(65);
  const [deposit, setDeposit] = useState(150);
  const [morningSlot, setMorningSlot] = useState('6:00 AM – 10:30 AM');
  const [eveningSlot, setEveningSlot] = useState('4:30 PM – 8:30 PM');
  const [gstNumber, setGstNumber] = useState('07AABCK1234F1Z8');
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Business Configuration & Pricing</h1>
          <p className="text-xs text-kp-muted mt-0.5">Global parameters for water can pricing, container security deposits, and operations</p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          {saved && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Configuration parameters saved successfully!</span>
            </div>
          )}

          <form onSubmit={handleSave} className="space-y-6">
            <h3 className="font-bold text-base text-kp-navy pb-2 border-b border-kp-border">Product Rates & Deposit</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Standard 20L Can Retail Price (₹)</label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
                  <input
                    type="number"
                    value={canRate}
                    onChange={(e) => setCanRate(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy font-bold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Refundable Container Deposit (₹)</label>
                <div className="relative">
                  <IndianRupee className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
                  <input
                    type="number"
                    value={deposit}
                    onChange={(e) => setDeposit(Number(e.target.value))}
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy font-bold"
                  />
                </div>
              </div>
            </div>

            <h3 className="font-bold text-base text-kp-navy pt-4 pb-2 border-b border-kp-border">Operational Time Windows</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Morning Delivery Window</label>
                <input
                  type="text"
                  value={morningSlot}
                  onChange={(e) => setMorningSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Evening Delivery Window</label>
                <input
                  type="text"
                  value={eveningSlot}
                  onChange={(e) => setEveningSlot(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                />
              </div>
            </div>

            <h3 className="font-bold text-base text-kp-navy pt-4 pb-2 border-b border-kp-border">Legal & Compliance</h3>

            <div>
              <label className="block text-xs font-bold text-kp-navy mb-1">Company GSTIN Number</label>
              <input
                type="text"
                value={gstNumber}
                onChange={(e) => setGstNumber(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs font-mono text-kp-navy font-bold"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-kp-primary hover:bg-kp-water text-white font-bold text-xs shadow-md shadow-kp-primary/20 transition-all flex items-center gap-2"
            >
              <Save className="w-4 h-4" /> Save Business Configuration
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
