export const GRAPH_INTERVAL = {
  WEEK: 'week',
  MONTH: 'month',
  THREE_MONTHS: 'three_months',
  YEAR: 'year',
} as const;
type GRAPH_INTERVAL = (typeof GRAPH_INTERVAL)[keyof typeof GRAPH_INTERVAL];

export function getGraphIntervalLabel(interval: GRAPH_INTERVAL): string {
  switch (interval) {
    case GRAPH_INTERVAL.WEEK:
      return '1주';
    case GRAPH_INTERVAL.MONTH:
      return '1달';
    case GRAPH_INTERVAL.THREE_MONTHS:
      return '3달';
    case GRAPH_INTERVAL.YEAR:
      return '1년';
    default:
      return '';
  }
}
