'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Users, Search, Plus, Filter, ChevronRight, Phone, MapPin, CheckCircle2, X } from 'lucide-react';
import AdminLayout from '@/components/AdminLayout';

const MOCK_CUSTOMERS = [
  { id: 'CUST-001', name: 'Rahul Sharma', area: 'Saket', address: 'Flat 302, Block M', phone: '9811122334', cansPerDay: 2, frequency: 'Daily', driver: 'Rajesh Kumar', balance: 0, status: 'Active' },
  { id: 'CUST-002', name: 'Vikram Malhotra', area: 'Saket', address: 'House 44, Block J', phone: '9822233445', cansPerDay: 2, frequency: 'Daily', driver: 'Rajesh Kumar', balance: 0, status: 'Active' },
  { id: 'CUST-003', name: 'Pooja Verma', area: 'Saket', address: 'Parijat Apts, 12B', phone: '9833344556', cansPerDay: 3, frequency: 'Alternate', driver: 'Rajesh Kumar', balance: 195, status: 'Active' },
  { id: 'CUST-004', name: 'Anil Gupta', area: 'Saket', address: 'Shop 4, Anupam Complex', phone: '9844455667', cansPerDay: 4, frequency: 'Commercial', driver: 'Rajesh Kumar', balance: 0, status: 'Active' },
  { id: 'CUST-005', name: 'Amit Saxena', area: 'Malviya Nagar', address: 'Corner Market 12', phone: '9855566778', cansPerDay: 2, frequency: 'Daily', driver: 'Vikram Singh', balance: 130, status: 'Active' },
  { id: 'CUST-006', name: 'Sunil Sethi', area: 'Malviya Nagar', address: 'Geetanjali Enclave 5', phone: '9866677889', cansPerDay: 2, frequency: 'Daily', driver: 'Vikram Singh', balance: 0, status: 'Active' },
  { id: 'CUST-007', name: 'Kunal Kapoor', area: 'Greater Kailash', address: 'GK 1 M Block 24', phone: '9877788990', cansPerDay: 3, frequency: 'Daily', driver: 'Manoj Yadav', balance: 0, status: 'Active' },
  { id: 'CUST-008', name: 'Deepika Rao', area: 'Greater Kailash', address: 'GK 2 Masjid Moth 8', phone: '9888899001', cansPerDay: 2, frequency: 'Daily', driver: 'Manoj Yadav', balance: 260, status: 'Active' }
];

