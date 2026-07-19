export interface ReceiptItem {
  id: string;
  name: string;
  qty: number;
  price: number;
}

export interface ReceiptData {
  operator: string;
  paymentMethod: string;
  items: ReceiptItem[];
  total: number;
  date: string;
  customer?: string;
}
