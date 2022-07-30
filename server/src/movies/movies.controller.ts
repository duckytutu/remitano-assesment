import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from 'src/movies/dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  async findAll(@Param('userId') userId: number) {
    const data = await this.moviesService.findAll();
    //raw query from db: SELECT m.id, m.movieTitle, m.movieDescription, m.movieUrl, m.createdAt, u.username FROM Movies m left join Users u on m.userId = u.id order by m.createdAt desc
    return data;
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne({ where: { id } });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.delete({ where: { id } });
  }
}
