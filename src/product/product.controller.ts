import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post } from "@nestjs/common";
import { ProductService } from "./product.service";
import { CreateProductDto } from "./dto/create-product.dto";

@Controller()
export class ProductController {
    constructor(private productService: ProductService) {}
    @HttpCode(200)
    @Get("get_all_products")
    getAllItems() {
        return this.productService.getAllItems()
    }

    @HttpCode(200)
    @Get("get_one_product/:id")
    getOneItem(@Param("id") id: string) {
        return this.productService.getOneItem(+id)
    }

    @HttpCode(201)
    @Post("add_product")
    addItem(@Body() createProductDto: CreateProductDto) {
        this.productService.addItem(createProductDto)
        return {message: "Added new product"}
    }

    @HttpCode(201)
    @Patch("update_product/:id")
    updateItem(@Param("id") id: string, @Body() createProductDto: Partial<CreateProductDto>) {
        return this.productService.updateItem(+id, createProductDto)
    }

    @HttpCode(201)
    @Delete("delete_product/:id")
    deleteItem(@Param("id") id: string) {
        return this.productService.deleteItem(+id)
    }

}