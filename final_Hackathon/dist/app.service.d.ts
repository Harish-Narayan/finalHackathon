import { DbService } from './shared';
export declare class AppService {
    private readonly db;
    constructor(db: DbService);
    getHello(): Promise<string>;
    findAll(): Promise<Response>;
}
