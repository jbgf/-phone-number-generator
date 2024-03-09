import { Faker, es, fr, en, en_GB, en_HK } from '@faker-js/faker'
import { US, GB, ES, FR, HK } from 'country-flag-icons/react/3x2'

export enum CountryLabels {
  Usa = 'usa',
  Uk = 'great_britain',
  Fr = 'french',
  Es = 'spain',
  Hk = 'hk'
}
export const locales = [
    {
        locale: en, 
        label: CountryLabels.Usa,
        icon: US,
        localeName: 'USA'

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
