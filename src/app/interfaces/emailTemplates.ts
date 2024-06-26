export interface IEmailTemplate {
  id: string;
  name: string;
  subject: string;
  from: string;
  html: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ICreateEmailTemplate {
  name: string;
  subject?: string;
  from?: string;
  html?: string;
}

export enum EmailTemplateType {
  NEWSLETTER = 'newsletter',
}
