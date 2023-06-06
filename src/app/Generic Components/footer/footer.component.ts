import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import environment from '../../../environment/environment';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  constructor(private httpClient: HttpClient) {}

  getAppData() {
    this.httpClient
      .get(environment.baseUrl + environment.baseUrl)
      .subscribe((data) => console.log(data));
  }
}
