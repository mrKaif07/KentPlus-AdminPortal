'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Shield, ArrowRight, Lock, Mail } from 'lucide-react';

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState('admin@kentplus.com');
  const [password, setPassword] = useState('admin123');
  const [loading, setLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      router.push('/dashboard');
    }, 400);
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md text-center">
        <div className="w-12 h-12 rounded-2xl bg-kp-primary flex items-center justify-center text-white mx-auto mb-4 shadow-lg shadow-kp-primary/30">
          <Shield className="w-7 h-7" />
        </div>
        <h1 className="text-2xl font-bold text-white tracking-tight">Kent Plus Admin Command Center</h1>
        <p className="mt-1 text-xs text-slate-400">Enterprise CRM, fleet dispatch, inventory, and billing operations</p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-slate-800/90 py-8 px-6 sm:px-10 rounded-3xl border border-slate-700 shadow-2xl backdrop-blur-md">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 mb-1.5">Admin Email</label>
              <div className="relative">
                <Mail className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@kentplus.com"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-sm text-white focus:ring-2 focus:ring-kp-primary focus:outline-none"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label className="block text-xs font-semibold text-slate-300">Password</label>
                <span className="text-xs text-kp-primary font-medium">Demo: admin123</span>
              </div>
              <div className="relative">
                <Lock className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-600 bg-slate-900 text-sm text-white focus:ring-2 focus:ring-kp-primary focus:outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-kp-primary hover:bg-kp-water text-white font-bold text-sm shadow-md shadow-kp-primary/20 transition-all flex items-center justify-center gap-2 mt-2"
            >
              {loading ? 'Authenticating...' : 'Sign In to Operations Console'}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-slate-700 text-center">
            <a
              href="http://localhost:3000"
              className="text-xs text-slate-400 hover:text-white"
            >
              ← Back to Kent Plus Main Website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
