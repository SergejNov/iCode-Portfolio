"use client";

import { Toaster } from "react-hot-toast";

export default function ToasterClient() {
  return (
    <Toaster
      position="bottom-center"
      toastOptions={{
        style: {
          background: "var(--background)",
          color: "var(--foreground)",
          border: "1px solid var(--brand)",
        },
      }}
    />
  );
}
