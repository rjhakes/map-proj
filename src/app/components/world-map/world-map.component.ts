import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})

export class WorldMapComponent {
  
  @Output() getCountryID = new EventEmitter<string>();

  getID(id: string) {
    console.log(id);
    this.getCountryID.emit(id);
  }

}

