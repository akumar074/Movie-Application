// Importing Liberaries, Modules and Components
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MdInputModule, MdToolbarModule, MdButtonModule,
        MdCheckboxModule, MdAutocompleteModule, MdOptionModule,
        MdCardModule, MdProgressSpinnerModule} from '@angular/material';
// NgModule Material Module Metadata
@NgModule({
    imports: [ BrowserAnimationsModule,
            NoopAnimationsModule,
            MdButtonModule, MdCheckboxModule,
            MdInputModule, MdToolbarModule,
            MdAutocompleteModule, MdOptionModule, MdCardModule, MdProgressSpinnerModule ],
    exports: [ BrowserAnimationsModule,
            NoopAnimationsModule,
            MdButtonModule, MdCheckboxModule,
            MdInputModule, MdToolbarModule,
            MdAutocompleteModule, MdOptionModule, MdCardModule, MdProgressSpinnerModule ]
})
// Exporting NgModule Material Module Class
export class MaterialModule { }
