export interface StockIndexProps {
  title: string; // 지수 이름 (예: "코스피")
  imageUrl: string; // 이미지 경로
  indexPrice: string; // 지수 값
  changePrice: string;
  changeRate: string; // 변동 수치 (예: "-13.79 (0.5%)")
}
