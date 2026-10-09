'use client';

import { useState } from 'react';
import { FileText, Download, CheckCircle2, Eye, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_INVOICES = [
  { id: 'INV-2026-09-01', customer: 'Rahul Sharma', area: 'Saket', cans: 60, total: 3900, status: 'Paid', date: '30 Sep 2026' },
  { id: 'INV-2026-09-02', customer: 'Vikram Malhotra', area: 'Saket', cans: 60, total: 3900, status: 'Paid', date: '30 Sep 2026' },
  { id: 'INV-2026-09-03', customer: 'Pooja Verma', area: 'Saket', cans: 45, total: 2925, status: 'Paid', date: '30 Sep 2026' },
  { id: 'INV-2026-09-04', customer: 'Anil Gupta', area: 'Saket', cans: 120, total: 7800, status: 'Paid', date: '30 Sep 2026' },
  { id: 'INV-2026-09-05', customer: 'Kunal Kapoor', area: 'Greater Kailash', cans: 60, total: 3900, status: 'Paid', date: '30 Sep 2026' },
  { id: 'INV-2026-09-06', customer: 'Sunil Sethi', area: 'Malviya Nagar', cans: 60, total: 3900, status: 'Overdue (3 Days)', date: '30 Sep 2026' }
];

export default function AdminInvoicesPage() {
  const [invoices, setInvoices] = useState(MOCK_INVOICES);
  const [selectedInv, setSelectedInv] = useState<any | null>(null);

  const markAllPaid = () => {
    setInvoices(invoices.map((inv) => ({ ...inv, status: 'Paid' })));
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Billing Invoices Ledger</h1>
            <p className="text-xs text-kp-muted mt-0.5">Generate, audit, and dispatch monthly tax invoices for subscribers</p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => alert('Batch generated 1,420 monthly invoices for October 2026!')}
              className="px-4 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20"
            >
              Generate Month Invoices
            </button>
            <button
              onClick={markAllPaid}
              className="px-4 py-2.5 rounded-xl border border-kp-border bg-white text-kp-navy hover:bg-kp-ice text-xs font-bold"
            >
              Mark All Settled
            </button>
          </div>
        </div>

        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Invoice #</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Sector</th>
                  <th className="py-3 px-4">Total Cans</th>
                  <th className="py-3 px-4">Invoice Total</th>
                  <th className="py-3 px-4">Generated Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {invoices.map((inv) => (
                  <tr key={inv.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{inv.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{inv.customer}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{inv.area}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{inv.cans} Cans</td>
                    <td className="py-3.5 px-4 font-black text-kp-navy">₹{inv.total.toLocaleString()}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{inv.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        inv.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-rose-50 text-rose-700 border border-rose-200'
                      }`}>
                        {inv.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedInv(inv)}
                        className="font-bold text-kp-primary hover:underline"
                      >
                        Preview
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedInv && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border">
                <div>
                  <h3 className="font-extrabold text-base text-kp-navy">KENT PLUS TAX INVOICE</h3>
                  <span className="font-mono text-xs text-kp-muted">{selectedInv.id}</span>
                </div>
                <button onClick={() => setSelectedInv(null)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-kp-ice p-4 rounded-2xl text-xs space-y-1">
                <div className="flex justify-between">
                  <span className="text-kp-muted">Customer:</span>
                  <span className="font-bold text-kp-navy">{selectedInv.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-kp-muted">Locality:</span>
                  <span className="font-bold text-kp-navy">{selectedInv.area}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-kp-muted">Delivered Cans:</span>
                  <span className="font-bold text-kp-navy">{selectedInv.cans} Cans (20L)</span>
                </div>
                <div className="pt-2 border-t border-kp-border flex justify-between font-extrabold text-sm text-kp-navy">
                  <span>Invoice Amount:</span>
                  <span className="text-kp-primary">₹{selectedInv.total}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedInv(null)}
                  className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                >
                  Close
                </button>
                <button
                  type="button"
                  onClick={() => {
                    alert(`Downloaded PDF for invoice ${selectedInv.id}`);
                    setSelectedInv(null);
                  }}
                  className="flex-1 py-2.5 rounded-xl bg-kp-primary text-white text-xs font-bold hover:bg-kp-water flex items-center justify-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Download PDF
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
