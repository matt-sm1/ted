"use client";

import { useState } from "react";
import SendIcon from "@/components/icons/SendIcon";

export default function NewsLetterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Newsletter Email:", email);
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md">
      <div className="flex items-center gap-2 rounded-full border border-white/20 bg-navy-dark/70 p-1.5 pl-5">
        <label htmlFor="newsletter-email" className="sr-only">
          Email address
        </label>

        <input
          id="newsletter-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Enter Email"
          className="min-w-0 flex-1 bg-transparent text-xs text-white placeholder:text-white/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-sky focus-visible:outline-offset-2"
        />

        <button
          type="submit"
          aria-label="Subscribe"
          className="flex h-10 w-14 shrink-0 items-center justify-center rounded-full bg-sky text-navy-dark transition-opacity hover:opacity-90"
        >
          <SendIcon />
        </button>
      </div>
    </form>
  );
}