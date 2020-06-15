import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Namespace } from './namespace';
import { NAMESPACE_MODEL } from './namespace.provider';

@Injectable()
export class NamespaceService {
  constructor(@Inject(NAMESPACE_MODEL) private model: Model<Namespace>) {}

  public async checkAndInsertNamespace(name: string) {
    const namespace = await this.findOne(name);
    if (namespace) {
      return namespace;
    }
    const data = { name, timestamp: Date.now() };
    const model = new this.model(data);
    return model.save();
  }

  public findOne(name: string) {
    return this.model.findOne({ name });
  }
}
