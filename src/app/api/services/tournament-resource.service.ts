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
  static readonly registerTournamentUsingPOSTPath = '/register';
  static readonly retrieveRegistrationsUsingGETPath = '/registrations/{id}';
  static readonly getAllTournamentsUsingGETPath = '/tournaments';
  static readonly createTournamentUsingPOSTPath = '/tournaments';
  static readonly updateTournamentUsingPUTPath = '/tournaments';
  static readonly retrieveTournamentUsingGETPath = '/tournaments/{id}';
  static readonly deleteTournamentUsingDELETEPath = '/tournaments/{id}';
  static readonly deleteRegistrationUsingPOSTPath = '/unregister';

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
  registerTournamentUsingPOSTResponse(registration: Registration): __Observable<__StrictHttpResponse<Registration>> {
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
  registerTournamentUsingPOST(registration: Registration): __Observable<Registration> {
    return this.registerTournamentUsingPOSTResponse(registration).pipe(
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
   * @param params The `TournamentResourceService.DeleteRegistrationUsingPOSTParams` containing the following parameters:
   *
   * - `tournament.type`:
   *
   * - `tournament.registrations[0].player2.role`:
   *
   * - `tournament.registrations[0].player2.password`:
   *
   * - `tournament.registrations[0].player2.name`:
   *
   * - `tournament.registrations[0].player2.id`:
   *
   * - `tournament.registrations[0].player2.gender`:
   *
   * - `tournament.registrations[0].player2.firstName`:
   *
   * - `tournament.registrations[0].player2.email`:
   *
   * - `tournament.registrations[0].player2.club`:
   *
   * - `tournament.registrations[0].player2.authdata`:
   *
   * - `tournament.registrations[0].player1.role`:
   *
   * - `tournament.registrations[0].player1.password`:
   *
   * - `tournament.registrations[0].player1.name`:
   *
   * - `tournament.registrations[0].player1.id`:
   *
   * - `tournament.registrations[0].player1.gender`:
   *
   * - `tournament.registrations[0].player1.firstName`:
   *
   * - `tournament.registrations[0].player1.email`:
   *
   * - `tournament.registrations[0].player1.club`:
   *
   * - `tournament.registrations[0].player1.authdata`:
   *
   * - `tournament.registrations[0].id`:
   *
   * - `tournament.priceMoney`:
   *
   * - `tournament.playMode`:
   *
   * - `tournament.name`:
   *
   * - `tournament.id`:
   *
   * - `tournament.entryFee`:
   *
   * - `tournament.description`:
   *
   * - `tournament.date`:
   *
   * - `tournament.contact`:
   *
   * - `tournament.category`:
   *
   * - `player2.role`:
   *
   * - `player2.registrationsPlayer2[0].tournament.type`:
   *
   * - `player2.registrationsPlayer2[0].tournament.priceMoney`:
   *
   * - `player2.registrationsPlayer2[0].tournament.playMode`:
   *
   * - `player2.registrationsPlayer2[0].tournament.name`:
   *
   * - `player2.registrationsPlayer2[0].tournament.id`:
   *
   * - `player2.registrationsPlayer2[0].tournament.entryFee`:
   *
   * - `player2.registrationsPlayer2[0].tournament.description`:
   *
   * - `player2.registrationsPlayer2[0].tournament.date`:
   *
   * - `player2.registrationsPlayer2[0].tournament.contact`:
   *
   * - `player2.registrationsPlayer2[0].tournament.category`:
   *
   * - `player2.registrationsPlayer2[0].id`:
   *
   * - `player2.registrationsPlayer1[0].tournament.type`:
   *
   * - `player2.registrationsPlayer1[0].tournament.priceMoney`:
   *
   * - `player2.registrationsPlayer1[0].tournament.playMode`:
   *
   * - `player2.registrationsPlayer1[0].tournament.name`:
   *
   * - `player2.registrationsPlayer1[0].tournament.id`:
   *
   * - `player2.registrationsPlayer1[0].tournament.entryFee`:
   *
   * - `player2.registrationsPlayer1[0].tournament.description`:
   *
   * - `player2.registrationsPlayer1[0].tournament.date`:
   *
   * - `player2.registrationsPlayer1[0].tournament.contact`:
   *
   * - `player2.registrationsPlayer1[0].tournament.category`:
   *
   * - `player2.registrationsPlayer1[0].id`:
   *
   * - `player2.password`:
   *
   * - `player2.name`:
   *
   * - `player2.id`:
   *
   * - `player2.gender`:
   *
   * - `player2.firstName`:
   *
   * - `player2.email`:
   *
   * - `player2.club`:
   *
   * - `player2.authdata`:
   *
   * - `player1.role`:
   *
   * - `player1.registrationsPlayer2[0].tournament.type`:
   *
   * - `player1.registrationsPlayer2[0].tournament.priceMoney`:
   *
   * - `player1.registrationsPlayer2[0].tournament.playMode`:
   *
   * - `player1.registrationsPlayer2[0].tournament.name`:
   *
   * - `player1.registrationsPlayer2[0].tournament.id`:
   *
   * - `player1.registrationsPlayer2[0].tournament.entryFee`:
   *
   * - `player1.registrationsPlayer2[0].tournament.description`:
   *
   * - `player1.registrationsPlayer2[0].tournament.date`:
   *
   * - `player1.registrationsPlayer2[0].tournament.contact`:
   *
   * - `player1.registrationsPlayer2[0].tournament.category`:
   *
   * - `player1.registrationsPlayer2[0].id`:
   *
   * - `player1.registrationsPlayer1[0].tournament.type`:
   *
   * - `player1.registrationsPlayer1[0].tournament.priceMoney`:
   *
   * - `player1.registrationsPlayer1[0].tournament.playMode`:
   *
   * - `player1.registrationsPlayer1[0].tournament.name`:
   *
   * - `player1.registrationsPlayer1[0].tournament.id`:
   *
   * - `player1.registrationsPlayer1[0].tournament.entryFee`:
   *
   * - `player1.registrationsPlayer1[0].tournament.description`:
   *
   * - `player1.registrationsPlayer1[0].tournament.date`:
   *
   * - `player1.registrationsPlayer1[0].tournament.contact`:
   *
   * - `player1.registrationsPlayer1[0].tournament.category`:
   *
   * - `player1.registrationsPlayer1[0].id`:
   *
   * - `player1.password`:
   *
   * - `player1.name`:
   *
   * - `player1.id`:
   *
   * - `player1.gender`:
   *
   * - `player1.firstName`:
   *
   * - `player1.email`:
   *
   * - `player1.club`:
   *
   * - `player1.authdata`:
   *
   * - `id`:
   */
  deleteRegistrationUsingPOSTResponse(params: TournamentResourceService.DeleteRegistrationUsingPOSTParams): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.tournamentType != null) __params = __params.set('tournament.type', params.tournamentType.toString());
    if (params.tournamentRegistrations0Player2Role != null) __params = __params.set('tournament.registrations[0].player2.role', params.tournamentRegistrations0Player2Role.toString());
    if (params.tournamentRegistrations0Player2Password != null) __params = __params.set('tournament.registrations[0].player2.password', params.tournamentRegistrations0Player2Password.toString());
    if (params.tournamentRegistrations0Player2Name != null) __params = __params.set('tournament.registrations[0].player2.name', params.tournamentRegistrations0Player2Name.toString());
    if (params.tournamentRegistrations0Player2Id != null) __params = __params.set('tournament.registrations[0].player2.id', params.tournamentRegistrations0Player2Id.toString());
    if (params.tournamentRegistrations0Player2Gender != null) __params = __params.set('tournament.registrations[0].player2.gender', params.tournamentRegistrations0Player2Gender.toString());
    if (params.tournamentRegistrations0Player2FirstName != null) __params = __params.set('tournament.registrations[0].player2.firstName', params.tournamentRegistrations0Player2FirstName.toString());
    if (params.tournamentRegistrations0Player2Email != null) __params = __params.set('tournament.registrations[0].player2.email', params.tournamentRegistrations0Player2Email.toString());
    if (params.tournamentRegistrations0Player2Club != null) __params = __params.set('tournament.registrations[0].player2.club', params.tournamentRegistrations0Player2Club.toString());
    if (params.tournamentRegistrations0Player2Authdata != null) __params = __params.set('tournament.registrations[0].player2.authdata', params.tournamentRegistrations0Player2Authdata.toString());
    if (params.tournamentRegistrations0Player1Role != null) __params = __params.set('tournament.registrations[0].player1.role', params.tournamentRegistrations0Player1Role.toString());
    if (params.tournamentRegistrations0Player1Password != null) __params = __params.set('tournament.registrations[0].player1.password', params.tournamentRegistrations0Player1Password.toString());
    if (params.tournamentRegistrations0Player1Name != null) __params = __params.set('tournament.registrations[0].player1.name', params.tournamentRegistrations0Player1Name.toString());
    if (params.tournamentRegistrations0Player1Id != null) __params = __params.set('tournament.registrations[0].player1.id', params.tournamentRegistrations0Player1Id.toString());
    if (params.tournamentRegistrations0Player1Gender != null) __params = __params.set('tournament.registrations[0].player1.gender', params.tournamentRegistrations0Player1Gender.toString());
    if (params.tournamentRegistrations0Player1FirstName != null) __params = __params.set('tournament.registrations[0].player1.firstName', params.tournamentRegistrations0Player1FirstName.toString());
    if (params.tournamentRegistrations0Player1Email != null) __params = __params.set('tournament.registrations[0].player1.email', params.tournamentRegistrations0Player1Email.toString());
    if (params.tournamentRegistrations0Player1Club != null) __params = __params.set('tournament.registrations[0].player1.club', params.tournamentRegistrations0Player1Club.toString());
    if (params.tournamentRegistrations0Player1Authdata != null) __params = __params.set('tournament.registrations[0].player1.authdata', params.tournamentRegistrations0Player1Authdata.toString());
    if (params.tournamentRegistrations0Id != null) __params = __params.set('tournament.registrations[0].id', params.tournamentRegistrations0Id.toString());
    if (params.tournamentPriceMoney != null) __params = __params.set('tournament.priceMoney', params.tournamentPriceMoney.toString());
    if (params.tournamentPlayMode != null) __params = __params.set('tournament.playMode', params.tournamentPlayMode.toString());
    if (params.tournamentName != null) __params = __params.set('tournament.name', params.tournamentName.toString());
    if (params.tournamentId != null) __params = __params.set('tournament.id', params.tournamentId.toString());
    if (params.tournamentEntryFee != null) __params = __params.set('tournament.entryFee', params.tournamentEntryFee.toString());
    if (params.tournamentDescription != null) __params = __params.set('tournament.description', params.tournamentDescription.toString());
    if (params.tournamentDate != null) __params = __params.set('tournament.date', params.tournamentDate.toString());
    if (params.tournamentContact != null) __params = __params.set('tournament.contact', params.tournamentContact.toString());
    if (params.tournamentCategory != null) __params = __params.set('tournament.category', params.tournamentCategory.toString());
    if (params.player2Role != null) __params = __params.set('player2.role', params.player2Role.toString());
    if (params.player2RegistrationsPlayer20TournamentType != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.type', params.player2RegistrationsPlayer20TournamentType.toString());
    if (params.player2RegistrationsPlayer20TournamentPriceMoney != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.priceMoney', params.player2RegistrationsPlayer20TournamentPriceMoney.toString());
    if (params.player2RegistrationsPlayer20TournamentPlayMode != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.playMode', params.player2RegistrationsPlayer20TournamentPlayMode.toString());
    if (params.player2RegistrationsPlayer20TournamentName != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.name', params.player2RegistrationsPlayer20TournamentName.toString());
    if (params.player2RegistrationsPlayer20TournamentId != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.id', params.player2RegistrationsPlayer20TournamentId.toString());
    if (params.player2RegistrationsPlayer20TournamentEntryFee != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.entryFee', params.player2RegistrationsPlayer20TournamentEntryFee.toString());
    if (params.player2RegistrationsPlayer20TournamentDescription != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.description', params.player2RegistrationsPlayer20TournamentDescription.toString());
    if (params.player2RegistrationsPlayer20TournamentDate != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.date', params.player2RegistrationsPlayer20TournamentDate.toString());
    if (params.player2RegistrationsPlayer20TournamentContact != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.contact', params.player2RegistrationsPlayer20TournamentContact.toString());
    if (params.player2RegistrationsPlayer20TournamentCategory != null) __params = __params.set('player2.registrationsPlayer2[0].tournament.category', params.player2RegistrationsPlayer20TournamentCategory.toString());
    if (params.player2RegistrationsPlayer20Id != null) __params = __params.set('player2.registrationsPlayer2[0].id', params.player2RegistrationsPlayer20Id.toString());
    if (params.player2RegistrationsPlayer10TournamentType != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.type', params.player2RegistrationsPlayer10TournamentType.toString());
    if (params.player2RegistrationsPlayer10TournamentPriceMoney != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.priceMoney', params.player2RegistrationsPlayer10TournamentPriceMoney.toString());
    if (params.player2RegistrationsPlayer10TournamentPlayMode != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.playMode', params.player2RegistrationsPlayer10TournamentPlayMode.toString());
    if (params.player2RegistrationsPlayer10TournamentName != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.name', params.player2RegistrationsPlayer10TournamentName.toString());
    if (params.player2RegistrationsPlayer10TournamentId != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.id', params.player2RegistrationsPlayer10TournamentId.toString());
    if (params.player2RegistrationsPlayer10TournamentEntryFee != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.entryFee', params.player2RegistrationsPlayer10TournamentEntryFee.toString());
    if (params.player2RegistrationsPlayer10TournamentDescription != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.description', params.player2RegistrationsPlayer10TournamentDescription.toString());
    if (params.player2RegistrationsPlayer10TournamentDate != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.date', params.player2RegistrationsPlayer10TournamentDate.toString());
    if (params.player2RegistrationsPlayer10TournamentContact != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.contact', params.player2RegistrationsPlayer10TournamentContact.toString());
    if (params.player2RegistrationsPlayer10TournamentCategory != null) __params = __params.set('player2.registrationsPlayer1[0].tournament.category', params.player2RegistrationsPlayer10TournamentCategory.toString());
    if (params.player2RegistrationsPlayer10Id != null) __params = __params.set('player2.registrationsPlayer1[0].id', params.player2RegistrationsPlayer10Id.toString());
    if (params.player2Password != null) __params = __params.set('player2.password', params.player2Password.toString());
    if (params.player2Name != null) __params = __params.set('player2.name', params.player2Name.toString());
    if (params.player2Id != null) __params = __params.set('player2.id', params.player2Id.toString());
    if (params.player2Gender != null) __params = __params.set('player2.gender', params.player2Gender.toString());
    if (params.player2FirstName != null) __params = __params.set('player2.firstName', params.player2FirstName.toString());
    if (params.player2Email != null) __params = __params.set('player2.email', params.player2Email.toString());
    if (params.player2Club != null) __params = __params.set('player2.club', params.player2Club.toString());
    if (params.player2Authdata != null) __params = __params.set('player2.authdata', params.player2Authdata.toString());
    if (params.player1Role != null) __params = __params.set('player1.role', params.player1Role.toString());
    if (params.player1RegistrationsPlayer20TournamentType != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.type', params.player1RegistrationsPlayer20TournamentType.toString());
    if (params.player1RegistrationsPlayer20TournamentPriceMoney != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.priceMoney', params.player1RegistrationsPlayer20TournamentPriceMoney.toString());
    if (params.player1RegistrationsPlayer20TournamentPlayMode != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.playMode', params.player1RegistrationsPlayer20TournamentPlayMode.toString());
    if (params.player1RegistrationsPlayer20TournamentName != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.name', params.player1RegistrationsPlayer20TournamentName.toString());
    if (params.player1RegistrationsPlayer20TournamentId != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.id', params.player1RegistrationsPlayer20TournamentId.toString());
    if (params.player1RegistrationsPlayer20TournamentEntryFee != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.entryFee', params.player1RegistrationsPlayer20TournamentEntryFee.toString());
    if (params.player1RegistrationsPlayer20TournamentDescription != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.description', params.player1RegistrationsPlayer20TournamentDescription.toString());
    if (params.player1RegistrationsPlayer20TournamentDate != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.date', params.player1RegistrationsPlayer20TournamentDate.toString());
    if (params.player1RegistrationsPlayer20TournamentContact != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.contact', params.player1RegistrationsPlayer20TournamentContact.toString());
    if (params.player1RegistrationsPlayer20TournamentCategory != null) __params = __params.set('player1.registrationsPlayer2[0].tournament.category', params.player1RegistrationsPlayer20TournamentCategory.toString());
    if (params.player1RegistrationsPlayer20Id != null) __params = __params.set('player1.registrationsPlayer2[0].id', params.player1RegistrationsPlayer20Id.toString());
    if (params.player1RegistrationsPlayer10TournamentType != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.type', params.player1RegistrationsPlayer10TournamentType.toString());
    if (params.player1RegistrationsPlayer10TournamentPriceMoney != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.priceMoney', params.player1RegistrationsPlayer10TournamentPriceMoney.toString());
    if (params.player1RegistrationsPlayer10TournamentPlayMode != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.playMode', params.player1RegistrationsPlayer10TournamentPlayMode.toString());
    if (params.player1RegistrationsPlayer10TournamentName != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.name', params.player1RegistrationsPlayer10TournamentName.toString());
    if (params.player1RegistrationsPlayer10TournamentId != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.id', params.player1RegistrationsPlayer10TournamentId.toString());
    if (params.player1RegistrationsPlayer10TournamentEntryFee != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.entryFee', params.player1RegistrationsPlayer10TournamentEntryFee.toString());
    if (params.player1RegistrationsPlayer10TournamentDescription != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.description', params.player1RegistrationsPlayer10TournamentDescription.toString());
    if (params.player1RegistrationsPlayer10TournamentDate != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.date', params.player1RegistrationsPlayer10TournamentDate.toString());
    if (params.player1RegistrationsPlayer10TournamentContact != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.contact', params.player1RegistrationsPlayer10TournamentContact.toString());
    if (params.player1RegistrationsPlayer10TournamentCategory != null) __params = __params.set('player1.registrationsPlayer1[0].tournament.category', params.player1RegistrationsPlayer10TournamentCategory.toString());
    if (params.player1RegistrationsPlayer10Id != null) __params = __params.set('player1.registrationsPlayer1[0].id', params.player1RegistrationsPlayer10Id.toString());
    if (params.player1Password != null) __params = __params.set('player1.password', params.player1Password.toString());
    if (params.player1Name != null) __params = __params.set('player1.name', params.player1Name.toString());
    if (params.player1Id != null) __params = __params.set('player1.id', params.player1Id.toString());
    if (params.player1Gender != null) __params = __params.set('player1.gender', params.player1Gender.toString());
    if (params.player1FirstName != null) __params = __params.set('player1.firstName', params.player1FirstName.toString());
    if (params.player1Email != null) __params = __params.set('player1.email', params.player1Email.toString());
    if (params.player1Club != null) __params = __params.set('player1.club', params.player1Club.toString());
    if (params.player1Authdata != null) __params = __params.set('player1.authdata', params.player1Authdata.toString());
    if (params.id != null) __params = __params.set('id', params.id.toString());
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
   * @param params The `TournamentResourceService.DeleteRegistrationUsingPOSTParams` containing the following parameters:
   *
   * - `tournament.type`:
   *
   * - `tournament.registrations[0].player2.role`:
   *
   * - `tournament.registrations[0].player2.password`:
   *
   * - `tournament.registrations[0].player2.name`:
   *
   * - `tournament.registrations[0].player2.id`:
   *
   * - `tournament.registrations[0].player2.gender`:
   *
   * - `tournament.registrations[0].player2.firstName`:
   *
   * - `tournament.registrations[0].player2.email`:
   *
   * - `tournament.registrations[0].player2.club`:
   *
   * - `tournament.registrations[0].player2.authdata`:
   *
   * - `tournament.registrations[0].player1.role`:
   *
   * - `tournament.registrations[0].player1.password`:
   *
   * - `tournament.registrations[0].player1.name`:
   *
   * - `tournament.registrations[0].player1.id`:
   *
   * - `tournament.registrations[0].player1.gender`:
   *
   * - `tournament.registrations[0].player1.firstName`:
   *
   * - `tournament.registrations[0].player1.email`:
   *
   * - `tournament.registrations[0].player1.club`:
   *
   * - `tournament.registrations[0].player1.authdata`:
   *
   * - `tournament.registrations[0].id`:
   *
   * - `tournament.priceMoney`:
   *
   * - `tournament.playMode`:
   *
   * - `tournament.name`:
   *
   * - `tournament.id`:
   *
   * - `tournament.entryFee`:
   *
   * - `tournament.description`:
   *
   * - `tournament.date`:
   *
   * - `tournament.contact`:
   *
   * - `tournament.category`:
   *
   * - `player2.role`:
   *
   * - `player2.registrationsPlayer2[0].tournament.type`:
   *
   * - `player2.registrationsPlayer2[0].tournament.priceMoney`:
   *
   * - `player2.registrationsPlayer2[0].tournament.playMode`:
   *
   * - `player2.registrationsPlayer2[0].tournament.name`:
   *
   * - `player2.registrationsPlayer2[0].tournament.id`:
   *
   * - `player2.registrationsPlayer2[0].tournament.entryFee`:
   *
   * - `player2.registrationsPlayer2[0].tournament.description`:
   *
   * - `player2.registrationsPlayer2[0].tournament.date`:
   *
   * - `player2.registrationsPlayer2[0].tournament.contact`:
   *
   * - `player2.registrationsPlayer2[0].tournament.category`:
   *
   * - `player2.registrationsPlayer2[0].id`:
   *
   * - `player2.registrationsPlayer1[0].tournament.type`:
   *
   * - `player2.registrationsPlayer1[0].tournament.priceMoney`:
   *
   * - `player2.registrationsPlayer1[0].tournament.playMode`:
   *
   * - `player2.registrationsPlayer1[0].tournament.name`:
   *
   * - `player2.registrationsPlayer1[0].tournament.id`:
   *
   * - `player2.registrationsPlayer1[0].tournament.entryFee`:
   *
   * - `player2.registrationsPlayer1[0].tournament.description`:
   *
   * - `player2.registrationsPlayer1[0].tournament.date`:
   *
   * - `player2.registrationsPlayer1[0].tournament.contact`:
   *
   * - `player2.registrationsPlayer1[0].tournament.category`:
   *
   * - `player2.registrationsPlayer1[0].id`:
   *
   * - `player2.password`:
   *
   * - `player2.name`:
   *
   * - `player2.id`:
   *
   * - `player2.gender`:
   *
   * - `player2.firstName`:
   *
   * - `player2.email`:
   *
   * - `player2.club`:
   *
   * - `player2.authdata`:
   *
   * - `player1.role`:
   *
   * - `player1.registrationsPlayer2[0].tournament.type`:
   *
   * - `player1.registrationsPlayer2[0].tournament.priceMoney`:
   *
   * - `player1.registrationsPlayer2[0].tournament.playMode`:
   *
   * - `player1.registrationsPlayer2[0].tournament.name`:
   *
   * - `player1.registrationsPlayer2[0].tournament.id`:
   *
   * - `player1.registrationsPlayer2[0].tournament.entryFee`:
   *
   * - `player1.registrationsPlayer2[0].tournament.description`:
   *
   * - `player1.registrationsPlayer2[0].tournament.date`:
   *
   * - `player1.registrationsPlayer2[0].tournament.contact`:
   *
   * - `player1.registrationsPlayer2[0].tournament.category`:
   *
   * - `player1.registrationsPlayer2[0].id`:
   *
   * - `player1.registrationsPlayer1[0].tournament.type`:
   *
   * - `player1.registrationsPlayer1[0].tournament.priceMoney`:
   *
   * - `player1.registrationsPlayer1[0].tournament.playMode`:
   *
   * - `player1.registrationsPlayer1[0].tournament.name`:
   *
   * - `player1.registrationsPlayer1[0].tournament.id`:
   *
   * - `player1.registrationsPlayer1[0].tournament.entryFee`:
   *
   * - `player1.registrationsPlayer1[0].tournament.description`:
   *
   * - `player1.registrationsPlayer1[0].tournament.date`:
   *
   * - `player1.registrationsPlayer1[0].tournament.contact`:
   *
   * - `player1.registrationsPlayer1[0].tournament.category`:
   *
   * - `player1.registrationsPlayer1[0].id`:
   *
   * - `player1.password`:
   *
   * - `player1.name`:
   *
   * - `player1.id`:
   *
   * - `player1.gender`:
   *
   * - `player1.firstName`:
   *
   * - `player1.email`:
   *
   * - `player1.club`:
   *
   * - `player1.authdata`:
   *
   * - `id`:
   */
  deleteRegistrationUsingPOST(params: TournamentResourceService.DeleteRegistrationUsingPOSTParams): __Observable<null> {
    return this.deleteRegistrationUsingPOSTResponse(params).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module TournamentResourceService {

  /**
   * Parameters for deleteRegistrationUsingPOST
   */
  export interface DeleteRegistrationUsingPOSTParams {
    tournamentType?: 'MEN' | 'WOMEN' | 'MIXED';
    tournamentRegistrations0Player2Role?: string;
    tournamentRegistrations0Player2Password?: string;
    tournamentRegistrations0Player2Name?: string;
    tournamentRegistrations0Player2Id?: number;
    tournamentRegistrations0Player2Gender?: 'MALE' | 'FEMALE';
    tournamentRegistrations0Player2FirstName?: string;
    tournamentRegistrations0Player2Email?: string;
    tournamentRegistrations0Player2Club?: string;
    tournamentRegistrations0Player2Authdata?: string;
    tournamentRegistrations0Player1Role?: string;
    tournamentRegistrations0Player1Password?: string;
    tournamentRegistrations0Player1Name?: string;
    tournamentRegistrations0Player1Id?: number;
    tournamentRegistrations0Player1Gender?: 'MALE' | 'FEMALE';
    tournamentRegistrations0Player1FirstName?: string;
    tournamentRegistrations0Player1Email?: string;
    tournamentRegistrations0Player1Club?: string;
    tournamentRegistrations0Player1Authdata?: string;
    tournamentRegistrations0Id?: number;
    tournamentPriceMoney?: number;
    tournamentPlayMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
    tournamentName?: string;
    tournamentId?: number;
    tournamentEntryFee?: number;
    tournamentDescription?: string;
    tournamentDate?: string;
    tournamentContact?: string;
    tournamentCategory?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
    player2Role?: string;
    player2RegistrationsPlayer20TournamentType?: 'MEN' | 'WOMEN' | 'MIXED';
    player2RegistrationsPlayer20TournamentPriceMoney?: number;
    player2RegistrationsPlayer20TournamentPlayMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
    player2RegistrationsPlayer20TournamentName?: string;
    player2RegistrationsPlayer20TournamentId?: number;
    player2RegistrationsPlayer20TournamentEntryFee?: number;
    player2RegistrationsPlayer20TournamentDescription?: string;
    player2RegistrationsPlayer20TournamentDate?: string;
    player2RegistrationsPlayer20TournamentContact?: string;
    player2RegistrationsPlayer20TournamentCategory?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
    player2RegistrationsPlayer20Id?: number;
    player2RegistrationsPlayer10TournamentType?: 'MEN' | 'WOMEN' | 'MIXED';
    player2RegistrationsPlayer10TournamentPriceMoney?: number;
    player2RegistrationsPlayer10TournamentPlayMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
    player2RegistrationsPlayer10TournamentName?: string;
    player2RegistrationsPlayer10TournamentId?: number;
    player2RegistrationsPlayer10TournamentEntryFee?: number;
    player2RegistrationsPlayer10TournamentDescription?: string;
    player2RegistrationsPlayer10TournamentDate?: string;
    player2RegistrationsPlayer10TournamentContact?: string;
    player2RegistrationsPlayer10TournamentCategory?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
    player2RegistrationsPlayer10Id?: number;
    player2Password?: string;
    player2Name?: string;
    player2Id?: number;
    player2Gender?: 'MALE' | 'FEMALE';
    player2FirstName?: string;
    player2Email?: string;
    player2Club?: string;
    player2Authdata?: string;
    player1Role?: string;
    player1RegistrationsPlayer20TournamentType?: 'MEN' | 'WOMEN' | 'MIXED';
    player1RegistrationsPlayer20TournamentPriceMoney?: number;
    player1RegistrationsPlayer20TournamentPlayMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
    player1RegistrationsPlayer20TournamentName?: string;
    player1RegistrationsPlayer20TournamentId?: number;
    player1RegistrationsPlayer20TournamentEntryFee?: number;
    player1RegistrationsPlayer20TournamentDescription?: string;
    player1RegistrationsPlayer20TournamentDate?: string;
    player1RegistrationsPlayer20TournamentContact?: string;
    player1RegistrationsPlayer20TournamentCategory?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
    player1RegistrationsPlayer20Id?: number;
    player1RegistrationsPlayer10TournamentType?: 'MEN' | 'WOMEN' | 'MIXED';
    player1RegistrationsPlayer10TournamentPriceMoney?: number;
    player1RegistrationsPlayer10TournamentPlayMode?: 'GROUP_SINGLEOUT' | 'DOUBLEOUT' | 'OTHER';
    player1RegistrationsPlayer10TournamentName?: string;
    player1RegistrationsPlayer10TournamentId?: number;
    player1RegistrationsPlayer10TournamentEntryFee?: number;
    player1RegistrationsPlayer10TournamentDescription?: string;
    player1RegistrationsPlayer10TournamentDate?: string;
    player1RegistrationsPlayer10TournamentContact?: string;
    player1RegistrationsPlayer10TournamentCategory?: 'CATEGORY1' | 'CATEGORY2' | 'CATEGORY3' | 'CATEGORY4';
    player1RegistrationsPlayer10Id?: number;
    player1Password?: string;
    player1Name?: string;
    player1Id?: number;
    player1Gender?: 'MALE' | 'FEMALE';
    player1FirstName?: string;
    player1Email?: string;
    player1Club?: string;
    player1Authdata?: string;
    id?: number;
  }
}

export { TournamentResourceService }
