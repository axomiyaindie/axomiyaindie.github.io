/**
 * Converts an ISO date string (YYYY-MM-DD) to a display-friendly DD-MM-YYYY format.
 * Works without timezone drift (string-based, not Date() based).
 */
export function formatDate(dateString: string): string {
  if (!dateString) return "N/A";
  const parts = dateString.split('-');
  if (parts.length !== 3) return dateString; // fallback
  const [year, month, day] = parts;
  return `${day}-${month}-${year}`;
}
