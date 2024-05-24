export const generateTitle = (country?: string) => {
  if (country) {
    return `Random Phone Number Generator for Privacy · ${country}`
  }
  return `Random Phone Number Generator for Privacy, Testing | NumGenix`
}

export const generateDescription = (country?: string) => {
  /* Addresses and  */
  if (country) {
    return `Generate Phone numbers from ${country}, enhance software testing and data verification, setting up accounts, registrations and protecting your privacy`
  }
  return `Protect your privacy with our random phone number generator, enhance software testing and data verification, setting up accounts, registrations and securing personal information`
}