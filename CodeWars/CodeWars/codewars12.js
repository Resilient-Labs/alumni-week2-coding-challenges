Is the string uppercase?
JavaScript:
String.prototype.isUpperCase = function() {
  return this.toString() === this.toUpperCase()
}
