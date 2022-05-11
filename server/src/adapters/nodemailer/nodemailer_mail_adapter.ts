import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mails_adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "c43fc5edd7e929",
      pass: "a04c9ae27fa1aa"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
        await transport.sendMail({
            from: "Henrique Barros <henriqueeustaquiob@gmail.com>",
            to: "Henrique Barros <henriqueeustaquiob@gmail.com>",
            subject,
            html: body,
        })
    }
}