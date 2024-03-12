import { Faker, es, fr, en_US, en_GB, en_HK, en_CA, en_GH } from '@faker-js/faker'
import { US, GB, ES, FR, HK, GH, CA } from 'country-flag-icons/react/3x2'

export enum CountryLabels {
  Usa = 'USA',
  Uk = 'Great_Britain',
  Fr = 'French',
  Es = 'Spain',
  Hk = 'HK',
  Ghana = 'Ghana',
  Canada = 'Canada'
}
export const locales = [
    {
        locale: en_US, 
        label: CountryLabels.Usa,
        icon: US,
        localeName: 'USA'

    },
    {
        locale: en_CA, 
        label: CountryLabels.Canada,
        icon: CA,
        localeName: 'Canada'

    },
    {
        locale: en_GH, 
        label: CountryLabels.Ghana,
        icon: GH,
        localeName: 'Ghana'

    }, {
        locale: en_HK,
        label: CountryLabels.Hk,
        icon: HK,
        localeName: 'Hongkong'
    },{
        locale: en_GB,
        label: CountryLabels.Uk,
        icon: GB,
        localeName: 'Great Britain'
    }, {
        label: CountryLabels.Fr,
        locale: fr,
        icon: FR,
        localeName: 'French'
    }, {
        
            label: CountryLabels.Es,
            locale: es,
            icon: ES,
            localeName: 'Spain'
        
    }]
