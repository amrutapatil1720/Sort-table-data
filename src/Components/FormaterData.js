function formatDate(d) {
  const date = new Date(d);
  return date.toLocaleDateString();
}
export default formatDate;
