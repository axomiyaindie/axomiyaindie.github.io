export function formatDate(dateString: string) {
  if (!dateString) return "N/A";
  
  // Handle YYYY-MM-DD format (from Git) directly
  if (dateString.match(/^\d{4}-\d{2}-\d{2}$/)) {
    const [year, month, day] = dateString.split('-');
    return `${day}-${month}-${year}`;
  }
  
  // Fallback for other formats
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "N/A";
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}