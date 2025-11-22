"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';
import { Kod } from './config';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    
    // Honeypot check - if this field is filled, it's likely a bot
    if (formData.get('website')) {
      // Pretend to succeed to not alert the bot
      toast.success('Poruka je uspješno poslana!');
      (e.target as HTMLFormElement).reset();
      setIsLoading(false);
      return;
    }

    const payload = {
      access_key: Kod,
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
      subject: 'Novi kontakt sa sajta',
    } as Record<string, any>;

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        const result = await response.json().catch(() => ({} as any));
        if (result && result.success) {
          toast.success('Poruka je uspješno poslana! Kontaktirat ćemo vas uskoro.');
        } else {
          throw new Error(result?.message || 'Slanje nije uspjelo.');
        }
        (e.target as HTMLFormElement).reset();
      } else {
        const errorData = await response.json().catch(() => ({} as any));
        const message = (errorData && (errorData.message || errorData.error)) || 'Došlo je do greške. Pokušajte ponovo.';
        toast.error(message);
      }
    } catch (error) {
      toast.error('Došlo je do greške. Pokušajte ponovo.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-md lg:mx-0 lg:max-w-none rounded-lg border-2 border-white/15 px-6 pb-8 pt-6">
      <div className="space-y-4">
        {/* Honeypot field - hidden from humans but visible to bots */}
        <div className="absolute left-[-9999px] opacity-0">
          <label htmlFor="website">Ne popunjavajte ovo polje</label>
          <input 
            type="text" 
            id="website" 
            name="website" 
            tabIndex={-1}
            autoComplete="off"
            className="hidden"
          />
        </div>
        
        <input 
    name="name"
            className="w-full rounded-md border-2 border-white/20 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-400 focus:border-blue-500" 
    placeholder="Vaše ime" 
    required
  />
  <input 
    name="email"
    type="email"
            className="w-full rounded-md border-2 border-white/20 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-400 focus:border-blue-500" 
    placeholder="Vaša email adresa" 
    required
  />
  <input 
    name="phone"
            className="w-full rounded-md border-2 border-white/20 bg-black px-3 py-2 text-sm text-zinc-100 outline-none placeholder:text-zinc-400 focus:border-blue-500" 
    placeholder="Vaš broj telefona" 
    type="tel" 
    required
  />
  <textarea 
  name="message"
  className="min-h-28 w-full rounded-md border-2 border-white/20 bg-black px-3 pt-3 pb-4 text-sm text-zinc-100 outline-none placeholder:text-zinc-400 focus:border-blue-500" 
  placeholder="Detalji projekta" 
  required
/>
  <div className="pt-6">
    <button 
      type="submit" 
      disabled={isLoading}
          className="w-full rounded-md border-2 border-blue-500 bg-blue-600 px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? 'Slanje...' : 'Pošalji'}
    </button>
  </div>
</div>
    </form>
  );
}