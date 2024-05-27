import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class ApiGlobantService {

  constructor(
    private http: HttpClient
  ) { }

  getAllCharacter(): Observable<any> {
    return this.http.get('assets/character_angular_mock_json.json');

    /*this.http.get('assets/character_angular_mock_json.json')
      .subscribe(data => {
        
        console.log(data);
        return data;

      });*/
  }

  getCharacterByID(id: string): Observable<any> {

    return this.http.get('assets/character_by_id_angular_mock.json');

  }

}
