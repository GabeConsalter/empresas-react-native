import Realm from 'realm';

import { UserSchema, EnterpriseSchema } from './schemas';

export default function getRealm() {
  return Realm.open({
    schema: [UserSchema.schema, EnterpriseSchema],
    schemaVersion: 1,
  });
}
