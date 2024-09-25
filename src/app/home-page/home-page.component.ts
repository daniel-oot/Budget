import { Component,OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface Frequency {
  name:string;
  code: string;
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  frequencies:Frequency[] | undefined;
  


  ngOnInit(): void {
    this.frequencies = [
      { name: 'Monthly', code: 'mn' },
      { name: 'Bi-Weekly', code: 'bi-weekly' },
      { name: 'Weekly', code: 'weekly' }
    ];
}


}
