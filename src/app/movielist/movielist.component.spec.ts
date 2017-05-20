// import { ComponentFixture, TestBed, async, inject } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';
// import { DebugElement, EventEmitter, NO_ERRORS_SCHEMA } from '@angular/core';
// import { MaterialModule } from '@angular/material';
// import { Movie } from '../movie/movie';
// import { MovielistComponent } from './movielist.component';
// import { OmdbService } from 'app/omdb.service';
// import { Http } from '@angular/http';
// import { Router, ActivatedRoute } from '@angular/router/';


// describe('MovielistComponent', () => {

//   let comp: MovielistComponent;
//   let fixture: ComponentFixture<MovielistComponent>;
//   let de: DebugElement;  // the DebugElement
//   let el: HTMLElement; // the DOM element

//   const expectedMovie = {
//     'Title': 'Batman Begins',
//     'Year': '2005',
//     'Poster': 'https://images-na.ssl-images-amazon.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg'
//   };


//   class RouterDummy {
//     navigate(url) { return url; }
//   }

//   class HttpDummy { }

//   class ActivatedRouteDummy { }

//   // async beforeEach
//   beforeEach(async(() => {

//     TestBed.configureTestingModule({
//       declarations: [ MovielistComponent ],
//       imports: [ MaterialModule ],
//       providers:    [ OmdbService,
//                     { provide: Http, useClass: HttpDummy }
//                     , { provide: Router, useClass: RouterDummy }
//                     , { provide: ActivatedRoute, useClass: ActivatedRouteDummy}],
//       schemas:      [ NO_ERRORS_SCHEMA ] // to ignore unrecognized[angular-material] elements and attributes
//     }).compileComponents();  // compile template and css
//   }));

//   // sync beforeEach
//   beforeEach(() => {
//     fixture = TestBed.createComponent(MovielistComponent);
//     comp    = fixture.componentInstance;
//     // setting movie value to component
//      comp.results[0] = expectedMovie;
//   });

//   it('should display movie title', () => {
//     // selecting Debug Element that contains Title
//     de = fixture.debugElement.query(By.css('md-card-title'));
//     console.log(de);
//     // getting DOM Element from Debug Element
//     el = de.nativeElement;
//     fixture.detectChanges();
//     expect(el.textContent).toContain(expectedMovie.Title);
//   });

//   it('should display movie Year', () => {
//     // selecting Debug Element that contains Year
//     de = fixture.debugElement.query(By.css('md-card-subtitle'));
//     // getting DOM Element from Debug Element
//     el = de.nativeElement;
//     fixture.detectChanges();
//     expect(el.textContent).toContain(expectedMovie.Year);
//   });

//   it('should display movie Poster', () => {
//     // selecting Debug Element that contains Poster
//     de = fixture.debugElement.query(By.css('img'));
//     // getting DOM Element from Debug Element
//     el = de.nativeElement;
//     fixture.detectChanges();
//     expect(el.getAttribute('src')).toEqual(expectedMovie.Poster);
//   });
// });
