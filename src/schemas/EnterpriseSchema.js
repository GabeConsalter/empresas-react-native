class EnterpriseSchema {}

EnterpriseSchema.schema = {
  name: 'Enterprise',
  primaryKey: 'id',
  properties: {
    id: 'int',
    name: 'string',
    description: 'string',
    email: 'string',
    facebook: 'string',
    twitter: 'string',
    linkedin: 'string',
    phone: 'string',
    ownEnterprise: 'bool',
    photo: 'string',
    value: 'int',
    shares: 'int',
    sharePrice: 'double',
    ownShares: 'int',
    city: 'string',
    country: 'string',
    enterpriseTypeId: 'int',
    enterpriseTypName: 'string',
  },
};

export default EnterpriseSchema;
