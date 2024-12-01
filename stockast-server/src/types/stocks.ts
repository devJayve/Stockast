export interface StockResponse {
    rt_cd: string;
    msg_cd: string;
    msg1: string;
    output: StockOutput[];
  }
  
  export interface StockOutput {
    iscd_stat_cls_code: string;
    marg_rate: string;
    rprs_mrkt_kor_name: string;
    stck_prpr: string;
    prdy_vrss: string;
    prdy_vrss_sign: string;
    prdy_ctrt: string;
  }