import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dinamic-component',
  templateUrl: './dinamic-component.component.html',
  styleUrls: ['./dinamic-component.component.scss']
})
export class DinamicComponentComponent implements OnInit {

  public arr: Array<any> = [
    { framework: 'Angular', img: 'http://assets.stickpng.com/images/5847ea22cef1014c0b5e4833.png' },
    { framework: 'React JS', img: 'https://iconape.com/wp-content/files/zk/93042/svg/react.svg' },
    { framework: 'Vue JS', img: 'http://assets.stickpng.com/images/58482acecef1014c0b5e4a1e.png' }
  ]

  ngOnInit(): void {
  
  }

}
