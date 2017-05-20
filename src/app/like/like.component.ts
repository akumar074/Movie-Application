// Importing Liberaries, Modules and Components
import {Component, Input, Output, EventEmitter} from '@angular/core';
// LikeComponent Metadata
@Component({
    selector: 'app-like',
    template: ` <i class='glyphicon glyphicon-heart like'
                        [class.highlighted]='ilike == false'
                        (click)='onClick($event)'></i> `,
    styleUrls: ['./like.component.css']
})
// LikeComponent class
export class LikeComponent {
    ilike = false;
    // onClick method to Like operations
    onClick( $event ) {
        this.ilike = !this.ilike;
    }
}
