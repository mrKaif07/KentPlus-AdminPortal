'use client';

import { useState } from 'react';
import { CreditCard, IndianRupee, Search, CheckCircle2, History, ArrowRight } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_PAYMENTS = [
  { id: 'PAY-9042', customer: 'Sunil Sethi', amount: 1950, mode: 'UPI (PhonePe)', date: '07 Oct 2026', driver: '-', status: 'Verified' },
  { id: 'PAY-9041', customer: 'Rahul Sharma', amount: 3900, mode: 'UPI (GPay)', date: '01 Oct 2026', driver: '-', status: 'Verified' },
  { id: 'PAY-9039', customer: 'Vikram Malhotra', amount: 130, mode: 'Cash', date: '07 Oct 2026', driver: 'Rajesh Kumar', status: 'Pending Hub Reconcile' },
  { id: 'PAY-9038', customer: 'Sanjay Kapoor', amount: 130, mode: 'Cash', date: '07 Oct 2026', driver: 'Rajesh Kumar', status: 'Pending Hub Reconcile' },
  { id: 'PAY-9030', customer: 'Kunal Kapoor', amount: 3900, mode: 'Net Banking (HDFC)', date: '02 Oct 2026', driver: '-', status: 'Verified' }
];

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState(MOCK_PAYMENTS);
  const [search, setSearch] = useState('');

  const reconcileAll = () => {
    setPayments(payments.map((p) => ({ ...p, status: 'Verified' })));
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Financial Ledger & Collections</h1>
            <p className="text-xs text-kp-muted mt-0.5">Track customer payments, reconcile driver cash handovers, and monitor outstanding ledgers</p>
          </div>

          <button
            onClick={reconcileAll}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
          >
            <CheckCircle2 className="w-4 h-4" /> Reconcile Driver Cash Handover
          </button>
        </div>

        {/* 3 Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-bold block mb-1">Total October Inflow</span>
            <div className="text-3xl font-black text-emerald-700">₹4,82,500.00</div>
            <p className="text-[11px] text-emerald-600 font-semibold mt-1">✓ Bank & UPI settlements up-to-date</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-bold block mb-1">Driver Cash in Transit</span>
            <div className="text-3xl font-black text-amber-600">₹8,415.00</div>
            <p className="text-[11px] text-kp-muted mt-1">Across 8 fleet delivery partners</p>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs">
            <span className="text-xs text-kp-muted font-bold block mb-1">Outstanding Ledgers</span>
            <div className="text-3xl font-black text-rose-600">₹28,400.00</div>
            <p className="text-[11px] text-kp-muted mt-1">Scheduled for auto-debit / Nov 05</p>
          </div>
        </div>

        {/* Ledger Table */}
        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Transaction ID</th>
                  <th className="py-3 px-4">Customer Name</th>
                  <th className="py-3 px-4">Payment Channel</th>
                  <th className="py-3 px-4">Amount</th>
                  <th className="py-3 px-4">Driver (If Cash)</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Settlement Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {payments.map((p) => (
                  <tr key={p.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{p.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{p.customer}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{p.mode}</td>
                    <td className="py-3.5 px-4 font-black text-kp-navy">₹{p.amount.toLocaleString()}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{p.driver}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{p.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        p.status === 'Verified' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {p.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
