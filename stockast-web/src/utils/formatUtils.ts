// 숫자에 쉼표를 추가해주는 함수
export function formatNumberWithComma(value: number): string {
  return value.toLocaleString();
}

// 숫자에 쉼표 추가 + '원'을 붙여주는 함수
export function formatCurrency(value: number): string {
  return `${formatNumberWithComma(value)}원`;
}

// 숫자를 억, 조 단위로 축약하여 표현하는 함수
export function formatCompactNumber(value: number): string {
  if (value >= 1e12) {
    return `${(value / 1e12).toFixed(1)}조원`;
  } else if (value >= 1e8) {
    return `${(value / 1e8).toFixed(1)}억원`;
  } else if (value >= 1e4) {
    return `${(value / 1e4).toFixed(1)}만원`;
  }
  return formatCurrency(value);
}
