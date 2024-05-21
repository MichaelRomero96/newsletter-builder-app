export interface ISendEmail {
  from: string;
  to: string[];
  subject: string;
  html: string;
}

export interface ISendEmailWithAttachments extends ISendEmail {
  attachments: string[];
}

export interface CreateEmailSenderEmailResponse {
  data: CreateEmailResponseSuccess | null;
  error: ErrorResponse | null;
}

interface CreateEmailResponseSuccess {
  /** The ID of the newly created email. */
  id: string;
}

export interface ErrorResponse {
  message: string;
  name: RESEND_ERROR_CODE_KEY;
}

declare const RESEND_ERROR_CODES_BY_KEY: {
  readonly missing_required_field: 422;
  readonly invalid_access: 422;
  readonly invalid_parameter: 422;
  readonly invalid_region: 422;
  readonly rate_limit_exceeded: 429;
  readonly missing_api_key: 401;
  readonly invalid_api_Key: 403;
  readonly invalid_from_address: 403;
  readonly validation_error: 403;
  readonly not_found: 404;
  readonly method_not_allowed: 405;
  readonly application_error: 500;
  readonly internal_server_error: 500;
};

type RESEND_ERROR_CODE_KEY = keyof typeof RESEND_ERROR_CODES_BY_KEY;

export enum SEND_EMAIL_STATUS {
  SENT = 'Sent',
  PENDING = 'Pending',
  FAILED = 'Failed',
}
