import nodemailer from 'nodemailer';
import { envs } from '../../config/plugins/envs.plugin';
import { LogRepository } from '../../domain/repository/log.repository';
import { LogEntity, LogSeverityLevel } from '../../domain/entities/log.entity';

interface ISendMailOptions {
    to: string | string[];
    subject: string;
    htmlBody: string;
    attachments?: IAttachment[];
}

interface IAttachment {
    filename: string;
    path: string;
}

export class EmailService {
    private transporter = nodemailer.createTransport({
        service: envs.MAILER_SERVICE,
        auth: {
            user: envs.MAILER_EMAIL,
            pass: envs.MAILER_SECRET_KEY
        }
    })

    constructor() {}

    async sendEmail(options: ISendMailOptions): Promise<boolean> {
        const { to, subject, htmlBody, attachments = [] } = options;

        try {
            const sentInformation = await this.transporter.sendMail({
                to,
                subject,
                html: htmlBody,
                attachments
            })

            console.log( sentInformation );

            return true;
        } catch (error) {

            return false;
        }
    }

    async sendEmailWithAttachments( to: string | string [] ) {
        const subject = 'Server logs';
        const htmlBody = `
            <h1>Server logs</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <p>Ipsum, quidem?</p>
        `;
        const attachments: IAttachment[] = [
            {
                filename: 'logs-all.log',
                path: './logs/logs-all.log'
            },
            {
                filename: 'logs-medium.log',
                path: './logs/logs-medium.log'
            },
            {
                filename: 'logs-high.log',
                path: './logs/logs-high.log'
            }
        ];

        return await this.sendEmail({
            to,
            subject,
            attachments,
            htmlBody
        })
    }


}