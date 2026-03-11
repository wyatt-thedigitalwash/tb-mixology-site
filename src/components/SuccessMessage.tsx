"use client";

import { CheckCircle } from "lucide-react";

export default function SuccessMessage() {
  return (
    <div className="text-center py-20 px-6">
      <CheckCircle className="w-16 h-16 text-gold mx-auto mb-6" />
      <h2 className="font-heading text-4xl md:text-5xl text-text mb-4">
        Thank You
      </h2>
      <p className="text-text-muted text-lg max-w-md mx-auto">
        Your event details have been received. Emma will be in touch within
        1–2 business days to start planning your perfect bar experience.
      </p>
    </div>
  );
}
