var isAnagram = function(s, t) {
  if (s.length !== t.length) {
      return false; // Anagrams must have the same length
  }

  const charCount = new Map();

  // Count the frequency of each character in string s
  for (const char of s) {
      charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Check if string t has the same character frequencies
  for (const char of t) {
      if (!charCount.has(char) || charCount.get(char) === 0) {
          return false;
      }
      charCount.set(char, charCount.get(char) - 1);
  }

  return true;
};