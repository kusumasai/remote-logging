import { Schema } from 'mongoose';
import { Namespace } from './namespace';

export const NamespaceSchema = new Schema<Namespace>({
  name: String,
  timestamp: Number,
});
