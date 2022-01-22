export interface Logger {
  user_id: string;
  timestamp: Date;
  entity_id: string;
  entity_type: string;
  action: string;
}
