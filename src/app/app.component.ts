import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MutableAndImmutableObjects';

  constructor(){
    let myString = "Some text"
    myString.slice(1, 3)
    console.log(myString)

    // var myString = ['One', 'Two', 'Three']
    // myString.push('Four')
    // console.log(myString)
  }
}
