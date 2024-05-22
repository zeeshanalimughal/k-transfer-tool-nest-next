import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { ModelEntity, ModelEntitySchema } from 'src/model/model.entity';
import { AuthProvidersEnum } from 'src/modules/authentication/interfaces/auth.enum';
import validator from 'validator';

export type UserDocument = HydratedDocument<User>;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
})
export class User extends ModelEntity {
  @Prop({
    type: String,
    required: [true, 'A user must have a name'],
    maxlength: [10, 'Username must be less than or equal to 10 characters.'],
  })
  name: string;

  @Prop({
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: [validator.isEmail, 'Please provide a valid email'],
  })
  email: string;

  @Prop({
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 8,
  })
  password: string;

  @Prop({
    default: AuthProvidersEnum.email,
  })
  provider: string;

  @Prop({
    type: String,
    default: null,
  })
  socialId?: string | null;

  @Prop({ type: mongoose.Schema.Types.Date })
  passwordChangedAt: Date;

  @Prop({ type: String })
  passwordResetToken: string;

  @Prop({ type: mongoose.Schema.Types.Date })
  passwordResetExpires: Date;

  @Prop({
    type: Boolean,
    default: false,
  })
  active: boolean;
}

export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.add(ModelEntitySchema);
