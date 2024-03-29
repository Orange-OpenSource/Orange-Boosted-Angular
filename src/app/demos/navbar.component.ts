import { Component } from '@angular/core';

@Component({
  selector: 'demo-navbar',
  templateUrl: './navbar.component.html'
})
export class DemoNavbarComponent {
  public active = false;
  public isDemoCollapsed = true;
  public languages = [
    {name: 'EN', label: 'English version', lang: 'en', current: this.active},
    {name: 'FR', label: 'Version française', lang: 'fr', current: this.active},
    {name: 'SP', label: 'Versión en español', lang: 'sp', current: this.active}
  ];
  public selectLanguage = {name: 'Languages', label: '', lang: ''};

  ChangeLanuage(l) {
    this.selectLanguage = l;
    this.languages.forEach(lang => { lang.current = this.active; });
    l.current = !l.current;
  }
}
