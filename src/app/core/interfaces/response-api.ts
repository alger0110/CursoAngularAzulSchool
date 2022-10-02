import { DetailResponseApi } from './detail-response-api';
export interface ResponseApi {
  status: string;
  sources: DetailResponseApi[];
}
