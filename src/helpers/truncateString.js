function truncateString(str, num) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num - 3) + '...';
}

export default truncateString;
