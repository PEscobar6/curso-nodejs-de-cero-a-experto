import { EmailService } from "../../../presentation/email/email.service";
import { SendEmailLogsInterface } from "./send-log-email.interface";
import { LogRepository } from '../../repository/log.repository';
import { LogEntity, LogSeverityLevel } from "../../entities/log.entity";

export class SendEmailLogs implements SendEmailLogsInterface {
    constructor(
        private readonly emailService: EmailService,
        private readonly LogRepository: LogRepository
    ) {}

    async execute(to: string | string[]): Promise<boolean> {
        try {
            const send = await this.emailService.sendEmailWithAttachments(to);
            if ( !send ) {
                throw new Error('Email not sent');                
            }

            const log = new LogEntity({
                message: `Email sent to ${to}`,
                level: LogSeverityLevel.high,
                origin: __filename.slice(__dirname.length + 1)
            })
            this.LogRepository.saveLog( log );            
            return true;
        } catch (error) {
            const log = new LogEntity({
                message: `${error}`,
                level: LogSeverityLevel.high,
                origin: __filename.slice(__dirname.length + 1)
            })
            this.LogRepository.saveLog( log );
            return false;
        }
    }

}