/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Player } from '../models/player';
import { Login } from '../models/login';

/**
 * Player Resource
 */
@Injectable({
  providedIn: 'root',
})
class PlayerResourceService extends __BaseService {
  static readonly loginUsingPOSTPath = '/login';
  static readonly getAllPlayersUsingGETPath = '/players';
  static readonly createPlayerUsingPOSTPath = '/players';
  static readonly updatePlayerUsingPUTPath = '/players';
  static readonly retrievePlayerUsingGETPath = '/players/{id}';
  static readonly deletePlayerUsingDELETEPath = '/players/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @param login login
   * @return OK
   */
  loginUsingPOSTResponse(login: Login): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = login;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/login`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Player>;
      })
    );
  }
  /**
   * @param login login
   * @return OK
   */
  loginUsingPOST(login: Login): __Observable<Player> {
    return this.loginUsingPOSTResponse(login).pipe(
      __map(_r => _r.body as Player)
    );
  }

  /**
   * @return OK
   */
  getAllPlayersUsingGETResponse(): __Observable<__StrictHttpResponse<Array<Player>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/players`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<Player>>;
      })
    );
  }
  /**
   * @return OK
   */
  getAllPlayersUsingGET(): __Observable<Array<Player>> {
    return this.getAllPlayersUsingGETResponse().pipe(
      __map(_r => _r.body as Array<Player>)
    );
  }

  /**
   * @param player player
   * @return OK
   */
  createPlayerUsingPOSTResponse(player: Player): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = player;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/players`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Player>;
      })
    );
  }
  /**
   * @param player player
   * @return OK
   */
  createPlayerUsingPOST(player: Player): __Observable<Player> {
    return this.createPlayerUsingPOSTResponse(player).pipe(
      __map(_r => _r.body as Player)
    );
  }

  /**
   * @param player player
   * @return OK
   */
  updatePlayerUsingPUTResponse(player: Player): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = player;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/players`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Player>;
      })
    );
  }
  /**
   * @param player player
   * @return OK
   */
  updatePlayerUsingPUT(player: Player): __Observable<Player> {
    return this.updatePlayerUsingPUTResponse(player).pipe(
      __map(_r => _r.body as Player)
    );
  }

  /**
   * @param id id
   * @return OK
   */
  retrievePlayerUsingGETResponse(id: number): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/players/${id}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Player>;
      })
    );
  }
  /**
   * @param id id
   * @return OK
   */
  retrievePlayerUsingGET(id: number): __Observable<Player> {
    return this.retrievePlayerUsingGETResponse(id).pipe(
      __map(_r => _r.body as Player)
    );
  }

  /**
   * @param id id
   */
  deletePlayerUsingDELETEResponse(id: number): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/players/${id}`,
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
  deletePlayerUsingDELETE(id: number): __Observable<null> {
    return this.deletePlayerUsingDELETEResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PlayerResourceService {
}

export { PlayerResourceService }
