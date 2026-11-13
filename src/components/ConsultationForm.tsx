"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";

type ConsultationFields = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
};

const timeSlots = ["09:00", "10:30", "12:00", "14:00", "15:30", "17:00"];

const inputClasses =
  "w-full border-b border-ink/20 bg-transparent py-2 font-body text-sm text-ink placeholder:text-ink/40 focus:border-ink focus:outline-none";
const labelClasses = "font-body text-xs tracking-label uppercase text-ink/60";

export function ConsultationForm() {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ConsultationFields>();
  const [confirmed, setConfirmed] = useState<ConsultationFields | null>(null);
  const [selectedTime, setSelectedTime] = useState("");

  async function onSubmit(data: ConsultationFields) {
    await new Promise((resolve) => setTimeout(resolve, 600));
    setConfirmed(data);
    reset();
    setSelectedTime("");
  }

  if (confirmed) {
    return (
      <div className="border border-sage/40 bg-sage/5 p-8">
        <p className="font-heading text-2xl text-ink">
          Request received, not yet confirmed.
        </p>
        <p className="mt-3 font-body text-sm leading-relaxed text-ink/70">
          You&rsquo;ve requested {confirmed.date || "a date"} at{" "}
          {confirmed.time || "a time"} in this demo form. No backend is
          connected yet, so this slot has not actually been booked — connect
          Supabase to store real bookings and Resend to send a genuine
          confirmation email before this goes live.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <div>
        <label className={labelClasses}>Preferred Date</label>
        <input
          type="date"
          className={inputClasses}
          {...register("date", { required: true })}
        />
        {errors.date && (
          <p className="mt-1 text-xs text-red-700">Please choose a date.</p>
        )}
      </div>

      <div>
        <label className={labelClasses}>Preferred Time</label>
        <div className="mt-3 flex flex-wrap gap-3">
          {timeSlots.map((slot) => (
            <button
              key={slot}
              type="button"
              onClick={() => {
                setSelectedTime(slot);
                setValue("time", slot, { shouldValidate: true });
              }}
              className={`border px-4 py-2 font-body text-xs tracking-label uppercase transition-colors ${
                selectedTime === slot
                  ? "border-ink bg-ink text-ivory"
                  : "border-ink/20 text-ink/70 hover:border-ink/60"
              }`}
            >
              {slot}
            </button>
          ))}
        </div>
        <input type="hidden" {...register("time", { required: true })} />
        {errors.time && (
          <p className="mt-2 text-xs text-red-700">Please choose a time.</p>
        )}
      </div>

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
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-ink px-8 py-3 font-body text-xs tracking-label uppercase text-ivory transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {isSubmitting ? "Submitting…" : "Request This Slot"}
      </button>
    </form>
  );
}
