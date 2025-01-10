export interface ResponseFormat<T> {
  success: boolean;
  message: string;
  result: T | null;
}
