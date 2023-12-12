import { Component, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})

export class WorldMapComponent {
  
  @Output() grabCountryID = new EventEmitter<string>();

  getCountryID(id: string) {
    this.grabCountryID.emit(id);
  }

}

