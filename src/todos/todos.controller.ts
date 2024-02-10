import { Controller, Get, Post, Redirect, Query, Param } from '@nestjs/common';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
    constructor(private todosService: TodosService) {}

    @Get()
    findAll(): any[] {
        return this.todosService.findAll();
    }

    @Get(':id')
    find(@Param() param: any): string {
        return `Todo: ${param.id}`;
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
