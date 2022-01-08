const { gql } = require('apollo-server')
module.exports = gql`
type Query {
    sessions(
        id: ID
        title: String
        description: String
        startAt: String
        endsAt: String
        room: String
        day: String
        format: String
        track: String
        level: String
    ): [Session]
    sessionById(id: ID): Session
    speakers: [Speaker]
    speakerById(id: ID): Speaker
}
type Mutation {
    toggleFavoriteSession(id: ID): Session
    addNewSession(session: SessionInput): Session
}
type Speaker {
    id:ID!
    bio: String
    name: String
    sessions: [Session]
}

input SessionInput {
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String
    level: String
    favorite: Boolean
}
type Session {
    id: ID!
    title: String!
    description: String
    startAt: String
    endsAt: String
    room: String
    day: String
    format: String
    track: String @deprecated(reason: "Test")
    level: String
    favorite: Boolean
    speakers: [Speaker]
}`