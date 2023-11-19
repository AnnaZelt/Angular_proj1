import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private baseUrl = 'http://localhost:5000'; // Your Flask server URL

  constructor(private http: HttpClient) { }

  saveData(key: string, value: string): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/save_data`, { key, value });
  }

  getData(key: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/get_data/${key}`);
  }
}
