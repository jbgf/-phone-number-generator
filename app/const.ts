
import { US, GB, ES, FR, HK, GH, CA, RU, DE, DK, KR, CN, FlagComponent, AU, VN, IT, IN, BR, SE, ID, NL, PT, IE } from 'country-flag-icons/react/3x2'
import Portugal from './images/country-flags/Portugal.png'
import type { allFakers } from '@faker-js/faker'
/** shown in url */
export enum CountryLabels {
    Usa = 'USA',
    Uk = 'Great_Britain',
    Fr = 'French',
    Es = 'Spain',
    Hk = 'HK',
    Ghana = 'Ghana',
    Canada = 'Canada',
    Australia = 'Australia',
    Russia = 'Russia',
    German = 'German',
    China = 'China',
    India = 'India',
    Sweden = 'Sweden',
    Ireland = 'Ireland',
    Indonesia = 'Indonesia',
    Italy = 'Italy',
    Vietnam = 'Vietnam',
    SouthKorea = 'SouthKorea',
    Netherlands = 'Netherlands',
    Brazil = 'Brazil',
    Portugal = 'Portugal',
    Denmark = 'Denmark'
}
export const BRAND_NAME = `NumGenix`;
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
            locale: 'sv',
            label: CountryLabels.Sweden,
            icon: SE,
            localeName: 'Sweden'

        }, {
            locale: 'en_IE',
            label: CountryLabels.Ireland,
            icon: IE,
            localeName: 'Ireland'

        }, {
            locale: 'da',
            label: CountryLabels.Denmark,
            icon: DK,
            localeName: 'Denmark'
        }, {
            locale: 'en_HK',
            label: CountryLabels.Hk,
            icon: HK,
            localeName: 'Hongkong'
        }, {
            locale: 'en_AU',
            label: CountryLabels.Australia,
            icon: AU,
            localeName: 'Australia'
        }, {
            locale: 'ko',
            label: CountryLabels.SouthKorea,
            icon: KR,
            localeName: 'SouthKorea'
        }, {
            locale: 'it',
            label: CountryLabels.Italy,
            icon: IT,
            localeName: 'Italy'
        }, {
            locale: 'nl',
            label: CountryLabels.Netherlands,
            icon: NL,
            localeName: 'Netherlands'
        }, {
            locale: 'vi',
            label: CountryLabels.Vietnam,
            icon: VN,
            localeName: 'Vietnam'
        }, {
            locale: 'pt_BR',
            label: CountryLabels.Brazil,
            icon: BR,
            localeName: 'Brazil'
        }, {
            locale: 'zh_CN',
            label: CountryLabels.China,
            icon: CN,
            localeName: 'China'
        }, {
            locale: 'en_IN',
            label: CountryLabels.India,
            icon: IN,
            localeName: 'India'
        }, {
            locale: 'de',
            label: CountryLabels.German,
            icon: DE,
            localeName: 'German'
        }, {
            locale: 'id_ID',
            label: CountryLabels.Indonesia,
            icon: ID,
            localeName: 'Indonesia'
        }, {
            locale: 'ru',
            label: CountryLabels.Russia,
            icon: RU,
            localeName: 'Russia'
        }, {
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

        }, {

            label: CountryLabels.Portugal,
            locale: 'pt_PT',
            icon: PT,
            localeName: 'Portugal'

        }]

export enum BrandTitles_Output {
    Home = `Versatile Phone Number`
}
/** 'human' | 'national' | 'international' */
export enum GenerateStyles {
    Human = 'human',
    National = 'national',
    International = 'international'
}