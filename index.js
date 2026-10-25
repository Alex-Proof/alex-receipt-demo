export function formatVerdictLine(status, profile, passed, total) {
  if (typeof status !== "string" || status.trim() === "") {
    throw new TypeError("status muss ein nicht-leerer String sein");
  }
  if (typeof profile !== "string" || profile.trim() === "") {
    throw new TypeError("profile muss ein nicht-leerer String sein");
  }
  if (!Number.isInteger(passed) || !Number.isInteger(total) || passed < 0 || total <= 0 || passed > total) {
    throw new RangeError("passed/total muessen ganzzahlig sein und 0 <= passed <= total erfuellen");
  }
  return `${status} · ${profile} · ${passed}/${total}`;
}
