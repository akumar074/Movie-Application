// Importing Liberaries, Modules and Components
import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { OmdbService } from 'app/omdb.service';
import { LikeComponent } from 'app/like/like.component';
import { Router, ActivatedRoute, Params } from '@angular/router';

// MovieltistComponent Metadata
@Component({
    selector: 'app-movielist',
    templateUrl: './movielist.component.html',
    styleUrls: ['./movielist.component.css']
})
// MovielistComponent Class
export class MovielistComponent implements OnInit {
    results = [];
    @Input()
    ID: string;
    constructor( private omdbservice: OmdbService, private router: Router, private route: ActivatedRoute)  { }
    // NgOnInit method to get Movie details through OmdbService class
    ngOnInit() {
    this.route.params
    .switchMap((params: Params) => this.omdbservice.search(params['moviename']))
    .subscribe((data) => this.results = data);
    }
}
