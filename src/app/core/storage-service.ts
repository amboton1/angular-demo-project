import { EventEmitter, Injectable } from "@angular/core";
import { Music } from "../music/music.model";
import { SessionStorageService } from "./session.service";

@Injectable({
    providedIn: 'root',
})

export abstract class StorageService {
    trackEvent = new EventEmitter<Music>();

    abstract setItem(key: string, item: any): void;
    abstract getItem(key: string): any;
    abstract getAll(): any[];
}