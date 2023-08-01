import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface VehicleInterface {
  id?: string;
  name: string;
  info?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface VehicleGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  info?: string;
  user_id?: string;
}
