export interface SendEmailLogsInterface {
    execute: ( to: string | string[] ) => Promise<boolean>;
}