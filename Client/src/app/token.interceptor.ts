import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { TokenService } from './token.service';


@Injectable({
    providedIn: 'root'
})
export class TokenInterceptor implements HttpInterceptor {

    constructor(private tokenService: TokenService) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = this.tokenService.get();
        console.log(token);
        if (token) {
            const authReq = req.clone({
                setHeaders: {
                    'Authorization': `Bearer ${token}`
                }
            })
            return next.handle(authReq);
        }
        return next.handle(req);
    }

}