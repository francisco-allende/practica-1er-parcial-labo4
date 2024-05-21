import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map , take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private apiUrl = 'https://restcountries.com/v3.1/all';

  constructor(private http: HttpClient) { }

  getCountries(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((paises: { name: any; flags: any; subregion: string }[]) => {
                 
        const paisesAmerica = paises.filter(pais => pais.subregion === 'North America');

        return paisesAmerica.map(pais => ({
          name: pais.name.common,
          flag: pais.flags.png
        }));
      })
    );
  }
  
}
