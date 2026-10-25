import { collection, doc, onSnapshot, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { CustomPortalApp } from '../types';

export const MAX_APP_BYTES = 700 * 1024;

export async function readHtmlApp(file: File): Promise<string> {
  if (!/\.html?$/i.test(file.name)) throw new Error('Please choose an .html or .htm file.');
  if (!file.size || file.size > MAX_APP_BYTES) throw new Error('HTML file must be non-empty and smaller than 700 KB.');
  const html = await file.text();
  if (!/<[a-z!][^>]*>/i.test(html)) throw new Error('This file does not contain HTML.');
  return html;
}

export function subscribePortalApps(onChange: (apps: CustomPortalApp[]) => void, onError: (error: Error) => void) {
  return onSnapshot(collection(db, 'portalApps'), snapshot => {
    const apps = new Map<string, CustomPortalApp>();
    snapshot.forEach(item => {
      const data = item.data();
      if (data.deleted) apps.delete(item.id);
      else apps.set(item.id, { ...data, id: item.id } as CustomPortalApp);
    });
    onChange([...apps.values()]);
  }, onError);
}

export async function savePortalApp(app: CustomPortalApp) {
  await setDoc(doc(db, 'portalApps', app.id), app);
}

export async function deletePortalApp(id: string) {
  // Tombstones also hide built-in shortcuts on every device.
  await setDoc(doc(db, 'portalApps', id), { deleted: true });
}
