import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const copiedReq = req.clone({
            headers: req.headers.append('Auth', 'Homestead')
        });
        return next.handle(copiedReq);
    }
}