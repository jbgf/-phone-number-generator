export const generateTitle = (country?: string) => {
  if (country) {
    return `Random Phone Number Generator for Privacy · ${country}`
  }
  return `Random Phone Number Generator for Privacy, Testing`
}

export const generateDescription = (country?: string) => {
  /* Addresses and  */
  if (country) {
    return `Generate Phone numbers from ${country}, enhance software testing and data verification, setting up accounts, registrations and protecting your privacy`
  }
  return `Protect your privacy with our random phone number generator, enhance software testing and data verification, setting up accounts, registrations and securing personal information`
}

export const LoopEnum = (enumObject: any, callBack?: (key: string) => void) => {
  const arr = []
  for (let item in enumObject) {
    if (isNaN(Number(item))) {
      // console.log(item); // 输出 "First", "Second", "Third"
      callBack?.(item);
      arr.push({ key: item, value: enumObject[item] });
    }
  }
  return arr;

}