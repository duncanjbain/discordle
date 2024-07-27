import { kStringMaxLength } from 'buffer';
import {model, models, Schema } from 'mongoose';

export interface Message {
    id: string,
    type: string,
    timestamp: string,
    timestampEdited: boolean
    callEndedTimestamp: string | null,
    isPinned: boolean,
    content: string,
    author: MessageAuthor,
    attachments: Array<Attachment>,
    embeds: Array<Embed>,
    stickers: Array<Sticker>,
    reactions: Array<Reaction>,
    mentions: Array<User>
    reference?: Reference,
}

export interface User {
    id: string,
    name: string,
    discriminator: string,
    nickname: string,
    color: string,
    isBot: boolean,
    avatarUrl: string
}

export interface Role {
    id: string,
    name: string,
    color: string,
    position: number
}

export interface Reaction {
    emoji: Emoji,
    count: number,
    users: Array<User>
}

export interface Emoji {
    id: string,
    name: string,
    code: string,
    isAnimated: boolean,
    imageUrl: string,
}

export interface Reference {
    messageId: string,
    channelId: string,
    guildId: string,
}

export interface Sticker {
    id: string,
    name: string,
    format: string,
    sourceUrl: string
}

export interface Embed {
    title: string,
    url: string,
    timestamp: string | null,
    description: string,
    thumbnail?: Thumbnail,
    author?: User,
    image?: Image,
    images: Array<Image>
    footer?: Footer,
    fields: Array<Field>
}

export interface Thumbnail {
    url: string,
    width: number,
    height: number,
}

export interface Field {
    name: string,
    value: number,
    isInline: boolean
}

export interface Image {
    url: string,
    width: number,
    height: number
}

export interface Footer {
    text: string,
    iconUrl: string,
}

export interface Attachment {
    id: string,
    url: string,
    filename: string,
    fileSizeBytes: number,
}


export interface MessageAuthor extends User {
    roles: Array<Role>,
}