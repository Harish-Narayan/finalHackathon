export declare class DbService {
    private WatchLists;
    constructor();
    find(key: string): Promise<any>;
    create(name: string, data: Array<string>): Promise<any>;
    update(key: string, data: Array<string>): Promise<any>;
}
