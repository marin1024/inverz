import { useEffect, useState } from 'react';

/* =============================================================
   ServicePicker — interaktivni odabir usluga (React otok).

   Stanja:
   - mirno: prigušen obrub, prigušena ikona/tekst
   - hover: jaki bijeli obrub, ikona se "pali"
   - odabrano: bijeli obrub + kvačica u kutu (klik ponovo poništava)

   Odabir se sprema u localStorage i šalje preko CustomEvent
   'inverz:services-change' kako bi forma niže na stranici
   mogla osvježiti prikaz.
   ============================================================= */

export type ServiceId = 'audit' | 'web' | 'ads' | 'systems';

interface ServiceItem {
  id: ServiceId;
  title: string;
  desc: string;
}

interface Props {
  items: ServiceItem[];
  selectedAriaLabel: string;
}

const STORAGE_KEY = 'inverz_selected_services';
const EVENT_NAME  = 'inverz:services-change';

export default function ServicePicker({ items, selectedAriaLabel }: Props) {
  const [selected, setSelected] = useState<Set<ServiceId>>(new Set());
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as ServiceId[];
        setSelected(new Set(parsed));
      }
    } catch (_) { /* ignore */ }
    setHydrated(true);
  }, []);

  function toggle(id: ServiceId) {
    const next = new Set(selected);
    if (next.has(id)) next.delete(id);
    else next.add(id);
    setSelected(next);
    persist(next);
  }

  function persist(s: Set<ServiceId>) {
    const arr = Array.from(s);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(arr));
    } catch (_) { /* ignore */ }
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { ids: arr } }));
  }

  return (
    <div className="service-grid" role="group" aria-label="Usluge">
      {items.map((item) => {
        const isSelected = selected.has(item.id);
        return (
          <button
            key={item.id}
            type="button"
            className={`service-card ${isSelected ? 'is-selected' : ''}`}
            aria-pressed={isSelected}
            onClick={() => toggle(item.id)}
          >
            <span className="service-icon" aria-hidden="true">
              <ServiceIcon id={item.id} />
            </span>
            <span className="service-title">{item.title}</span>
            <span className="service-desc">{item.desc}</span>

            <span
              className="service-check"
              aria-hidden={!isSelected}
              aria-label={isSelected ? selectedAriaLabel : undefined}
            >
              <CheckIcon />
            </span>
          </button>
        );
      })}
      {/* Sprječavamo hydration mismatch s aria-pressed na prvom renderu */}
      {!hydrated && <span hidden aria-hidden="true">…</span>}
    </div>
  );
}

/* ---- Ikone ------------------------------------------------ */
/* Linijske ikone su lokalne SVG datoteke unutar komponente.
   Za zamjenu: pronađi <svg> za odgovarajući id i ubaci svoj crtež.
   Drži stroke="currentColor" i stroke-width oko 1.5 zbog koherentnog stila. */

function ServiceIcon({ id }: { id: ServiceId }) {
  switch (id) {
    case 'audit':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor"
             strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3.5" y="3.5" width="18" height="18" />
          <line x1="8"  y1="18" x2="8"  y2="13" />
          <line x1="12.5" y1="18" x2="12.5" y2="9" />
          <line x1="17" y1="18" x2="17" y2="15" />
          <circle cx="22" cy="22" r="4.5" />
          <line x1="25.5" y1="25.5" x2="28.5" y2="28.5" />
        </svg>
      );
    case 'web':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor"
             strokeWidth="1.5" strokeLinejoin="round">
          <rect x="3.5" y="6.5" width="25" height="19" />
          <line x1="3.5" y1="12" x2="28.5" y2="12" />
          <circle cx="7"   cy="9.25" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="10"  cy="9.25" r="0.9" fill="currentColor" stroke="none" />
          <circle cx="13"  cy="9.25" r="0.9" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'ads':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor"
             strokeWidth="1.5">
          <circle cx="16" cy="16" r="12.5" />
          <circle cx="16" cy="16" r="7.5" />
          <circle cx="16" cy="16" r="2.5" fill="currentColor" stroke="none" />
        </svg>
      );
    case 'systems':
      return (
        <svg viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentColor"
             strokeWidth="1.5">
          <rect x="4.5"  y="4.5"  width="10" height="10" />
          <rect x="17.5" y="4.5"  width="10" height="10" />
          <rect x="4.5"  y="17.5" width="10" height="10" />
          <rect x="17.5" y="17.5" width="10" height="10" />
        </svg>
      );
  }
}

function CheckIcon() {
  return (
    <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor"
         strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="3 8.5 6.5 12 13 4.5" />
    </svg>
  );
}
