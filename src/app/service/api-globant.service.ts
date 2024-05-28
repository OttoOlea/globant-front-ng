import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


const baseURL = 'http://localhost:8080/v1/public';
@Injectable({
  providedIn: 'root',
})
export class ApiGlobantService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacter(): Observable<any> {
    console.log("Call the api-rest with path: /characters")
    //return this.http.get('assets/character_angular_mock_json.json');
    return this.http.get(`${baseURL}/characters`);
  }

  getCharacterByID(id: string): Observable<any> {
    console.log("Call the api-rest with path: /charactersById")

    //return this.http.get('assets/character_by_id_angular_mock.json');
    return this.http.get(`${baseURL}/characters/${id}`);

  }

  getHistory(): Observable<any> {
    console.log("Call the api-rest with path: /history")

    return this.http.get(`${baseURL}/history`);
  }

}
