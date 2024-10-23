/*=============================================== User model ===============================================*/

import { Schema, model } from "mongoose"
import { userRoles, type User, type UserRole } from "../../shared/types"

const userSchema = new Schema<User>(
    {
        email: { type: String, required: true, unique: true },
        fullName: { type: String, required: true },
        password: String,
        verified: Boolean,
        verifyToken: String,
        resetToken: String,
        avatar: String,
        role: {
            type: String,
            enum: userRoles,
            default: "user" as UserRole,
        },
    },
    { timestamps: true }
)

export const UserModel = model<User>("User", userSchema)
