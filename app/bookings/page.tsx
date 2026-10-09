'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PartyPopper, Search, Calendar, MapPin, ChevronRight, CheckCircle2, Clock } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_EVENT_BOOKINGS = [
  { id: 'EVT-9921', organizer: 'Vikram Mehra', occasion: 'Diwali Society Gathering', date: '01 Nov 2026', guests: 250, cans: 25, venue: 'Community Hall, Block J, Saket', quote: 1625, status: 'Confirmed' },
  { id: 'EVT-9915', organizer: 'Anita Singhal', occasion: 'Wedding & Reception', date: '12 Nov 2026', guests: 500, cans: 50, venue: 'Tivoli Grand Lawn, Chattarpur', quote: 3250, status: 'Quoted' },
  { id: 'EVT-9908', organizer: 'Tech Mahindra HR', occasion: 'Corporate Annual Offsite', date: '18 Oct 2026', guests: 180, cans: 20, venue: 'DLF Prime Tower, Okhla', quote: 1300, status: 'Confirmed' },
  { id: 'EVT-9890', organizer: 'Ramesh Aggarwal', occasion: 'Mata Ki Chowki (Religious)', date: '25 Oct 2026', guests: 300, cans: 30, venue: 'Arya Samaj Mandir, GK 1', quote: 1950, status: 'Inquiry' },
  { id: 'EVT-8140', organizer: 'Rahul Sharma', occasion: 'Home Birthday Party', date: '15 Sep 2026', guests: 80, cans: 10, venue: 'Flat 302, Saket', quote: 650, status: 'Completed' }
];

export default function AdminBookingsPage() {
  const [filter, setFilter] = useState<'All' | 'Inquiry' | 'Quoted' | 'Confirmed' | 'Completed'>('All');
  const [search, setSearch] = useState('');

  const filtered = MOCK_EVENT_BOOKINGS.filter((b) => {
    if (filter !== 'All' && b.status !== filter) return false;
    if (search && !b.organizer.toLowerCase().includes(search.toLowerCase()) && !b.occasion.toLowerCase().includes(search.toLowerCase())) return false;
    return true;
  });

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Event Water Logistics CRM</h1>
            <p className="text-xs text-kp-muted mt-0.5">Manage bulk inquiries, quotes, vehicle dispatches for weddings & corporate events</p>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-xs font-bold px-3 py-1.5 rounded-xl bg-purple-50 text-purple-700 border border-purple-200">
              12 Upcoming Event Deliveries
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-kp-border shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {(['All', 'Inquiry', 'Quoted', 'Confirmed', 'Completed'] as const).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold capitalize whitespace-nowrap transition-all ${
                  filter === f
                    ? 'bg-purple-600 text-white shadow-xs'
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
              placeholder="Search organizer or event..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-purple-600"
            />
          </div>
        </div>

        {/* Bookings Table */}
        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Booking ID</th>
                  <th className="py-3 px-4">Occasion & Organizer</th>
                  <th className="py-3 px-4">Event Date</th>
                  <th className="py-3 px-4">Venue Destination</th>
                  <th className="py-3 px-4">Cans Order</th>
                  <th className="py-3 px-4">Quoted Total</th>
                  <th className="py-3 px-4">Pipeline Status</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {filtered.map((b) => (
                  <tr key={b.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{b.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-kp-navy block">{b.occasion}</span>
                      <span className="text-[11px] text-kp-muted">{b.organizer} • {b.guests} Guests</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{b.date}</td>
                    <td className="py-3.5 px-4 text-kp-muted max-w-xs truncate">{b.venue}</td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{b.cans} Cans (20L)</td>
                    <td className="py-3.5 px-4 font-extrabold text-emerald-700">₹{b.quote.toLocaleString()}</td>
                    <td className="py-3.5 px-4">
                      <span className={`inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold ${
                        b.status === 'Confirmed'
                          ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                          : b.status === 'Quoted'
                          ? 'bg-amber-50 text-amber-700 border border-amber-200'
                          : b.status === 'Completed'
                          ? 'bg-blue-50 text-blue-700 border border-blue-200'
                          : 'bg-purple-50 text-purple-700 border border-purple-200'
                      }`}>
                        {b.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/bookings/${b.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-purple-700 hover:underline"
                      >
                        Manage Quote <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
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
