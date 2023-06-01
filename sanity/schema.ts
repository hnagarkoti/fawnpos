import { type SchemaTypeDefinition } from 'sanity'
import client from './client';
import organization from './organization';
import subscription from "./subscription";
import register from './register';
import registerlog from './registerlog';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [client, organization, subscription, register, registerlog],
};
