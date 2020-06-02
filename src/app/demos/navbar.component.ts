import { Component } from '@angular/core';

@Component({
  selector: 'demo-navbar',
  templateUrl: './navbar.component.html'
})
export class DemoNavbarComponent {
  public active = false;
  public languages = [
    {name: 'EN', label: 'English version', lang: 'en', current: this.active}, 
    {name: 'FR', label: 'Version française', lang: 'fr', current: this.active}, 
    {name: 'SP', label: 'Versión en español', lang: 'sp', current: this.active}
  ];
  public selectLanuage = {name: 'Languages', label: '', lang: ''};

  ChangeLanuage(l) { 
    this.selectLanuage = l;
    this.languages.forEach(lang => { lang.current = this.active });
    l.current = !l.current;
  }
}
