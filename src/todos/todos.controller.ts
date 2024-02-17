import { Controller, Get, Post, Redirect, Query, Param, ParseIntPipe, ForbiddenException, UseInterceptors } from '@nestjs/common';
import { TodosService } from './todos.service';
import { LogginInterceptor } from 'src/common/interceptors/logging.interceptor';
import { TransformInterceptor } from 'src/common/interceptors/transform.interceptor';

@UseInterceptors(LogginInterceptor)
@UseInterceptors(TransformInterceptor)
@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) {}

    @Get()
    async findAll() {
        try {
            return await this.todosService.findAll();
        } catch (error) {
            throw new ForbiddenException() 
        }
    }

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number): string {
        return `Todo: ${id}`;
    }

    @Post()
    create(): string {
        return "Create todo"
    }

    @Get('docs')
    @Redirect('https://docs.nestjs.com', 302)
    getDocs(@Query('version') version) {
        if (version && version === '5') {
            return { url: 'https://docs.nestjs.com/v5/' };
        }
    }
}
