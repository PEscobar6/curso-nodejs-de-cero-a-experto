
export enum LogSeverityLevel {
    low = 'low',
    medium = 'medium',
    high = 'high'
}

export interface LogEntityOptions {
    level: LogSeverityLevel;
    message: string;
    origin: string;
    createdAt?: Date;
}

export class LogEntity {
    
    public level: LogSeverityLevel;
    public message: string;
    public createdAt: Date;
    public origin: string;

    constructor( options: LogEntityOptions ) {
        this.message = options.message;
        this.level = options.level;
        this.createdAt = options.createdAt || new Date();
        this.origin = options.origin;
    }

    static fromJson( json: string ): LogEntity {
        const { message, level, origin, createdAt } = JSON.parse( json );

        const log = new LogEntity({
            message,
            level,
            origin,
            createdAt
        });
        
        return log;
    }
}