import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '组件模板';
  srcc = '../../../../../../../assets/baidu_jgylogo3.gif';
  heroes: Hero[] = [
    { id: 1, name: 'hewei' },
    { id: 2, name: 'shuaige' }
  ];
  dd: Boolean = false;
  distply = 'display: none;';
  name: string;
  isSpecial: Boolean = true;

  classes: Object = {
    'saveable': true,
    'modified': true,
    'special': true
  };
  deleteHero(hero): void {
    this.name = hero;
    console.log(hero);
  }
}
