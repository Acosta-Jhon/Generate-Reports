import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dinamic-component',
  templateUrl: './dinamic-component.component.html',
  styleUrls: ['./dinamic-component.component.scss']
})
export class DinamicComponentComponent implements OnInit {

  public arr: Array<any> = [
    { framework: 'Angular', img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png' },
    { framework: 'React JS', img: 'https://iconape.com/wp-content/files/zk/93042/svg/react.svg' },
    { framework: 'Vue JS', img: 'http://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png' }
  ]

  ngOnInit(): void {
  
  }

}
