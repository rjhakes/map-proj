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
      pageData: {
        page: 1,
        pages: 1,
        per_page: "50",
        total: 1
      },
      countryData: {
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
        latitude: 0
      }
      
      
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
        var result: any;      
        
        console.log(changes['id'].currentValue);
        console.log(changes['id'].currentValue.length == 2);
        if (changes['id'].currentValue.length == 2) {
          console.log("sending query");
          this.apiService.GetCountry(changes['id'].currentValue).subscribe(
            country => {result = country;}
          )
          console.log("result: ");
          console.log(result);
        }
      }
  }
