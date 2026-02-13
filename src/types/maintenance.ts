export type MaintenanceStatus = 'pending' | 'in-progress' | 'completed' | 'assigned_pending';
export type MaintenancePriority = 'low' | 'medium' | 'high' | 'urgent';

export interface MaintenanceRequest {
  _id: string;
  chatId: string;
  title: string;
  description: string;
  status: MaintenanceStatus;
  priority: MaintenancePriority;
  createdAt: string;
  updatedAt?: string;
}
