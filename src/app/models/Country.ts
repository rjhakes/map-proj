import { CountryDetailsComponent } from "../components/country-details/country-details.component"
import { AuxDetails } from "./AuxDetails"

interface PageData
{
    page: number,
    pages: number,
    per_page: string,
    total: number
}

 interface CountryData
{
    id: string,
    iso2Code: string,
    name: string,
    region: AuxDetails,
    adminregion: AuxDetails,
    incomeLevel: AuxDetails
    lendingType: AuxDetails,
    capitalCity: string,
    longitude: number,
    latitude: number
}

export interface Country
{
    pageData: PageData,
    countryData: CountryData
}