'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Droplets, LayoutDashboard, Users, Truck, MapPin, CheckSquare,
  PartyPopper, CreditCard, FileText, Package, BarChart3,
  AlertCircle, Bell, Settings, Menu, X, LogOut, ChevronRight,
  ExternalLink, Search
} from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const NAV_GROUPS = [
  {
    title: 'OPERATIONS',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
      { name: 'Customer CRM', href: '/customers', icon: Users },
      { name: 'Delivery Dispatch', href: '/deliveries', icon: Truck },
      { name: 'Fleet & Drivers', href: '/suppliers', icon: CheckSquare },
      { name: 'Service Sectors', href: '/areas', icon: MapPin },
      { name: 'Event Bookings', href: '/bookings', icon: PartyPopper }
    ]
  },
  {
    title: 'FINANCE & STOCK',
    items: [
      { name: 'Payment Ledger', href: '/payments', icon: CreditCard },
      { name: 'Monthly Invoices', href: '/invoices', icon: FileText },
      { name: 'Can Inventory', href: '/inventory', icon: Package }
    ]
  },
  {
    title: 'ANALYTICS & SYSTEM',
    items: [
      { name: 'Business Reports', href: '/reports', icon: BarChart3 },
      { name: 'Helpdesk Tickets', href: '/issues', icon: AlertCircle },
      { name: 'System Alerts', href: '/notifications', icon: Bell },
      { name: 'Settings & Pricing', href: '/settings', icon: Settings }
    ]
  }
];

export default function AdminLayout({ children }: LayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex bg-[#F4F7F9]">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex flex-col w-64 bg-slate-900 text-slate-300 fixed inset-y-0 z-30 border-r border-slate-800">
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-slate-800">
          <Link href="/dashboard" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-kp-primary flex items-center justify-center text-white shadow-sm shadow-kp-primary/30">
              <Droplets className="w-5 h-5 fill-white" />
            </div>
            <div>
              <span className="font-black text-lg text-white tracking-tight">KENT<span className="text-kp-primary">ADMIN</span></span>
              <span className="text-[10px] font-semibold text-slate-400 block leading-none">Operations & CRM</span>
            </div>
          </Link>
        </div>

        {/* Navigation list */}
        <nav className="flex-1 px-3 py-4 space-y-6 overflow-y-auto">
          {NAV_GROUPS.map((group) => (
            <div key={group.title}>
              <span className="px-3 text-[10px] font-extrabold tracking-wider text-slate-400 uppercase block mb-2">
                {group.title}
              </span>
              <div className="space-y-0.5">
                {group.items.map((item) => {
                  const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname?.startsWith(item.href));
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold transition-all ${
                        isActive
                          ? 'bg-kp-primary text-white shadow-xs'
                          : 'text-slate-300 hover:text-white hover:bg-slate-800/80'
                      }`}
                    >
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                      <span>{item.name}</span>
                      {isActive && <ChevronRight className="w-3.5 h-3.5 ml-auto text-white/70" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Portal links & Sign Out */}
        <div className="p-3 border-t border-slate-800 space-y-2">
          <div className="p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-[11px] space-y-1">
            <span className="text-slate-400 font-bold uppercase tracking-wider block text-[10px]">Jump To Portals:</span>
            <div className="flex justify-between">
              <a href="http://localhost:3001" target="_blank" rel="noreferrer" className="text-kp-primary hover:underline flex items-center gap-1">
                Customer :3001 <ExternalLink className="w-2.5 h-2.5" />
              </a>
              <a href="http://localhost:3002" target="_blank" rel="noreferrer" className="text-amber-400 hover:underline flex items-center gap-1">
                Driver :3002 <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </div>
          </div>

          <Link
            href="http://localhost:3000/login"
            className="flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold text-rose-400 hover:bg-rose-950/40 transition-colors"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>Sign Out</span>
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-64">
        {/* Topbar */}
        <header className="h-16 bg-white border-b border-kp-border sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl text-kp-navy hover:bg-kp-ice"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div className="relative w-full hidden sm:block">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-kp-muted" />
              <input
                type="text"
                placeholder="Global search: customers, drivers, invoices, trips..."
                className="w-full pl-9 pr-4 py-2 rounded-xl border border-kp-border bg-kp-ice/50 text-xs text-kp-navy focus:outline-none focus:ring-2 focus:ring-kp-primary"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-kp-ice border border-kp-border text-xs font-bold text-kp-navy">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>All 8 Delhi Routes Operational</span>
            </div>

            <Link
              href="/notifications"
              className="relative p-2 rounded-xl text-kp-navy hover:bg-kp-ice transition-colors"
            >
              <Bell className="w-5 h-5 text-kp-muted" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500"></span>
            </Link>

            <div className="flex items-center gap-2 pl-2">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white text-xs font-bold flex items-center justify-center">
                AD
              </div>
              <div className="hidden sm:block text-left">
                <span className="font-bold text-xs text-kp-navy block leading-none">Super Admin</span>
                <span className="text-[10px] text-kp-muted">operations@kentplus.com</span>
              </div>
            </div>
          </div>
        </header>

        {/* Content Body */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          {children}
        </main>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-kp-navy z-40 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-72 bg-slate-900 text-slate-300 z-50 flex flex-col lg:hidden shadow-2xl"
            >
              <div className="h-16 flex items-center justify-between px-6 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-kp-primary flex items-center justify-center text-white">
                    <Droplets className="w-4 h-4 fill-white" />
                  </div>
                  <span className="font-black text-base text-white">KENT<span className="text-kp-primary">ADMIN</span></span>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <nav className="flex-1 px-4 py-4 space-y-4 overflow-y-auto">
                {NAV_GROUPS.map((group) => (
                  <div key={group.title}>
                    <span className="text-[10px] font-extrabold uppercase text-slate-500 block mb-1">
                      {group.title}
                    </span>
                    <div className="space-y-1">
                      {group.items.map((item) => {
                        const isActive = pathname === item.href;
                        const Icon = item.icon;
                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`flex items-center gap-3 px-3 py-2 rounded-xl text-xs font-semibold ${
                              isActive ? 'bg-kp-primary text-white' : 'text-slate-300 hover:bg-slate-800'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{item.name}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </nav>

              <div className="p-4 border-t border-slate-800">
                <Link
                  href="http://localhost:3000/login"
                  className="flex items-center justify-center gap-2 py-2.5 rounded-xl bg-rose-950/60 text-rose-300 text-xs font-bold"
                >
                  <LogOut className="w-4 h-4" /> Sign Out
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
