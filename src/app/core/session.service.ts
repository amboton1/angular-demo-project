import { EventEmitter, Injectable } from "@angular/core";
import { Music } from "../music/music.model";
import { StorageService } from "./storage-service";

@Injectable({
    providedIn: 'root',
})

export class SessionStorageService implements StorageService {
    trackEvent = new EventEmitter<Music>();
    sessionStorageTemp: Music[] = [];

    constructor() {}

    getAll(): any[] {
        return [
            new Music('12134q2212', 'bla bla 1asd', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('121112212', 'bla bla 1wj', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('12124553212', 'bla bla 1yuyru', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('121587562212', 'bla bla 14523445', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('1216792212', 'bla bla 1gjhkjgkgh', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('12143422212', 'bla bla 1nvbnv', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('12122e5612', 'bla bla 1lhklh', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('121345w2212', 'bla bla 17878', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'),
            new Music('121286i8212', 'bla bla 1999', 'ammar', 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80')
        ]
    }

    checkStorage(): any {
        if (sessionStorage.getItem('session')) {
            let sessions = sessionStorage.getItem('session');
            return sessions;
        }
    }

    getItem(key: string) {
        return JSON.parse(sessionStorage.getItem(key)!);
    }

    setItem(key: string, item: any): void {
        this.sessionStorageTemp.push(item);
        const sessionArrayItems = this.getItem('session');
        if (sessionArrayItems) {
            sessionStorage.setItem(key, JSON.stringify([...sessionArrayItems, item]));
        }
        else sessionStorage.setItem(key, JSON.stringify(this.sessionStorageTemp));
    }
}