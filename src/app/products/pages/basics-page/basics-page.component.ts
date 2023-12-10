import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {

  public nameLower: string = 'sergio';
  public nameUpper: string = 'SERGIO';
  public fullName: string = 'SeRgIo GoNzAleZ';
  public customDate: Date = new Date();

}
