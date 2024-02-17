import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    private readonly todos: any[] = [{
        name: 'ulul as always'
    }];

    async findAll(): Promise<any[]> {
        return this.todos;
    }
}
