import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { GrantDTO } from './grant.model';
import { ResponseWrapper } from '../model/response-wrapper.model';
import { createRequestOption } from '../model/request-util';

@Injectable()
export class GrantsService {
    private resourceUrl = 'api/grant';

    constructor(private http: Http) { }

    query(req?: any): Observable<ResponseWrapper> {
        const options = createRequestOption(req);
        return this.http.get(this.resourceUrl, options)
            .map((res: Response) => this.convertResponse(res));
    }

    private convertResponse(res: Response): ResponseWrapper {
        const jsonResponse = res.json();
        return new ResponseWrapper(res.headers, jsonResponse, res.status);
    }
}