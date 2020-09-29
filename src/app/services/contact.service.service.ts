import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable} from 'rxjs';
import { Contact } from '../../app/constants/contact/Contact';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  // base api url
  public url = environment.web_api_url_base;

  constructor(private http: HttpClient) { }

   // Create a new request
   createContact(data) {
    return this.http.post(this.url + 'insertContact.php', data).pipe( map(response => {
        return response;
      })
    );
  }



}
