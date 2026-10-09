'use client';

import { useState } from 'react';
import { Bell, Send, CheckCircle2, AlertTriangle, Users, Truck } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminNotificationsPage() {
  const [broadcastTarget, setBroadcastTarget] = useState<'all' | 'customers' | 'drivers'>('all');
  const [title, setTitle] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleBroadcast = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setTitle('');
      setMessage('');
    }, 2500);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-4xl mx-auto">
        <div>
          <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">System & Broadcast Alerts</h1>
          <p className="text-xs text-kp-muted mt-0.5">Send real-time push alerts, route notifications, and holiday announcements</p>
        </div>

        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs">
          <h3 className="font-bold text-base text-kp-navy mb-4">Send Broadcast Notification</h3>

          {sent && (
            <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Broadcast alert dispatched successfully to target audience!</span>
            </div>
          )}

          <form onSubmit={handleBroadcast} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-kp-navy mb-1.5">Target Audience</label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'all', label: 'All Users (1,848)' },
                  { id: 'customers', label: 'Subscribers Only (1,840)' },
                  { id: 'drivers', label: 'Fleet Drivers Only (8)' }
                ].map((t) => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setBroadcastTarget(t.id as any)}
                    className={`py-2.5 px-3 rounded-xl border text-xs font-bold transition-all ${
                      broadcastTarget === t.id
                        ? 'border-kp-primary bg-kp-light text-kp-navy ring-2 ring-kp-primary'
                        : 'border-kp-border bg-white text-kp-muted hover:bg-kp-ice'
                    }`}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-kp-navy mb-1">Alert Title</label>
              <input
                type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="e.g. Early Morning Delivery Window on Diwali (01 Nov)"
                className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy focus:ring-2 focus:ring-kp-primary focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-kp-navy mb-1">Message Content</label>
              <textarea
                rows={3}
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your announcement or operational notice here..."
                className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy focus:ring-2 focus:ring-kp-primary focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="px-8 py-3 rounded-xl bg-kp-primary hover:bg-kp-water text-white font-bold text-xs shadow-md shadow-kp-primary/20 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" /> Dispatch Push Broadcast
            </button>
          </form>
        </div>
      </div>
    </AdminLayout>
  );
}
