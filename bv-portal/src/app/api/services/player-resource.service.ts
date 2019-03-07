/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { Player } from '../models/player';

/**
 * Player Resource
 */
@Injectable({
  providedIn: 'root',
})
class PlayerResourceService extends __BaseService {
  static readonly getAllPlayersUsingGETPath = '/Players';
  static readonly createPlayerUsingPOSTPath = '/Players';
  static readonly updatePlayerUsingPUTPath = '/Players';
  static readonly retrievePlayerUsingGETPath = '/Players/{id}';
  static readonly deletePlayerUsingDELETEPath = '/Players/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
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
      this.rootUrl + `/Players`,
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
   * @param Player Player
   * @return OK
   */
  createPlayerUsingPOSTResponse(Player: Player): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Player;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/Players`,
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
   * @param Player Player
   * @return OK
   */
  createPlayerUsingPOST(Player: Player): __Observable<Player> {
    return this.createPlayerUsingPOSTResponse(Player).pipe(
      __map(_r => _r.body as Player)
    );
  }

  /**
   * @param Player Player
   * @return OK
   */
  updatePlayerUsingPUTResponse(Player: Player): __Observable<__StrictHttpResponse<Player>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = Player;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/Players`,
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
   * @param Player Player
   * @return OK
   */
  updatePlayerUsingPUT(Player: Player): __Observable<Player> {
    return this.updatePlayerUsingPUTResponse(Player).pipe(
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
      this.rootUrl + `/Players/${id}`,
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
      this.rootUrl + `/Players/${id}`,
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
