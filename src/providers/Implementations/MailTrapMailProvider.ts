import nodemailer from 'nodemailer';
import { IMailProvider, IMessage } from '../IMailProvider';

class MailTrapMailProvider implements IMailProvider {
  async sendMail(message: IMessage): Promise<void> {}
}

export { MailTrapMailProvider };
