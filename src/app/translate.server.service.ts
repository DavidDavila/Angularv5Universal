import { en } from "../assets/i18n/en";
import { es } from "../assets/i18n/es";
import { TranslateLoader } from '@ngx-translate/core';
import { Observable } from 'rxjs/Observable';

export class CustomTranslateLoader implements TranslateLoader {
    public getTranslation(lang: string): Observable<any> {
        return Observable.create(observer => {
            if (lang === 'es') {
                observer.next(es);
            } else {
                observer.next(en);
            }
            observer.complete();
        });
    }
}