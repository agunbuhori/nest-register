import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ParticipantService } from './participant.service';

@Controller('participant')
export class ParticipantController {
    constructor(private participantService: ParticipantService) {}

    @Get()
    index() {
        return this.participantService.findAll();
    }

    @Get(':id')
    show(@Param('id') id: string) {
        return this.participantService.findOne(id);
    }

    @Post()
    create(@Body() request) {
        return this.participantService.create(request);
    }

    @Put(':id')
    update(@Body() request, @Param('id') id: string) {
        return this.participantService.update(id, request);
    }

    @Delete(':id')
    delete(@Param('id') id: string) {
        return this.participantService.remove(id);
    }
}
