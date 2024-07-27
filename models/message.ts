import { kStringMaxLength } from 'buffer';
import {model, models, Schema } from 'mongoose';

export interface Message {
    id: String,
    type: String,
    timestamp: String,
    timestampEdited: Boolean
    callEndedTimestamp: String | null,
    isPinned: Boolean,
    content: String,
    author: MessageAuthor,
    attachments: Array<Attachment>,
    embeds: Array<Embed>,
    stickers: Array<Sticker>,
    reactions: Array<Reaction>,
    mentions: Array<User>
    reference?: Reference,
}

export interface User {
    id: String,
    name: String,
    discriminator: String,
    nickname: String,
    color: String,
    isBot: Boolean,
    avatarUrl: String
}

export interface Role {
    id: String,
    name: String,
    color: String,
    position: Number
}

export interface Reaction {
    emoji: Emoji,
    count: Number,
    users: Array<User>
}

export interface Emoji {
    id: String,
    name: String,
    code: String,
    isAnimated: Boolean,
    imageUrl: String,
}

export interface Reference {
    messageId: String,
    channelId: String,
    guildId: String,
}

export interface Sticker {
    id: String,
    name: String,
    format: String,
    sourceUrl: String
}

export interface Embed {
    title: String,
    url: String,
    timestamp: String | null,
    description: String,
    thumbnail?: Thumbnail,
    author?: User,
    image?: Image,
    images: Array<Image>
    footer?: Footer,
    fields: Array<Field>
}

export interface Thumbnail {
    url: String,
    width: Number,
    height: Number,
}

export interface Field {
    name: String,
    value: Number,
    isInline: Boolean
}

export interface Image {
    url: String,
    width: Number,
    height: Number
}

export interface Footer {
    text: String,
    iconUrl: String,
}

export interface Attachment {
    id: String,
    url: String,
    filename: String,
    fileSizeBytes: Number,
}


export interface MessageAuthor extends User {
    roles: Array<Role>,
}