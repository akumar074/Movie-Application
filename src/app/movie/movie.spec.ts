// import { Movie } from './movie';
// import { DebugElement } from '@angular/core';
// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { By } from '@angular/platform-browser';

// /*Test for Movie model
// Update test code to instansiate new Movie in beforEach() block*/
// // describe('Movie (inline template)', () => {

// //   let comp:    Movie;
// //   let fixture: ComponentFixture<Movie>;
// //   let de:      DebugElement;
// //   let el:      HTMLElement;

// //   beforeEach(() => {
// //     TestBed.configureTestingModule({
// //       declarations: [ Movie ], // declare the test component
// //     });

// //     fixture = TestBed.createComponent(Movie);

// //     comp = fixture.componentInstance; // BannerComponent test instance

// //     // query for the title <h1> by CSS element selector
// //     de = fixture.debugElement.query(By.css('h1'));
// //     el = de.nativeElement;
// //   });
//   describe('Movie', () => {
//     it('has title', () => {
//      tslint:disable-next-line:max-line-length
//     const movie = new Movie( 'tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg' );
//     expect(movie.title).toBe('Titanic');
//   });

//   it('has imdb Id', () => {
//      tslint:disable-next-line:max-line-length
//     const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
//     expect(movie.imdbID).toBe('tt0120338');
//   });

//   it('has poster', () => {
//      tslint:disable-next-line:max-line-length
//     const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
//      tslint:disable-next-line:max-line-length
//     expect(movie.poster).toBe('https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
//   });

//   it('has year', () => {
//      tslint:disable-next-line:max-line-length
//     const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
//     // tslint:disable-next-line:max-line-length
//     expect(movie.year).toBe('1997');
//   });

//   it('can clone itself', () => {
//      tslint:disable-next-line:max-line-length
//     const movie = new Movie('tt0120338', 'Titanic', '1997', 'https://images-na.ssl-images-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg');
//     const clone = movie.clone();
//     expect(movie).toEqual(clone);
//   });
// });
