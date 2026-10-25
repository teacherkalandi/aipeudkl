import React from 'react';
import { CustomPortalApp } from '../types';

export function HtmlAppViewer({ app, onClose }: { app: CustomPortalApp; onClose: () => void }) {
  return (
    <div role="dialog" aria-modal="true" aria-label={app.name} className="fixed inset-0 z-[100] bg-white flex flex-col">
      <div className="flex items-center justify-between gap-3 p-3 bg-slate-900 text-white">
        <h2 className="font-bold truncate">{app.name}</h2>
        <button type="button" onClick={onClose} className="px-4 py-2 rounded-lg bg-white text-slate-900">Close App</button>
      </div>
      <iframe title={app.name} srcDoc={app.htmlContent} sandbox="allow-scripts allow-forms allow-modals allow-downloads" referrerPolicy="no-referrer" className="w-full flex-1 border-0 bg-white" />
    </div>
  );
}
