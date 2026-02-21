import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const form = await req.formData();
    const file = form.get('file');
    if (!file) return NextResponse.json({ error: 'No file provided' }, { status: 400 });

    // Simulate storing and return a dummy URL
    const filename = file.name || `upload_${Date.now()}`;
    const url = `/api/files/${encodeURIComponent(filename)}`;

    return NextResponse.json({ ok: true, name: filename, url });
  } catch (err) {
    return NextResponse.json({ error: String(err) }, { status: 500 });
  }
}

export async function GET() {
  // Return some dummy file list
  const files = [
    { id: 1, name: 'evidence_photo_01.jpg', size: '2.4 MB', url: '/uploads/evidence_photo_01.jpg' },
    { id: 2, name: 'police_report_scan.pdf', size: '4.5 MB', url: '/uploads/police_report_scan.pdf' }
  ];
  return NextResponse.json({ files });
}
