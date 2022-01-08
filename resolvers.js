const _ = require('lodash');
module.exports = {
    Query: {
        sessions: (parent, args, {dataSources}, info)=>{
            return dataSources.SessionAPI.getSessions(args);
        },
        sessionById: (parent, {id}, {dataSources}, info)=>{
            return dataSources.SessionAPI.getSessionById(id);
        },
        speakers: (parent, args, {dataSources}, info)=>{
            return dataSources.SpeakerAPI.getSpeakers();
        },
        speakerById: (parent, {id}, {dataSources}, info)=>{
            return dataSources.SpeakerAPI.getSpeakerById(id);
        },
    },
    Session: {
        async speakers(session, args, {dataSources}){
            const speakers = await dataSources.SpeakerAPI.getSpeakers();
            const returns = speakers.filter((speaker) => {
                return _.filter(session.speakers, {id: speaker.id}).length > 0;
            });

            return returns;
        }
    }
};