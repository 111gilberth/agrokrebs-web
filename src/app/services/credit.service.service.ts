import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable} from 'rxjs';
import { Contact } from '../../app/constants/contact/Contact';

@Injectable({
  providedIn: 'root'
})
export class CreditServiceService {
   // base api url
   public url = environment.web_api_url_base;

  constructor(private http: HttpClient) { }

    // Create a new request
    createCredit(data) {
      return this.http.post(this.url + 'insertCredit.php', data).pipe( map(response => {
          return response;
        })
      );
    }
}
