import { Document } from 'mongoose';

export class Namespace extends Document {
  name: string;
  timestamp: number;
}
