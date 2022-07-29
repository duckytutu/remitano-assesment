import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from 'src/users/dto/create-movie.dto';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll() {
    return this.moviesService.findAll();
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
