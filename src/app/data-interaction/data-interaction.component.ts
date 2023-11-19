import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-data-interaction',
  templateUrl: './data-interaction.component.html',
  styleUrls: ['./data-interaction.component.css']
})
export class DataInteractionComponent {
  key: string = '';
  value: string = '';
  retrievedData: string = '';

  constructor(private dataService: DataService) { }

  saveData() {
    if (this.key && this.value) {
      this.dataService.saveData(this.key, this.value).subscribe(
        response => {
          console.log(response);
          // Handle success message or any other action
        },
        error => {
          console.error(error);
          // Handle error
        }
      );
    }
  }

  getData() {
    if (this.key) {
      this.dataService.getData(this.key).subscribe(
        data => {
          console.log(data);
          this.retrievedData = data.value; // Assuming the response structure matches { key, value }
        },
        error => {
          console.error(error);
          // Handle error
        }
      );
    }
  }
}
