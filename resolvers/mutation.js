module.exports = {
    toggleFavoriteSession: (parent, { id }, { dataSources }, info ) => {
        return dataSources.SessionAPI.toggleFavoriteSession(id);
    }
}