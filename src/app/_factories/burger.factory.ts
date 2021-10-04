import { Factory } from 'rosie';
import * as faker from 'faker';

export default new Factory()
  .attrs({
    name: () => `${faker.music.genre()} burger`,
    description: () => faker.lorem.sentence(),
  });
