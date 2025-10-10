"use client";

import { useState } from "react";
import { AnimatePresence, motion, type MotionProps } from "framer-motion";
import { type HTMLAttributes } from "react";

export default function ContactModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setSuccess(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      // Placeholder: replace with real API endpoint or server action
      await fetch("/api/contact", { method: "POST", body: JSON.stringify(payload), headers: { "Content-Type": "application/json" } });
      setSuccess("Mesajınız başarıyla gönderildi.");
      e.currentTarget.reset();
    } catch (err) {
      console.error(err);
      setSuccess("Gönderilemedi, lütfen tekrar deneyin.");
    } finally {
      setSending(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 sm:px-6">
          <div 
            className="fixed inset-0 bg-black/50"
            onClick={onClose}
            aria-hidden="true"
          />
          
          <div className="relative z-50" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
            <div className="bg-timberwolf dark:bg-gunmetal-2 w-full max-w-md sm:max-w-lg rounded-md p-5 sm:p-6 shadow-2xl border border-field-drab dark:border-[rgba(215,210,204,0.15)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ type: "spring", damping: 15 }}
              >
                <header className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-field-drab dark:text-timberwolf">İletişim</h3>
                <button 
                  onClick={onClose} 
                  aria-label="Kapat" 
                  className="text-gunmetal dark:text-timberwolf hover:text-field-drab dark:hover:text-gold-metallic transition-colors p-2"
                >
                  ✕
                </button>
              </header>

              <form onSubmit={handleSubmit} className="grid gap-3">
                <label htmlFor="label" className="text-60 dark:text-light-text">Bizimle iletişime geçiniz</label>
                <input 
                  name="name" 
                  required 
                  placeholder="Adınız" 
                  className="w-full px-3 py-2 border border-light-gray dark:border-[rgba(217,215,215,0.2)] rounded bg-white dark:bg-[#252526] focus:outline-none focus:ring-2 focus:ring-golden-yellow dark:focus:ring-gold-accent text-foreground dark:text-light-text placeholder:text-gray-400 dark:placeholder:text-gray-500" 
                />
                <input 
                  name="company" 
                  placeholder="Firma (opsiyonel)" 
                  className="w-full px-3 py-2 border border-light-gray dark:border-[rgba(217,215,215,0.2)] rounded bg-white dark:bg-[#252526] focus:outline-none focus:ring-2 focus:ring-golden-yellow dark:focus:ring-gold-accent text-foreground dark:text-light-text placeholder:text-gray-400 dark:placeholder:text-gray-500" 
                />
                <input 
                  name="email" 
                  type="email" 
                  required 
                  placeholder="E-posta" 
                  className="w-full px-3 py-2 border border-light-gray dark:border-[rgba(217,215,215,0.2)] rounded bg-white dark:bg-[#252526] focus:outline-none focus:ring-2 focus:ring-golden-yellow dark:focus:ring-gold-accent text-foreground dark:text-light-text placeholder:text-gray-400 dark:placeholder:text-gray-500" 
                />
                <textarea 
                  name="message" 
                  required 
                  placeholder="Mesajınız" 
                  className="w-full px-3 py-2 border border-light-gray dark:border-[rgba(217,215,215,0.2)] rounded bg-white dark:bg-[#252526] h-28 focus:outline-none focus:ring-2 focus:ring-golden-yellow dark:focus:ring-gold-accent resize-none text-foreground dark:text-light-text placeholder:text-gray-400 dark:placeholder:text-gray-500" 
                />

                <div className="flex items-center justify-between mt-2">
                  <button 
                    type="submit" 
                    disabled={sending} 
                    className="rounded-md bg-golden-yellow dark:bg-gold-accent text-tuna dark:text-[#252526] px-4 py-2 hover:bg-amber-yellow dark:hover:bg-bronze-accent transition-colors disabled:opacity-50 shadow-md font-semibold"
                  >
                    {sending ? "Gönderiliyor..." : "Gönder"}
                  </button>
                  <button 
                    type="button" 
                    onClick={onClose} 
                    className="text-sm text-60 dark:text-light-text hover:text-dark-gold dark:hover:text-gold-accent transition-colors"
                  >
                    İptal
                  </button>
                </div>

                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className={`text-sm mt-2 ${success.includes("başarıyla") ? "text-green-600" : "text-red-600"}`}>
                      {success}
                    </p>
                  </motion.div>
                )}
              </form>
              </motion.div>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
