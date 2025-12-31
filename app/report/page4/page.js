"use client";

import React, { useState } from "react";
import MainLayout from '@/app/components/MainLayout';
import { Sun, Sunrise, Moon, Phone, MessageSquare } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: 1, name: "Personal Info" },
  { id: 2, name: "Incident Details" },
  { id: 3, name: "Evidence" },
  { id: 4, name: "Review" },
];

export default function SafetyPreferences() {
  const [timeSlot, setTimeSlot] = useState("morning");
  const [contactMethod, setContactMethod] = useState("phone");
  const [noPriorNotice, setNoPriorNotice] = useState(false);

  return (
    <MainLayout steps={steps} currentStep={3} title="Safety Preferences">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-2">Safety Preferences</h2>
          <p className="text-gray-500">
            Tell us the safest way and time to contact you. We will respect these
            preferences.
          </p>
        </section>

        {/* Time Slot */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {[
            { id: "morning", label: "Morning", time: "8am – 12pm", icon: Sun },
            {
              id: "afternoon",
              label: "Afternoon",
              time: "12pm – 4pm",
              icon: Sunrise,
            },
            { id: "evening", label: "Evening", time: "4pm – 8pm", icon: Moon },
          ].map((slot) => {
            const Icon = slot.icon;
            return (
              <button
                key={slot.id}
                onClick={() => setTimeSlot(slot.id)}
                className={`p-6 rounded-xl border transition ${
                  timeSlot === slot.id
                    ? "border-blue-500 bg-blue-50"
                    : "bg-white hover:border-gray-300"
                }`}
              >
                <Icon className="w-6 h-6 text-blue-500 mb-2" />
                <div className="font-bold">{slot.label}</div>
                <div className="text-sm text-gray-400">{slot.time}</div>
              </button>
            );
          })}
        </section>

        {/* Contact Method */}
        <section className="mb-6">
          <h3 className="font-bold mb-3">Preferred contact method</h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setContactMethod("phone")}
              className={`px-4 py-2 rounded border flex items-center gap-2 ${
                contactMethod === "phone"
                  ? "bg-blue-50 border-blue-500"
                  : "bg-white"
              }`}
            >
              <Phone size={16} /> Phone
            </button>

            <button
              onClick={() => setContactMethod("sms")}
              className={`px-4 py-2 rounded border flex items-center gap-2 ${
                contactMethod === "sms"
                  ? "bg-blue-50 border-blue-500"
                  : "bg-white"
              }`}
            >
              <MessageSquare size={16} /> SMS
            </button>

            <button
              onClick={() => setContactMethod("whatsapp")}
              className={`px-4 py-2 rounded border ${
                contactMethod === "whatsapp"
                  ? "bg-blue-50 border-blue-500"
                  : "bg-white"
              }`}
            >
              WhatsApp
            </button>
          </div>
        </section>

        {/* Discreet Notice */}
        <section className="mb-8">
          <label className="flex items-start gap-4 p-4 rounded border bg-orange-50 cursor-pointer">
            <input
              type="checkbox"
              checked={noPriorNotice}
              onChange={() => setNoPriorNotice(!noPriorNotice)}
              className="mt-1"
            />
            <div>
              <div className="font-bold">
                Do not call me without prior notice
              </div>
              <div className="text-sm text-gray-500">
                We will send a discreet message first to confirm it is safe to
                talk.
              </div>
            </div>
          </label>
        </section>

        {/* Navigation */}
        <div className="flex justify-between">
          <Link href="/report/page3">
            <button className="px-6 py-3 rounded border">Back</button>
          </Link>
          <Link href="/report/page5">
            <button className="px-6 py-3 rounded bg-blue-600 text-white">
              Continue
            </button>
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}
