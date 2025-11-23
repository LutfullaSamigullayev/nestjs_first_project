import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateProductDto } from "./dto/create-product.dto";

@Injectable()
export class ProductService {
    private items: any = [
        {
            id: 1,
            title: 'phone'
        },
        {
            id: 2,
            title: 'notebook'
        }
    ]

    async getAllItems() {
        return this.items
    }

    async getOneItem(id: number) {
        const item = this.items.find((el: any) => el.id === id)
        if(!item) throw new NotFoundException('Item not found')
        return item
    }

    async addItem(createProductDto: CreateProductDto): Promise<{message: "Added new item"}> {
        this.items.push(createProductDto)
        return {message: "Added new item"}
    }

    async updateItem(id: number, createProductDto: Partial<CreateProductDto>) {
        const item = this.items.findIndex((el: any) => el.id === id)
        if(item === -1) throw new NotFoundException('Item not found')
        this.items[item] = createProductDto
        return {message: "Update item"}
    }

    async deleteItem(id: number) {
        const item = this.items.findIndex((el: any) => el.id === id)
        if(item === -1) throw new NotFoundException('Item not found')
        this.items.splice(item, 1)
        return {message: "Delete item"}
    }

}