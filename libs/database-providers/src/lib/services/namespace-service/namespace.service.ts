import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Namespace } from './namespace';
import { NAMESPACE_MODEL } from './namespace.provider';

@Injectable()
export class NamespaceService {
  private _cachedNameSpace = new Map<string, Namespace>();

  constructor(@Inject(NAMESPACE_MODEL) private model: Model<Namespace>) {}

  public async checkAndInsertNamespace(name: string) {
    if (this._cachedNameSpace.has(name)) {
      return this._cachedNameSpace.get(name);
    }
    const namespace = await this.findOne(name);
    if (namespace) {
      return namespace;
    }
    const data = { name, timestamp: Date.now() };
    const model = new this.model(data);
    const result = await model.save();
    this._cachedNameSpace.set(name, result);
    return result;
  }

  public findOne(name: string) {
    return this.model.findOne({ name });
  }
}
