import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard1.component.html',
    styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component {
    dataSource: any
    displayedColumns: string[] = []
   
}
