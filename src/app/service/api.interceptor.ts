import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';

@Injectable()
export class MovieApiInterceptor implements HttpInterceptor {
    API_URL = environment.Api_URL;
    API_KEY = 'api_key=' + environment.Api_Key;

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const url = req.url.replace('api_key=', this.API_KEY);
        const request = req.clone({
            url: this.API_URL + url
        });
        return next.handle(request);
    }
}
