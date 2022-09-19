import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common'
import { ApiOperation } from '@nestjs/swagger'
import { ArticleService } from '../service/article.service'
import { CreateArticleDto } from '../dto/create-article.dto'
@Controller('v1/article')
export class ArticleController {
  constructor(private readonly articleService: ArticleService) {}

  @Post('/create')
  @ApiOperation({ tags: ['Artigos'], summary: 'Cria artigo' })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articleService.create(createArticleDto)
  }

  @Get('/findall')
  @ApiOperation({ tags: ['Artigos'], summary: 'Lista todos os artigos' })
  findAll() {
    return this.articleService.findAll()
  }

  @Get('/findbyid/:id')
  @ApiOperation({ tags: ['Artigos'], summary: 'Encontra artigo por id' })
  findOne(@Param('id') id: string) {
    return this.articleService.findOne(+id)
  }

  // @Patch('/update/:id')
  // @ApiOperation({
  //   tags: ['Artigos'],
  //   summary: 'Atualiza campos de artigo'
  // })
  // update(@Param('id') id: string, @Body() updateArticleDto: UpdateArticleDto) {
  //   return this.articleService.update(+id, updateArticleDto)
  // }

  @Delete(':id')
  @ApiOperation({ tags: ['Artigos'], summary: 'Remove artigo' })
  remove(@Param('id') id: string) {
    return this.articleService.remove(+id)
  }
}
