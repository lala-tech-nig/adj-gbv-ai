"use client";

import React, { useState, useRef } from 'react';
import { UploadCloud, Trash2, X } from 'lucide-react';

export default function FileUpload({ initialFiles = [] }) {
  const [files, setFiles] = useState(initialFiles);
  const [uploading, setUploading] = useState(false);
  const fileInputRef = useRef(null);

  function handleFilesSelected(ev) {
    const picked = Array.from(ev.target.files || []);
    const toAdd = picked.map((f, i) => ({ id: Date.now() + i, file: f, name: f.name, progress: 0 }));
    setFiles((s) => [...s, ...toAdd]);
    toAdd.forEach(uploadOne);
  }

  function uploadOne(item) {
    const xhr = new XMLHttpRequest();
    const fd = new FormData();
    fd.append('file', item.file);
    xhr.open('POST', '/api/files');
    xhr.upload.onprogress = (e) => {
      if (e.lengthComputable) {
        const pct = Math.round((e.loaded / e.total) * 100);
        setFiles((s) => s.map((f) => (f.id === item.id ? { ...f, progress: pct } : f)));
      }
    };
    xhr.onload = () => {
      try {
        const res = JSON.parse(xhr.responseText);
        setFiles((s) => s.map((f) => (f.id === item.id ? { ...f, uploaded: true, url: res.url } : f)));
      } catch (e) {
        setFiles((s) => s.map((f) => (f.id === item.id ? { ...f, error: true } : f)));
      }
    };
    xhr.onerror = () => {
      setFiles((s) => s.map((f) => (f.id === item.id ? { ...f, error: true } : f)));
    };
    xhr.send(fd);
  }

  function handleRemove(id) {
    setFiles((s) => s.filter((f) => f.id !== id));
  }

  // Voice recording using MediaRecorder
  const mediaRecorderRef = useRef(null);
  const [recording, setRecording] = useState(false);

  async function startRecording() {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaRecorderRef.current = new MediaRecorder(stream);
      const chunks = [];
      mediaRecorderRef.current.ondataavailable = (e) => chunks.push(e.data);
      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks, { type: 'audio/webm' });
        const file = new File([blob], `voice_${Date.now()}.webm`, { type: blob.type });
        const item = { id: Date.now(), file, name: file.name, progress: 0 };
        setFiles((s) => [item, ...s]);
        uploadOne(item);
      };
      mediaRecorderRef.current.start();
      setRecording(true);
    } catch (err) {
      console.error('Recording error', err);
      alert('Could not start recording. Check microphone permissions.');
    }
  }

  function stopRecording() {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setRecording(false);
    }
  }

  return (
    <div>
      <div className="border-2 border-dashed border-blue-200 rounded-2xl bg-blue-50/30 p-8 text-center">
        <div className="flex flex-col items-center">
          <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mb-4">
            <UploadCloud size={24} />
          </div>
          <h3 className="text-lg font-bold mb-2">Drag & drop files here</h3>
          <p className="text-gray-500 mb-4 text-sm">or choose files from your device to securely attach them.</p>
          <div className="flex gap-2 justify-center">
            <button onClick={() => fileInputRef.current?.click()} className="bg-blue-600 text-white px-4 py-2 rounded-xl">Select Files</button>
            <button onClick={() => (recording ? stopRecording() : startRecording())} className={`px-4 py-2 rounded-xl border ${recording ? 'bg-red-500 text-white' : 'bg-white'}`}>
              {recording ? 'Stop Recording' : 'Record Voice Note'}
            </button>
          </div>
          <input ref={fileInputRef} type="file" multiple className="hidden" onChange={handleFilesSelected} />
        </div>
      </div>

      <div className="mt-6 space-y-3">
        {files.map((f) => (
          <div key={f.id} className="border border-gray-200 rounded-xl p-3 flex items-center justify-between bg-white">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-50 rounded flex items-center justify-center text-gray-500">
                  <span className="text-sm font-bold">{f.name?.split('.').pop() || 'file'}</span>
                </div>
                <div>
                  <div className="text-sm font-bold">{f.name}</div>
                  <div className="text-xs text-gray-400">{f.uploaded ? 'Uploaded' : f.error ? 'Error' : `${f.progress || 0}%`}</div>
                </div>
              </div>
              {!f.uploaded && (
                <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden mt-2">
                  <div style={{ width: `${f.progress || 0}%` }} className="bg-blue-600 h-full" />
                </div>
              )}
            </div>
            <div className="flex items-center gap-3">
              <button onClick={() => handleRemove(f.id)} className="text-gray-400 hover:text-red-500"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
