import getRealm from '../realm';

/**
 * @class UserSchema
 * @classdesc The User class and database schema
 */
class UserSchema {
  /**
   * @constructor
   * @param {User} user
   * @prop {number} id
   * @prop {string} name
   * @prop {string} email
   * @prop {string} city
   * @prop {string} country
   * @prop {number} balance
   * @prop {number} double
   * @prop {boolean} firstAccess
   * @prop {boolean} superAngel
   * @prop {Enterprise[]} enterprises
   */
  constructor(user) {
    this.id = user.id;
    this.name = user.name;
    this.email = user.email;
    this.city = user.city;
    this.country = user.country;
    this.balance = user.balance;
    this.portfolioValue = user.portfolioValue;
    this.firstAccess = user.firstAccess;
    this.superAngel = user.superAngel;
    this.enterprises = user.enterprises ? user.enterprises : [];
  }

  /**
   * Saves User
   */
  async save() {
    const realm = await getRealm();
    realm.write(() => realm.create('User', this));
  }

  /**
   * Gets the User
   */
  static async get() {
    const realm = await getRealm();
    return realm.objects('User')[0];
  }

  /**
   * Deletes the User
   */
  static async delete() {
    const realm = await getRealm();
    const users = realm.objects('User');

    realm.write(() => realm.delete(users));
  }
}

UserSchema.schema = {
  name: 'User',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    email: 'string',
    city: 'string',
    country: 'string',
    balance: 'double',
    portfolioValue: 'double',
    firstAccess: 'bool',
    superAngel: 'bool',
    enterprises: 'Enterprise[]',
  },
};

export default UserSchema;
