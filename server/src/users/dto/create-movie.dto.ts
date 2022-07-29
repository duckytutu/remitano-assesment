import { ApiProperty } from '@nestjs/swagger';

export class CreateMovieDto {
  @ApiProperty({ nullable: false })
  userId: string;

  @ApiProperty({ nullable: false })
  videoUrl: string;

  @ApiProperty({ nullable: true })
  description: string;
}
