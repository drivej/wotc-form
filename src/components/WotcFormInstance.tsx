import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import { WotcFormInner } from './WotcFormInner';

export interface IWotcConfig {
  entityId: string;
  formId: string;
  baseUrl: string;
  buttonClass: string;
  defaults: Record<string, unknown>;
  data: Record<string, unknown>;
  integration: string;
  submission_queue: string;
}

export const DEFAULT_CONFIG: IWotcConfig = {
  entityId: '484158277',
  formId: '2018243164',
  baseUrl: 'https://api.wotc.com/v1',
  buttonClass: 'btn btn-primary',
  defaults: {},
  data: {},
  integration: '',
  submission_queue: ''
};

export const WotcFormInstance = ({ config }: { config: Partial<IWotcConfig> }) => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <WotcFormInner config={{ ...DEFAULT_CONFIG, ...config }} />
    </QueryClientProvider>
  );
};
