export default function isValid(input) {
  return input && !input.split("").every((letter) => letter === " ");
}
