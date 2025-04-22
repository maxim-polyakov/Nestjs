import { Controller, Get, Param, Post, Body, Patch, Delete, Query } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get()
    findAll(@Query('role') role?: 'INTERN' | 'ENGINEER' | 'ADMIN') {
        return [];
    }

    @Get('interns')
    findAllInterns() {
        return [];
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return { id };
    }

    @Post()
    create(@Body() user: {}) {
        return user;
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() userUpdate:{}) {
        return { id, ...userUpdate };
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return { id };
    }

}
