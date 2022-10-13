import { Model, Table, Column, DataType } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';

interface UserCreationFields {
  email: string;
  password: string;
}

@Table({ tableName: 'users' })
export class User extends Model<User, UserCreationFields> {
  @ApiProperty({ example: '1', description: 'User unique ID' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: string;

  @ApiProperty({ example: 'user@mail.com', description: 'User email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: 'Qq123456se23!', description: 'User password' })
  @Column({ type: DataType.STRING, allowNull: false })
  password: string;

  @ApiProperty({ example: 'true', description: 'Is user banned' })
  @Column({ type: DataType.BOOLEAN, defaultValue: false })
  banned: boolean;

  @ApiProperty({ example: 'Bad boy!!', description: "User's ban reason" })
  @Column({ type: DataType.STRING, allowNull: true })
  banReason: string;
}
