import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, Check, MessageSquare, Linkedin, Github, Youtube, Sparkles, AlertCircle } from "lucide-react";
import { profile } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic Validation
    if (!formData.name.trim()) {
      setError("Please provide your name.");
      return;
    }
    if (!formData.email.trim() || !/^\S+@\S+\.\S+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      setError("Please enter your message.");
      return;
    }

    setIsSubmitting(true);

    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 1500);
  };

  const contactChannels = [
    { label: "Direct Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail, color: "text-accent-teal bg-accent-teal/10" },
    { label: "WhatsApp Chat", value: profile.mobileNo, href: profile.whatsApp, icon: MessageSquare, color: "text-emerald-400 bg-emerald-500/10" },
    { label: "LinkedIn Connect", value: "shakiraliswe", href: profile.linkedIn, icon: Linkedin, color: "text-accent-indigo bg-accent-indigo/10" },
    { label: "GitHub Profile", value: "ShakirAliMughal", href: profile.github, icon: Github, color: "text-gray-400 bg-gray-900" },
  ];

  return (
    <section id="contact" className="py-24 bg-gray-950/30 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent-teal/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-20">
          <div className="inline-flex items-center space-x-1 px-3 py-1 rounded-full bg-accent-teal/10 border border-accent-teal/20 text-accent-teal text-xs font-mono">
            <span>06 . ENGAGEMENT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto font-mono">
            Let's discuss leadership, SaaS development, or technical consultation.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct channels and bio summary */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <h3 className="text-xl font-bold text-white flex items-center space-x-2.5">
              <Sparkles className="h-5.5 w-5.5 text-accent-teal" />
              <span>Connect Directly</span>
            </h3>

            <p className="text-gray-400 leading-relaxed font-light">
              I am open to technical consulting, contract full-stack architecture roles, software debugging audits, or technical leadership projects. Feel free to reach out via the secure form or any direct channels.
            </p>

            <div className="space-y-4 pt-2">
              {contactChannels.map((chan, idx) => {
                const Icon = chan.icon;
                return (
                  <a
                    key={idx}
                    href={chan.href}
                    target="_blank"
                    referrerPolicy="no-referrer"
                    className="flex items-center space-x-4 p-4 rounded-xl border border-gray-900/60 bg-gray-950/50 hover:bg-gray-900/40 hover:border-gray-800 transition-all group block"
                  >
                    <div className={`p-3 rounded-lg ${chan.color} group-hover:scale-105 transition-transform`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-mono text-gray-500 tracking-wide uppercase">
                        {chan.label}
                      </div>
                      <div className="text-sm font-semibold text-gray-200 group-hover:text-accent-teal transition-colors">
                        {chan.value}
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="glass-card border border-gray-900 rounded-2xl p-6 sm:p-8 shadow-2xl relative">
              <div className="border-b border-gray-900 pb-4 mb-6 text-left">
                <h3 className="text-lg font-bold text-white">Send Secure Message</h3>
                <p className="text-xs text-gray-500 font-mono mt-1">// STREAMS DIRECTLY TO SHAKIR'S WORKSPACE</p>
              </div>

              {isSubmitted ? (
                <div className="py-12 px-4 text-center space-y-4">
                  <div className="h-16 w-16 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-2 animate-bounce">
                    <Check className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">Message Transmission Complete!</h4>
                  <p className="text-sm text-gray-400 max-w-sm mx-auto">
                    Thank you for reaching out. Your secure message has been validated and simulated successfully. I will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-lg bg-gray-900 hover:bg-gray-850 text-gray-300 hover:text-white border border-gray-850 hover:border-gray-800 text-xs font-mono transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  {error && (
                    <div className="p-3 bg-rose-500/10 border border-rose-500/20 text-rose-400 rounded-lg text-xs flex items-center space-x-2 font-mono">
                      <AlertCircle className="h-4 w-4 shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-gray-400 font-medium">YOUR NAME *</label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe"
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-900 focus:border-accent-teal rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="block text-xs font-mono text-gray-400 font-medium">EMAIL ADDRESS *</label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. john@company.com"
                        className="w-full px-4 py-3 bg-gray-950 border border-gray-900 focus:border-accent-teal rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-gray-400 font-medium">SUBJECT (OPTIONAL)</label>
                    <input
                      type="text"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Architectural Consultation"
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-900 focus:border-accent-teal rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-xs font-mono text-gray-400 font-medium">MESSAGE CONTENT *</label>
                    <textarea
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your project, timeline, or consultation objectives..."
                      className="w-full px-4 py-3 bg-gray-950 border border-gray-900 focus:border-accent-teal rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-accent-teal to-accent-indigo text-white font-bold text-sm tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-accent-teal/10 hover:shadow-accent-teal/20 transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin rounded-full h-4.5 w-4.5 border-2 border-white border-t-transparent" />
                        <span>Transmitting Data...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-4.5 w-4.5" />
                        <span>Send Secure Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
