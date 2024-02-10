import { Injectable } from '@nestjs/common';

@Injectable()
export class TodosService {
    private readonly todos: any[] = [{
        name: 'ulul as always'
    }];

    findAll(): any[] {
        return this.todos;
    }
}