export default function AdminCustomersPage() {
  const [customers, setCustomers] = useState(MOCK_CUSTOMERS);
  const [search, setSearch] = useState('');
  const [areaFilter, setAreaFilter] = useState('All');
  const [showAddModal, setShowAddModal] = useState(false);

  // New customer form state
  const [newCust, setNewCust] = useState({
    name: '',
    phone: '',
    area: 'Saket',
    address: '',
    cans: 2,
    driver: 'Rajesh Kumar'
  });

  const filtered = customers.filter((c) => {
    if (areaFilter !== 'All' && c.area !== areaFilter) return false;
    if (search && !c.name.toLowerCase().includes(search.toLowerCase()) && !c.phone.includes(search)) return false;
    return true;
  });

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const created = {
      id: `CUST-00${customers.length + 1}`,
      name: newCust.name,
      area: newCust.area,
      address: newCust.address || 'Address provided',
      phone: newCust.phone,
      cansPerDay: Number(newCust.cans),
      frequency: 'Daily',
      driver: newCust.driver,
      balance: 0,
      status: 'Active'
    };
    setCustomers([created, ...customers]);
    setShowAddModal(false);
  };

  return (
    <AdminLayout>
      <div className="space-y-6 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h1 className="text-2xl font-extrabold text-kp-navy tracking-tight">Customer CRM Directory</h1>
            <p className="text-xs text-kp-muted mt-0.5">Manage residential and commercial water delivery accounts</p>
          </div>

          <button
            onClick={() => setShowAddModal(true)}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white text-xs font-bold shadow-md shadow-kp-primary/20 transition-all hover:scale-105"
          >
            <Plus className="w-4 h-4" /> Add New Customer
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between bg-white p-4 rounded-2xl border border-kp-border shadow-xs">
          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
            {['All', 'Saket', 'Malviya Nagar', 'Greater Kailash'].map((a) => (
              <button
                key={a}
                onClick={() => setAreaFilter(a)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                  areaFilter === a
                    ? 'bg-kp-primary text-white shadow-xs'
                    : 'bg-kp-ice text-kp-muted hover:text-kp-navy'
                }`}
              >
                {a}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by customer name or phone..."
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-kp-border text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-kp-primary"
            />
          </div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-3xl border border-kp-border shadow-xs overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-kp-ice/70 text-kp-navy uppercase font-semibold border-b border-kp-border">
                <tr>
                  <th className="py-3 px-4">Account ID</th>
                  <th className="py-3 px-4">Customer Name</th>
                  <th className="py-3 px-4">Sector & Address</th>
                  <th className="py-3 px-4">Daily Volume</th>
                  <th className="py-3 px-4">Assigned Driver</th>
                  <th className="py-3 px-4">Current Due</th>
                  <th className="py-3 px-4">Status</th>
                  <th className="py-3 px-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-kp-border">
                {filtered.map((c) => (
                  <tr key={c.id} className="hover:bg-kp-ice/40 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-kp-navy">{c.id}</td>
                    <td className="py-3.5 px-4">
                      <span className="font-extrabold text-kp-navy block">{c.name}</span>
                      <span className="text-[11px] text-kp-muted">{c.phone}</span>
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="font-bold text-kp-navy block">{c.area}</span>
                      <span className="text-[11px] text-kp-muted">{c.address}</span>
                    </td>
                    <td className="py-3.5 px-4 font-bold text-kp-navy">{c.cansPerDay} Cans / {c.frequency}</td>
                    <td className="py-3.5 px-4 text-kp-navy">{c.driver}</td>
                    <td className="py-3.5 px-4 font-bold">
                      {c.balance > 0 ? (
                        <span className="text-rose-600">₹{c.balance} Due</span>
                      ) : (
                        <span className="text-emerald-600">₹0 (Paid)</span>
                      )}
                    </td>
                    <td className="py-3.5 px-4">
                      <span className="inline-flex px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200">
                        {c.status}
                      </span>
                    </td>
                    <td className="py-3.5 px-4 text-right">
                      <Link
                        href={`/customers/${c.id}`}
                        className="inline-flex items-center gap-1 font-semibold text-kp-primary hover:underline"
                      >
                        Profile <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Add Customer Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-slate-900/50 backdrop-blur-xs z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border border-kp-border">
              <div className="flex items-center justify-between pb-3 border-b border-kp-border mb-4">
                <h3 className="font-extrabold text-base text-kp-navy">Enroll New Subscriber</h3>
                <button onClick={() => setShowAddModal(false)} className="text-kp-muted hover:text-kp-navy">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <form onSubmit={handleAddSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Customer Full Name</label>
                  <input
                    type="text"
                    required
                    value={newCust.name}
                    onChange={(e) => setNewCust({ ...newCust, name: e.target.value })}
                    placeholder="e.g. Ramesh Verma"
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Phone Number</label>
                    <input
                      type="text"
                      required
                      value={newCust.phone}
                      onChange={(e) => setNewCust({ ...newCust, phone: e.target.value })}
                      placeholder="98111 22334"
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Sector Area</label>
                    <select
                      value={newCust.area}
                      onChange={(e) => setNewCust({ ...newCust, area: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    >
                      <option value="Saket">Saket</option>
                      <option value="Malviya Nagar">Malviya Nagar</option>
                      <option value="Greater Kailash">Greater Kailash</option>
                      <option value="Lajpat Nagar">Lajpat Nagar</option>
                      <option value="Vasant Kunj">Vasant Kunj</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-kp-navy mb-1">Address & Floor</label>
                  <input
                    type="text"
                    required
                    value={newCust.address}
                    onChange={(e) => setNewCust({ ...newCust, address: e.target.value })}
                    placeholder="e.g. Flat 104, Block J, 1st Floor"
                    className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Daily 20L Cans</label>
                    <input
                      type="number"
                      min="1"
                      max="20"
                      value={newCust.cans}
                      onChange={(e) => setNewCust({ ...newCust, cans: Number(e.target.value) })}
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-kp-navy mb-1">Assign Route Driver</label>
                    <select
                      value={newCust.driver}
                      onChange={(e) => setNewCust({ ...newCust, driver: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-kp-border text-xs text-kp-navy"
                    >
                      <option value="Rajesh Kumar">Rajesh Kumar (Saket)</option>
                      <option value="Vikram Singh">Vikram Singh (Malviya)</option>
                      <option value="Manoj Yadav">Manoj Yadav (GK)</option>
                    </select>
                  </div>
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
                    Add Customer
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
