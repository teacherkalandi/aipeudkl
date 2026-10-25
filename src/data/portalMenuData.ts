import { GalleryPhoto, CustomPortalApp, EmployeeResource } from '../types';

export const DEFAULT_GALLERY: GalleryPhoto[] = [
  {
    id: 'gal-1',
    title: 'AIPEU All India Postal Employees Union Conference 2026',
    imageUrl: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    category: 'Union Conference',
    date: '2026-01-15',
  },
  {
    id: 'gal-2',
    title: 'Divisional Staff Adalat & Redressal Meet Dhenkanal',
    imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
    category: 'Staff Adalat',
    date: '2026-01-26',
  },
  {
    id: 'gal-3',
    title: 'Speed Post 24 Hub & India Post Parcel Logistics',
    imageUrl: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80',
    category: 'Department Operations',
    date: '2026-02-18',
  },
  {
    id: 'gal-4',
    title: 'Philatelic Heritage Exhibition at Dhenkanal Head Post Office',
    imageUrl: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80',
    category: 'Philately',
    date: '2026-03-05',
  },
];

export const DEFAULT_MY_APPS: CustomPortalApp[] = [];

export const DEFAULT_EMPLOYEE_RESOURCES: EmployeeResource[] = [
  { id: 'res-1', title: 'Postal Manual Volume IV (Appointments, Promotion, Leave & Discipline)', category: 'Postal Manuals', url: 'https://www.indiapost.gov.in' },
  { id: 'res-2', title: 'Postal Manual Volume VI (Duties of Postmaster & Sub-Postmasters)', category: 'Postal Manuals', url: 'https://www.indiapost.gov.in' },
  { id: 'res-3', title: 'CCS (Conduct) Rules 1964 & CCS (CCA) Rules 1965', category: 'Conduct Rules', url: 'https://www.indiapost.gov.in' },
  { id: 'res-4', title: '7th Central Pay Commission Pay Matrix & DA Orders', category: 'Pay & Allowances', url: 'https://www.indiapost.gov.in' },
  { id: 'res-5', title: 'Seniority Lists & Transfer Policy for Postal Assistants & Postmen', category: 'Establishment', url: 'https://www.indiapost.gov.in' },
];

export function getStoredGallery(): GalleryPhoto[] {
  try {
    const raw = localStorage.getItem('aipeu_admin_gallery');
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_GALLERY;
}

export function getStoredMyApps(): CustomPortalApp[] {
  try {
    const raw = localStorage.getItem('aipeu_admin_apps');
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_MY_APPS;
}

export function getStoredEmployeeResources(): EmployeeResource[] {
  try {
    const raw = localStorage.getItem('aipeu_admin_resources');
    if (raw) return JSON.parse(raw);
  } catch {}
  return DEFAULT_EMPLOYEE_RESOURCES;
}
