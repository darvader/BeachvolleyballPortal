/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Registration } from '../models/registration';
import { Tournament } from '../models/tournament';

/**
 * Tournament Resource
 */
@Injectable({
  providedIn: 'root',
})
class TournamentResourceService extends __BaseService {
  static readonly getsUsingGETPath = '/';
  static readonly registerUsingPOSTPath = '/register';
  static readonly retrieveRegistrationsUsingGETPath = '/registrations/{id}';
  static readonly getAllTournamentsUsingGETPath = '/tournaments';
  static readonly createTournamentUsingPOSTPath = '/tournaments';
  static readonly updateTournamentUsingPUTPath = '/tournaments';
  static readonly retrieveTournamentUsingGETPath = '/tournaments/{id}';
  static readonly deleteTournamentUsingDELETEPath = '/tournaments/{id}';
  static readonly unregisterUsingPOSTPath = '/unregister';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return OK
   */
  getsUsingGETResponse(): __Observable<__StrictHttpResponse<string>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'text'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<string>;
      })
    );
  }
  /**
   * @return OK
   */
  getsUsingGET(): __Observable<string> {
    return this.getsUsingGETResponse().pipe(
      __map(_r => _r.body as string)
    );
  }

  /**
   * @param registration registration
   * @return OK
   */
  registerUsingPOSTResponse(registration: Registration): __Observable<__StrictHttpResponse<Registration>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registration;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/register`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Registration>;
      })
    );
  }
  /**
   * @param registration registration
   * @return OK
   */
  registerUsingPOST(registration: Registration): __Observable<Registration> {
    return this.registerUsingPOSTResponse(registration).pipe(
      __map(_r => _r.body as Registration)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  retrieveRegistrationsUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Array<Registration>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/registrations/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Registration>>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  retrieveRegistrationsUsingGET(id: number): __Observable<Array<Registration>> {
    return this.retrieveRegistrationsUsingGETResponse(id).pipe(
      __map(_r => _r.body as Array<Registration>)
    );
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

  /**
   * @param registration registration
   */
  unregisterUsingPOSTResponse(registration: Registration): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = registration;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/unregister`,
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
   * @param registration registration
   */
  unregisterUsingPOST(registration: Registration): __Observable<null> {
    return this.unregisterUsingPOSTResponse(registration).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TournamentResourceService {
}

export { TournamentResourceService }
