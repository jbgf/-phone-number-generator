export const generateTitle = (country?: string) => {
  if (country) {
    return `Random Phone Number Generator for Privacy · ${country}`
  }
  return `Random Phone Number Generator for Privacy, Testing | NumGenix`
}