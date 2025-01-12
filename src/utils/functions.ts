export function isNumber(str: string | undefined) {
    if (typeof str !== "string") return false; // we only process strings!
    const isNum = !isNaN(Number(str))
    console.log({ isNum, str })
    return isNum;
  }
  