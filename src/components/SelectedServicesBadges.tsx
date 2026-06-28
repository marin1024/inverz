import { useEffect, useState } from 'react';

/* =============================================================
   SelectedServicesBadges — mali React otok unutar kontakt forme.

   - Čita izbor iz localStorage na mountu.
   - Sluša 'inverz:services-change' event koji emitira ServicePicker.
   - Prikazuje pločice s nazivima odabranih usluga.
   - Renderira hidden inpute s istim sadržajem da Formspree primi
     popis odabranih usluga uz ostala polja.
   ============================================================= */

const STORAGE_KEY = 'inverz_selected_services';
const EVENT_NAME  = 'inverz:services-change';

type ServiceId = 'audit' | 'web' | 'ads' | 'systems';

interface Props {
  /** id -> naziv usluge u trenutnom jeziku. */
  labels: Record<ServiceId, string>;
  selectedTitle: string;
  emptyText: string;
  clearText: string;
}

export default function SelectedServicesBadges({
  labels, selectedTitle, emptyText, clearText,
}: Props) {
  const [ids, setIds] = useState<ServiceId[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setIds(JSON.parse(raw));
    } catch (_) { /* ignore */ }

    function onChange(e: Event) {
      const detail = (e as CustomEvent).detail as { ids: ServiceId[] };
      if (detail && Array.isArray(detail.ids)) setIds(detail.ids);
    }
    window.addEventListener(EVENT_NAME, onChange);
    return () => window.removeEventListener(EVENT_NAME, onChange);
  }, []);

  function clear() {
    try { localStorage.removeItem(STORAGE_KEY); } catch (_) { /* ignore */ }
    setIds([]);
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { ids: [] } }));
  }

  // Prije hidratacije ne renderiramo ništa kako ne bismo flickerali.
  if (!hydrated) {
    return <div className="badges-shell" aria-hidden="true" />;
  }

  const labelsForSelected = ids.map((id) => labels[id]).filter(Boolean);

  return (
    <div className="badges-shell">
      <p className="badges-title">{selectedTitle}</p>

      {labelsForSelected.length === 0 ? (
        <p className="badges-empty">{emptyText}</p>
      ) : (
        <>
          <ul className="badges-list">
            {labelsForSelected.map((label) => (
              <li key={label} className="badge">{label}</li>
            ))}
          </ul>
          <button type="button" className="badges-clear" onClick={clear}>
            {clearText}
          </button>
        </>
      )}

      {/* Skriveni input za Formspree — comma-separated lista naziva */}
      <input
        type="hidden"
        name="selected_services"
        value={labelsForSelected.join(', ')}
      />
    </div>
  );
}
