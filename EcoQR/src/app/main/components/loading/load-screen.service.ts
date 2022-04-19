import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LoadingInfo } from '../interfaces/loadingInfo';

@Injectable({
  providedIn: 'root'
})

export class LoadScreenService {
    private showUpLoading: BehaviorSubject<LoadingInfo>;

    constructor() {
        this.showUpLoading = new BehaviorSubject<LoadingInfo>({ status: false });
    }

    setHttpStatus(statusParam: boolean, titulo?: string, detalle?: string) {
        this.showUpLoading.next({
            status: statusParam,
            titulo,
            detalle
        });
    }

    getHttpStatus(): Observable<LoadingInfo> {
        return this.showUpLoading.asObservable();
    }
}
