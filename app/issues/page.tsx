'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Clock, MessageSquare, ChevronRight, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_TICKETS = [
  { id: 'TKT-1049', customer: 'Rahul Sharma', category: 'Jar Cap Loose', priority: 'Medium', status: 'Resolved', date: '04 Oct 2026', driver: 'Rajesh Kumar', note: 'Replacement can provided within 30 mins' },
  { id: 'TKT-1048', customer: 'Pooja Verma', category: 'Late Delivery', priority: 'High', status: 'Resolved', date: '21 Sep 2026', driver: 'Rajesh Kumar', note: 'Apologized for flat tyre delay, ₹50 credit issued' },
  { id: 'TKT-1047', customer: 'Deepika Rao', category: 'Billing Query', priority: 'Low', status: 'Open', date: '07 Oct 2026', driver: 'Manoj Yadav', note: 'Customer asked about 3-day vacation pause credit' }
];

export default function AdminIssuesPage() {
  const [tickets, setTickets] = useState(MOCK_TICKETS);
  const [selectedTicket, setSelectedTicket] = useState<any | null>(null);

  const resolveTicket = (id: string) => {
    setTickets(tickets.map((t) => (t.id === id ? { ...t, status: 'Resolved' } : t)));
    setSelectedTicket(null);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Customer Support & Helpdesk CRM</h1>
            <p className="text-xs text-kp-muted mt-0.5">Manage customer complaints, delivery escalations, and SLA resolutions</p>
          </div>

          <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-amber-50 text-amber-700 border border-amber-200">
            1 Open Ticket Pending
          </span>
        </div>

        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Ticket ID</th>
                  <th className="py-3 px-4">Customer</th>
                  <th className="py-3 px-4">Category</th>
                  <th className="py-3 px-4">Priority</th>
                  <th className="py-3 px-4">Driver</th>
                  <th className="py-3 px-4">Date</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {tickets.map((t) => (
                  <tr key={t.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{t.id}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{t.customer}</td>
                    <td className="py-3.5 px-4 text-kp-navy">{t.category}</td>
                    <td className="py-3.5 px-4">
                      <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                        t.priority === 'High' ? 'bg-rose-100 text-rose-800' : 'bg-slate-100 text-slate-700'
                      }`}>
                        {t.priority}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-kp-muted">{t.driver}</td>
                    <td className="py-3.5 px-4 text-kp-muted">{t.date}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        t.status === 'Resolved' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' : 'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {t.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <button
                        onClick={() => setSelectedTicket(t)}
                        className="font-bold text-kp-primary hover:underline"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {selectedTicket && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border space-y-4">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border">
                <div>
                  <h3 className="font-extrabold text-base text-kp-navy">{selectedTicket.category}</h3>
                  <span className="font-mono text-xs text-kp-muted">{selectedTicket.id}</span>
                </div>
                <button onClick={() => setSelectedTicket(null)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="bg-kp-ice p-4 rounded-2xl text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-kp-muted">Customer:</span>
                  <span className="font-bold text-kp-navy">{selectedTicket.customer}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-kp-muted">Assigned Route Driver:</span>
                  <span className="font-bold text-kp-navy">{selectedTicket.driver}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-kp-muted">Resolution Note:</span>
                  <span className="font-medium text-kp-navy">{selectedTicket.note}</span>
                </div>
              </div>

              <div className="flex gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setSelectedTicket(null)}
                  className="flex-1 py-2.5 rounded-xl border border-kp-border text-xs font-semibold text-kp-navy"
                >
                  Close
                </button>
                {selectedTicket.status !== 'Resolved' && (
                  <button
                    type="button"
                    onClick={() => resolveTicket(selectedTicket.id)}
                    className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700"
                  >
                    Mark Resolved
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </AdminLayout>
  );
}
