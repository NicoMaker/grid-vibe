import React, { useState } from 'react';
import { Eye, EyeOff, ArrowRight, AlertTriangle } from 'lucide-react';

const EMAIL_REGEX = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({ email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    if (!EMAIL_REGEX.test(formData.email)) {
      newErrors.email = 'Enter a valid email address';
      isValid = false;
    }

    if (!isLogin && !PASSWORD_REGEX.test(formData.password)) {
      newErrors.password = '8+ chars, 1 uppercase, 1 number, 1 special';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="w-full max-w-md mx-auto p-1">
      <div className="glass-panel rounded-2xl p-8 border border-white/5 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary-neon to-transparent opacity-50" />
        
        <h2 className="text-3xl font-black text-white mb-2 tracking-tighter">
          {isLogin ? 'WELCOME BACK' : 'JOIN THE GRID'}
        </h2>
        <p className="text-text-dim text-sm mb-8">
          {isLogin ? 'Ready to race? Enter your credentials.' : 'Create your paddock pass access.'}
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-xs font-bold text-text-dim uppercase tracking-wider">Email</label>
            <input
              type="email"
              className={`w-full bg-background-deep/50 border ${errors.email ? 'border-secondary-alert text-secondary-alert' : 'border-white/10 focus:border-primary-neon text-white'} rounded-lg px-4 py-3 outline-none transition-all placeholder:text-white/10`}
              placeholder="pilot@gridvibe.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            {errors.email && (
              <div className="flex items-center gap-1 text-secondary-alert text-xs">
                <AlertTriangle size={12} />
                <span>{errors.email}</span>
              </div>
            )}
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-text-dim uppercase tracking-wider">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                className={`w-full bg-background-deep/50 border ${errors.password ? 'border-secondary-alert text-secondary-alert' : 'border-white/10 focus:border-primary-neon text-white'} rounded-lg px-4 py-3 outline-none transition-all placeholder:text-white/10 pr-12`}
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-text-dim hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            {errors.password && (
              <div className="flex items-center gap-1 text-secondary-alert text-xs">
                <AlertTriangle size={12} />
                <span>{errors.password}</span>
              </div>
            )}
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-neon text-background-deep font-black text-lg py-4 rounded-xl hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(0,229,255,0.2)]"
          >
            {isLoading ? (
              <div className="w-6 h-6 border-2 border-background-deep border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                {isLogin ? 'ENTER PADDOCK' : 'GET ACCESS'}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => {
              setIsLogin(!isLogin);
              setErrors({ email: '', password: '' });
            }}
            className="text-text-dim text-sm hover:text-primary-neon transition-colors"
          >
            {isLogin ? "Don't have an account? " : "Already have a pass? "}
            <span className="font-bold underline decoration-primary-neon/30 underline-offset-4">
              {isLogin ? 'Sign up' : 'Log in'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;