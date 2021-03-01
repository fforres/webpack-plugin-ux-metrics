import { BufferedMetricsLoggerOptions } from 'datadog-metrics';

export type Full<T> = {
  [P in keyof T]-?: T[P];
}

export const TrackingMetrics = {
  recompile: 'recompile',
  recompile_session: 'recompile_session',
  compile: 'compile',
  compile_session: 'compile_session',
} as const;

export type TrackingMetricKeys = keyof typeof TrackingMetrics;

export type DXWebpackPluginProps = {
  datadogConfig?: BufferedMetricsLoggerOptions
  enabledKeysToTrack?: TrackingMetricKeys[]
  projectName: string;
  dryRun?: boolean
}

export const trackingMetricKeys = Object.keys(TrackingMetrics) as TrackingMetricKeys[];
