import { CountryDetailsComponent } from "../components/country-details/country-details.component"
import { AuxDetails } from "./AuxDetails"

export interface Country
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
    latitude: number,
    datePop: '',
    totalPop: string,
    dateGDP: '',
    gdp: string,
}
