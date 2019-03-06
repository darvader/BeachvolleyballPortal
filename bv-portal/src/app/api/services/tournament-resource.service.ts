/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Tournament } from '../models/tournament';

/**
 * Tournament Resource
 */
@Injectable({
  providedIn: 'root',
})
class TournamentResourceService extends __BaseService {
  static readonly getAllTournamentsUsingGETPath = '/tournaments';
  static readonly createTournamentUsingPOSTPath = '/tournaments';
  static readonly updateTournamentUsingPUTPath = '/tournaments';
  static readonly retrieveTournamentUsingGETPath = '/tournaments/{id}';
  static readonly deleteTournamentUsingDELETEPath = '/tournaments/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getAllTournamentsUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Tournament>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tournaments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Tournament>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllTournamentsUsingGET(): __Observable<Array<Tournament>> {
    return this.getAllTournamentsUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Tournament>)
    );
  }

  /**
   * @param tournament tournament
   * @return OK
   */
  createTournamentUsingPOSTResponse(tournament: Tournament): __Observable<__StrictHttpResponse<Tournament>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = tournament;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/tournaments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tournament>;
      })
    );
  }
  /**
   * @param tournament tournament
   * @return OK
   */
  createTournamentUsingPOST(tournament: Tournament): __Observable<Tournament> {
    return this.createTournamentUsingPOSTResponse(tournament).pipe(
      __map(_r => _r.body as Tournament)
    );
  }

  /**
   * @param tournament tournament
   * @return OK
   */
  updateTournamentUsingPUTResponse(tournament: Tournament): __Observable<__StrictHttpResponse<Tournament>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = tournament;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/tournaments`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tournament>;
      })
    );
  }
  /**
   * @param tournament tournament
   * @return OK
   */
  updateTournamentUsingPUT(tournament: Tournament): __Observable<Tournament> {
    return this.updateTournamentUsingPUTResponse(tournament).pipe(
      __map(_r => _r.body as Tournament)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  retrieveTournamentUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Tournament>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/tournaments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Tournament>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  retrieveTournamentUsingGET(id: number): __Observable<Tournament> {
    return this.retrieveTournamentUsingGETResponse(id).pipe(
      __map(_r => _r.body as Tournament)
    );
  }

  /**
   * @param id id
   */
  deleteTournamentUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/tournaments/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * @param id id
   */
  deleteTournamentUsingDELETE(id: number): __Observable<null> {
    return this.deleteTournamentUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TournamentResourceService {
}

export { TournamentResourceService }
