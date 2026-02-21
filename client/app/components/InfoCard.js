"use client";

import React from 'react';

export default function InfoCard({ icon: Icon, color = '', title, description }) {
  return (
    <div className="flex gap-4 mb-6">
      <div className={`mt-1 ${color}`}>
        {Icon ? <Icon size={20} /> : null}
      </div>
      <div>
        <h4 className="text-sm font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-xs text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}
