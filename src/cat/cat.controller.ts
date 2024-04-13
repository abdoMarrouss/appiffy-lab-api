import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { CatsService } from "./cat.service";
import { CreateCatDto } from "./create-cat.dto";




@Controller("cat")
export class CatsController {

    constructor(private readonly projectService: CatsService) {
    }

    @Post()
    create(@Body() createCtaDto: CreateCatDto) {
        return this.projectService.create(createCtaDto);
    }

    @Get()
    findAll() {
        return this.projectService.findAll();
    }

}