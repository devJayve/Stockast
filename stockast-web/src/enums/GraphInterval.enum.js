"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GRAPH_INTERVAL = void 0;
exports.getGraphIntervalLabel = getGraphIntervalLabel;
exports.GRAPH_INTERVAL = {
    WEEK: 'week',
    MONTH: 'month',
    THREE_MONTHS: 'three_months',
    YEAR: 'year',
};
function getGraphIntervalLabel(interval) {
    switch (interval) {
        case exports.GRAPH_INTERVAL.WEEK:
            return '1주';
        case exports.GRAPH_INTERVAL.MONTH:
            return '1달';
        case exports.GRAPH_INTERVAL.THREE_MONTHS:
            return '3달';
        case exports.GRAPH_INTERVAL.YEAR:
            return '1년';
        default:
            return '';
    }
}
