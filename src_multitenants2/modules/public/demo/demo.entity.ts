import { AbstractEntity } from 'src/abstract.entity';
import { Column, Entity } from 'typeorm';

@Entity({ name: 'demos'})
export class Demo extends AbstractEntity {
  @Column()
  email: string;
  @Column()
  password: string;
}
