import { NextResponse } from 'next/server';

export async function GET() {
  const cases = [
    { id: 'CASE-894', name: 'Amina Johnson', risk: 'Critical', status: 'Open' },
    { id: 'CASE-881', name: 'B. Okoro', risk: 'High', status: 'Assigned' },
    { id: 'CASE-865', name: 'S. Adeyemi', risk: 'Medium', status: 'Follow-up' }
  ];
  return NextResponse.json({ cases });
}
