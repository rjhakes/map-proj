import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Country } from '../../models/Country';
import { APIService } from '../../services/api/api.service';

interface CSearch {
  id: string;
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  
  id: string;
  search: string;
  country: Country;
  countries: CSearch[];
  sList: string[];

  constructor(private apiService: APIService) {
    this.id = '';
    this.search = '';
    this.countries = [];
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
    };
    this.sList = [];
  }

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    let newCountry: CSearch;
    
    this.apiService.GetAllCountries()
    .subscribe((response: any) => {
      response[1].forEach((element: any) => {
        newCountry = {id: '', name: ''}
        newCountry.id = element.iso2Code;
        newCountry.name = element.name;
        this.countries.push(newCountry);
      });
    }); 
  }

  getID(id: string) {
    this.id = id;
    this.getCountryByID(id);
  }

  getSearch(text: string) {
    this.search = text;
    this.getCountryByName(text);
  }

  getCountryByID(id: string) {
    if (id.length == 2) {
      this.apiService.GetCountry(id)
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
      this.apiService.GetTotalPop(id)
      .subscribe((response: any) => {
        this.country.totalPop = response[1][0].value;
      });
      this.apiService.GetGDP(id)
      .subscribe((response: any) => {
        this.country.gdp = response[1][0].value;
      });
    }
  }
  
  getCountryByName(text: string) {
    let ids: string[] = [];
    this.countries.forEach( x => {
      if(x.name.includes(text)) {
        ids.push(x.id);
        this.sList.push(x.name);
      }
      console.log(ids);
    });
    if(ids.length == 1) {
      this.getCountryByID(ids[0]);
      this.sList = []
    }
  }
  // ngOnChanges(changes: SimpleChanges): void {
  //         // console.log(changes['id'].currentValue);
  //         // console.log(changes['id'].currentValue.length == 2);
  //         if (changes['id'].currentValue.length == 2) {
  //           this.apiService.GetCountry(changes['id'].currentValue)
  //           .subscribe((response: any) => {
  //             console.log(response);
  //             this.country.name = response[1][0].name;
  //             this.country.capitalCity = response[1][0].capitalCity;
  //             this.country.region.value = response[1][0].region.value;
  //             this.country.incomeLevel.value = response[1][0].incomeLevel.value;
  //             this.country.id = response[1][0].id;
  //             this.country.iso2Code = response[1][0].iso2Code;
  //             this.country.longitude = response[1][0].longitude;
  //             this.country.latitude = response[1][0].latitude;
  //           });
  //           this.apiService.GetTotalPop(changes['id'].currentValue)
  //           .subscribe((response: any) => {
  //             this.country.totalPop = response[1][0].value;
  //           });
  //           this.apiService.GetGDP(changes['id'].currentValue)
  //           .subscribe((response: any) => {
  //             this.country.gdp = response[1][0].value;
  //           });
  //         }
  //       }
}


