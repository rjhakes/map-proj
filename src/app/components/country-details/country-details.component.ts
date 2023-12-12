import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Country } from 'src/app/models/Country';
import { APIService } from 'src/app/services/api/api.service';

@Component({
  selector: 'app-country-details',
  templateUrl: './country-details.component.html',
  styleUrls: ['./country-details.component.css']
})
export class CountryDetailsComponent implements OnChanges{
  @Input() id: string = '';

  country: Country;

  constructor(private apiService: APIService) {
    this.country =
    {
        id: '',
        iso2Code: '',
        name: '',
        region: {
          id: '',
          iso2code: '',
          value: '',
        },
        adminregion: {
          id: '',
          iso2code: '',
          value: '',
        },
        incomeLevel: {
          id: '',
          iso2code: '',
          value: '',
        },
        lendingType: {
          id: '',
          iso2code: '',
          value: '',
        },
        capitalCity: '',
        longitude: 0,
        latitude: 0,
        datePop: '',
        totalPop: '',
        dateGDP: '',
        gdp: ''
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
        // console.log(changes['id'].currentValue);
        // console.log(changes['id'].currentValue.length == 2);
        if (changes['id'].currentValue.length == 2) {
          this.apiService.GetCountry(changes['id'].currentValue)
          .subscribe((response: any) => {
            this.country.name = response[1][0].name;
            this.country.capitalCity = response[1][0].capitalCity;
            this.country.region.value = response[1][0].region.value;
            this.country.incomeLevel.value = response[1][0].incomeLevel.value;
            this.country.id = response[1][0].id;
            this.country.iso2Code = response[1][0].iso2Code;
            this.country.longitude = response[1][0].longitude;
            this.country.latitude = response[1][0].latitude;
          });
          this.apiService.GetTotalPop(changes['id'].currentValue)
          .subscribe((response: any) => {
            this.country.totalPop = response[1][0].value;
          });
          this.apiService.GetGDP(changes['id'].currentValue)
          .subscribe((response: any) => {
            this.country.gdp = response[1][0].value;
          });
        }
      }
  }
