import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'email', type: 'varchar' })
  email: string

  @Column({ name: 'password', type: 'varchar' })
  password: string

  @Column({ name: 'name_first', type: 'varchar' })
  nameFirst: string

  @Column({ name: 'name_last', type: 'varchar' })
  nameLast: string

  @Column({ name: 'birth_date', type: 'timestamp', nullable: true })
  birthDate: Date

  @Column({ name: 'role', type: 'varchar' })
  role: string
}
