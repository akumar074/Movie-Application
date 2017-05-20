// Importing Liberaries, Modules and Components
import { Component} from '@angular/core';
import { OmdbService } from 'app/omdb.service';
import { Router } from '@angular/router';
// SearchComponent Metadata
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: [`./search.component.css`]
})
// SearchComponent Class
export class SearchComponent {
  results = [];
  // SearchComponent Constructor Properties Initialization 
  constructor(private omdbservice: OmdbService, private router: Router) { }
  // onClick method to Nevigate Router to MovieListComponent
  onClick(value) {
    const moviename = value;
    this.router.navigate(['list', moviename]);
  }
  // onKeyUp method to retrieve movie data from omdbservice
  onKeyUp($event) {
    const moviename = $event.target.value;
    this.omdbservice.search(moviename).subscribe((data) => { this.results = data });
  }
}
