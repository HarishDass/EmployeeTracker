import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProfileInterface } from './profile-interface';

@Injectable({
  providedIn: 'root',
})
export class ProfileDetailServiceService {
  _url = 'http://localhost:3000/EmpDetails';

  constructor(private http: HttpClient) {}

  getData(): Observable<ProfileInterface[]> {
    return this.http.get<ProfileInterface[]>(this._url);
  }

  patchcomment(user: ProfileInterface): Observable<ProfileInterface> {
    return this.http.put<ProfileInterface>(`${this._url}/${user.id}`, user);
  }
}
