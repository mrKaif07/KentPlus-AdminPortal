'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, PartyPopper, Calendar, MapPin, CheckCircle2, Truck, IndianRupee, FileText } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

export default function AdminBookingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = use(params);
  const bookingId = unwrappedParams.id;

  const [status, setStatus] = useState('Confirmed');
  const [assignedDriver, setAssignedDriver] = useState('Rajesh Kumar');
  const [cans, setCans] = useState(25);
  const [rate, setRate] = useState(65);
  const [deliveryFee, setDeliveryFee] = useState(0);
  const [saved, setSaved] = useState(false);

  const total = cans * rate + deliveryFee;

  const handleUpdate = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-5xl mx-auto">
        <div className="flex items-center gap-3">
          <Link
            href="/bookings"
            className="p-2 rounded-xl bg-white border border-kp-border text-kp-navy hover:bg-kp-ice transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </Link>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-kp-navy tracking-tight">Diwali Society Gathering</h1>
              <span className="font-mono text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-200">
                {bookingId}
              </span>
            </div>
            <p className="text-xs text-kp-muted">Organizer: Vikram Mehra (+91 98222 33445) • Saket</p>
          </div>
        </div>

        {saved && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Event booking details and dispatch allocation updated!</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Details & Quote calculator */}
          <div className="md:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-kp-border shadow-xs space-y-6">
            <h3 className="font-bold text-base text-kp-navy">Quotation & Volume Breakdown</h3>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Required 20L Jars</label>
                <input
                  type="number"
                  value={cans}
                  onChange={(e) => setCans(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Agreed Rate Per Can (₹)</label>
                <input
                  type="number"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Event Delivery Charge (₹)</label>
                <input
                  type="number"
                  value={deliveryFee}
                  onChange={(e) => setDeliveryFee(Number(e.target.value))}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Pipeline Status</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                >
                  <option value="Inquiry">Inquiry / New</option>
                  <option value="Quoted">Quoted Sent</option>
                  <option value="Confirmed">Confirmed & Scheduled</option>
                  <option value="Completed">Completed & Billed</option>
                </select>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-kp-ice border border-kp-border space-y-2 text-xs">
              <div className="flex justify-between text-kp-muted">
                <span>{cans} × 20L Drinking Jars (@ ₹{rate}):</span>
                <span className="font-bold text-kp-navy">₹{cans * rate}</span>
              </div>
              <div className="flex justify-between text-kp-muted">
                <span>Event Logistics Delivery Fee:</span>
                <span className="font-bold text-kp-navy">₹{deliveryFee}</span>
              </div>
              <div className="pt-2 border-t border-kp-border flex justify-between font-extrabold text-sm text-kp-navy">
                <span>Total Quotation:</span>
                <span className="text-emerald-700">₹{total.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleUpdate}
              className="w-full py-3 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 transition-all"
            >
              Update Event Quote & Schedule
            </button>
          </div>

          {/* Allocation & Venue info */}
          <div className="md:col-span-5 space-y-4">
            <div className="bg-white p-6 rounded-3xl border border-kp-border shadow-xs space-y-4 text-xs">
              <h3 className="font-bold text-sm text-kp-navy">Fleet Vehicle Allocation</h3>

              <div>
                <label className="block text-xs font-bold text-kp-navy mb-1">Assigned Delivery Van</label>
                <select
                  value={assignedDriver}
                  onChange={(e) => setAssignedDriver(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                >
                  <option value="Rajesh Kumar">Rajesh Kumar (Bolero DL 1V 3422)</option>
                  <option value="Vikram Singh">Vikram Singh (Tata Ace DL 1V 8812)</option>
                  <option value="Manoj Yadav">Manoj Yadav (Bolero DL 1V 4490)</option>
                </select>
              </div>

              <div className="pt-3 border-t border-kp-border space-y-2">
                <span className="text-kp-muted block">Venue Directions:</span>
                <p className="font-medium text-kp-navy bg-kp-ice p-3 rounded-xl">
                  Community Hall, Block J, Saket (Gate No 2, Unloading behind kitchen hall).
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
