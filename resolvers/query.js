module.exports = {
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
};