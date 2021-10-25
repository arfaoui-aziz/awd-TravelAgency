import faker from 'faker';
import { sample } from 'lodash';
// utils
// ----------------------------------------------------------------------

const hotels = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  email: faker.internet.email(),
  address: faker.address.streetAddress(),
  city: faker.address.city(),
  zipCode: faker.address.zipCode(),
  image: faker.image.city(),
  rating: sample([3, 4, 5]),
  phoneNumber: faker.phone.phoneNumberFormat(),
  roomsLeft: faker.datatype.number(),
  price: faker.datatype.float()
}));

export default hotels;
