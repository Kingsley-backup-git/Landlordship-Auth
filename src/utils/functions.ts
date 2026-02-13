export function isNumber(str: string | undefined) {
  if (typeof str !== "string") return false; // we only process strings!
  const isNum = !isNaN(Number(str));
  console.log({ isNum, str });
  return isNum;
}

export function findPasswordIndexes(inputString: string) {
  const items = [
    "Uppercase letter",
    "Digit",
    "Special Character",
    "8 Characters",
  ];

  const matched: number[] = [];

  items.forEach((item, index) => {
    switch (index) {
      case 0: // Uppercase letter
        if (/[A-Z]/.test(inputString)) matched.push(index);
        break;
      case 1: // Digit
        if (/\d/.test(inputString)) matched.push(index);
        break;
      case 2: // Special Character
        if (/[!@#$%^&*()\-_=+{};:,<.>]/.test(inputString)) matched.push(index);
        break;
      case 3: // 8 Characters
        if (inputString.length >= 8) matched.push(index);
        break;
      default:
        break;
    }
  });

  return matched;
}



export function timeAgo(date: string | Date) {
  const now = new Date();
  const then = new Date(date);
  const diffInSeconds = Math.floor((now.getTime() - then.getTime()) / 1000);

  const rtf = new Intl.RelativeTimeFormat("en", { numeric: "auto" });

  if (diffInSeconds < 60) {
    return "just now";
  }

  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) {
    return rtf.format(-diffInMinutes, "minute");
  }

  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) {
    return rtf.format(-diffInHours, "hour");
  }

  const diffInDays = Math.floor(diffInHours / 24);
  return rtf.format(-diffInDays, "day");
}

