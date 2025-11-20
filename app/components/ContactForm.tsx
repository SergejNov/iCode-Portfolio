"use client";

import { useState } from 'react';
import toast from 'react-hot-toast';

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message')
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success('Poruka je uspješno poslana! Kontaktirat ćemo vas uskoro.');
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
    <form onSubmit={handleSubmit} className="rounded-lg border border-black/10 p-5 dark:border-white/15">
      <div className="grid gap-3">
        <input 
          name="name"
          className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" 
          placeholder="Vaše ime" 
          required
        />
        <input 
          name="email"
          className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" 
          placeholder="Email" 
          type="email" 
          required
        />
        <input 
          name="phone"
          className="rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" 
          placeholder="Vaš broj telefona" 
          type="tel" 
          required
        />
        <textarea 
          name="message"
          className="min-h-28 rounded-md border border-black/10 bg-white px-3 py-2 text-sm outline-none placeholder:text-zinc-400 focus:border-blue-500 dark:border-white/20 dark:bg-black" 
          placeholder="Detalji projekta" 
          required
        />
        <button 
          type="submit" 
          disabled={isLoading}
          className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 disabled:opacity-50"
        >
          {isLoading ? 'Slanje...' : 'Pošalji'}
        </button>
      </div>
    </form>
  );
}