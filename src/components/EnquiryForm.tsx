"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type EnquiryFields = {
  name: string;
  email: string;
  phone: string;
  weddingDate: string;
  location: string;
  guestCount: string;
  style: string;
  budget: string;
  message: string;
};

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
const labelClasses = "font-body text-xs tracking-label uppercase text-ink/60";

export function EnquiryForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EnquiryFields>();
  const [submitted, setSubmitted] = useState(false);

  async function onSubmit() {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setSubmitted(true);
    reset();
  }

  if (submitted) {
    return (
      <div className="border border-sage/40 bg-sage/5 p-8">
        <p className="font-heading text-2xl text-ink">Thank you.</p>
        <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
          Your enquiry has been captured in this demo form. This site is not
          yet connected to a live email or database service — wire up Resend
          and Supabase to start receiving real enquiries.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label className={labelClasses}>Full Name</label>
          <input
            className={inputClasses}
            {...register("name", { required: true })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-red-700">Name is required.</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Email</label>
          <input
            type="email"
            className={inputClasses}
            {...register("email", { required: true })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-red-700">Email is required.</p>
          )}
        </div>
        <div>
          <label className={labelClasses}>Telephone</label>
          <input className={inputClasses} {...register("phone")} />
        </div>
        <div>
          <label className={labelClasses}>Wedding Date</label>
          <input
            type="date"
            className={inputClasses}
            {...register("weddingDate")}
          />
        </div>
        <div>
          <label className={labelClasses}>Wedding Location</label>
          <input
            className={inputClasses}
            placeholder="e.g. Harare, Victoria Falls"
            {...register("location")}
          />
        </div>
        <div>
          <label className={labelClasses}>Estimated Guest Count</label>
          <input
            type="number"
            min={0}
            className={inputClasses}
            {...register("guestCount")}
          />
        </div>
        <div>
          <label className={labelClasses}>Wedding Style</label>
          <input
            className={inputClasses}
            placeholder="e.g. Garden, destination, intimate"
            {...register("style")}
          />
        </div>
        <div>
          <label className={labelClasses}>Estimated Budget (USD)</label>
          <input className={inputClasses} {...register("budget")} />
        </div>
      </div>

      <div>
        <label className={labelClasses}>Tell Us About Your Celebration</label>
        <textarea
          rows={4}
          className={inputClasses}
          {...register("message")}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-ink px-8 py-3 font-body text-xs tracking-label uppercase text-ivory transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Sending…" : "Send Enquiry"}
      </button>
    </form>
  );
}
