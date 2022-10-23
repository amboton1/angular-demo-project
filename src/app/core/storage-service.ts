export abstract class StorageService {
    abstract setItem(key: string, item: any): void;
    abstract getItem(key: string): any;
    abstract getAll(): any[];
}