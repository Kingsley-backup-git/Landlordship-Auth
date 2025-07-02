export function isNumber(str: string | undefined) {
    if (typeof str !== "string") return false; // we only process strings!
    const isNum = !isNaN(Number(str))
    console.log({ isNum, str })
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
  