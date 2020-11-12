A Needle in the Haystack
JavaScript:
function findNeedle(haystack) {
  return 'found the needle at position ' + haystack.findIndex((s) => s == 'needle');
}
