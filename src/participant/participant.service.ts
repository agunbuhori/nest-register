import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Participant, ParticipantDocument } from 'src/schemas/participant.schema';

@Injectable()
export class ParticipantService {
    constructor(@InjectModel(Participant.name) private participantModel: Model<ParticipantDocument>) {}

    async findAll(): Promise<Participant[]> {
        return await this.participantModel.find().limit(100);
    }

    async findOne(id: string): Promise<Participant> {
        return this.participantModel.findById(id);
    }

    async create(data: Participant): Promise<Participant> {
        const created = await this.participantModel.create({
            generation: data.generation,
            name: data.name,
            gender: data.gender,
            age: data.age,
            domicilie: data.domicilie,
            number: "",
            user_agent: data.user_agent,
            ip_address: data.ip_address,
            active: 1,
            created: Date.now()
        });

        await created.save();

        return created;
    }

    async update(id, request): Promise<Participant> {
        await this.participantModel.findOneAndUpdate(id, request);

        return this.findOne(id);
    }

    async removeAll() {
        await await this.participantModel.remove({});
    }

    async remove(id: string) {
        return await this.participantModel.deleteOne({_id: id});
    }
}
