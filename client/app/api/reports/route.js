import { NextResponse } from 'next/server';

export async function GET() {
  const reports = [
    { id: 'RPT-001', title: 'Monthly Incident Summary', created: '2025-10-02', author: 'Sarah' },
    { id: 'RPT-002', title: 'Q3 Critical Cases Export', created: '2025-10-01', author: 'Admin' }
  ];
  return NextResponse.json({ reports });
}
