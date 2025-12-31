import { NextResponse } from 'next/server';

export async function GET() {
  const data = {
    site: 'Ogun State Ministry of Women Affairs - GBV Portal',
    steps: [
      { id: 1, name: 'Personal Info' },
      { id: 2, name: 'Incident Details' },
      { id: 3, name: 'Evidence' },
      { id: 4, name: 'Review' }
    ],
    help: {
      phone: '112',
      privacy: 'All uploads are end-to-end encrypted for authorized reviewers only.'
    }
  };
  return NextResponse.json(data);
}
