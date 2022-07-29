import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Movie extends Model<Movie> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ allowNull: false })
  userId: string;

  @Column({ allowNull: false })
  videoUrl: string;

  @Column({ allowNull: true })
  videoDescription?: string;

  @Column({ type: 'timestamp' })
  createdAt?: any;

  @Column({ type: 'timestamp' })
  updatedAt?: any;
}
