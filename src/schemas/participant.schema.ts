import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParticipantDocument = Participant & Document;

export enum Gender {
    MALE = "male",
    FEMALE = "female"
}

@Schema()
export class Participant {
  @Prop({
      required: true
  })
  name: string;

  @Prop()
  generation: string

  @Prop({default: Gender.MALE})
  gender: Gender;

  @Prop({
      required: true
  })
  age: number;

  @Prop({
      required: true
  })
  domicilie: string;

  @Prop()
  number: string;

  @Prop()
  active: boolean

  @Prop()
  user_agent: string

  @Prop()
  ip_address: string

  @Prop()
  created: Date
}

export const ParticipantSchema = SchemaFactory.createForClass(Participant);