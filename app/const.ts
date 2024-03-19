
import { US, GB, ES, FR, HK, GH, CA, RU, DE, FlagComponent } from 'country-flag-icons/react/3x2'
import type { allFakers } from '@faker-js/faker'
/** shown in url */
export enum CountryLabels {
  Usa = 'USA_phonenumber',
  Uk = 'Great_Britain_phonenumber',
  Fr = 'French_phonenumber',
  Es = 'Spain_phonenumber',
  Hk = 'HK_phonenumber',
  Ghana = 'Ghana_phonenumber',
  Canada = 'Canada_phonenumber',
  Russia = 'Russia_phonenumber',
  German = 'German_phonenumber'
}
export const locales: {
    /** faker locale */
    locale: keyof typeof allFakers;
    /** url path */
    label: CountryLabels;
    icon: FlagComponent;
    /** country and area name */
    localeName: string;
}[] = [
    {
        locale: 'en_US', 
        label: CountryLabels.Usa,
        icon: US,
        localeName: 'USA'

    },
    {
        locale: 'en_CA', 
        label: CountryLabels.Canada,
        icon: CA,
        localeName: 'Canada'

    },
    {
        locale: 'en_GH', 
        label: CountryLabels.Ghana,
        icon: GH,
        localeName: 'Ghana'

    }, {
        locale: 'en_HK',
        label: CountryLabels.Hk,
        icon: HK,
        localeName: 'Hongkong'
    },{
        locale: 'de',
        label: CountryLabels.German,
        icon: DE,
        localeName: 'German'
    },{
        locale: 'ru',
        label: CountryLabels.Russia,
        icon: RU,
        localeName: 'Russia'
    },{
        locale: 'en_GB',
        label: CountryLabels.Uk,
        icon: GB,
        localeName: 'Great Britain'
    }, {
        label: CountryLabels.Fr,
        locale: 'fr',
        icon: FR,
        localeName: 'French'
    }, {
        
            label: CountryLabels.Es,
            locale: 'es',
            icon: ES,
            localeName: 'Spain'
        
    }]

export enum BrandTitles_Output {
    Home = `Versatile Phone Number`
}