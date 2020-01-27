
export interface Game {
    id: number;
    name: string;
    shortdescription: string;
    datecreated: string;
    createby: string;
    haspassword: boolean;

}
const state = {
    _games: Array<Game>()
}

const getters = {
    Games: (state: any): Array<Game> => state._games
}

const actions = {
    async fetchGames(context: { commit: any }) {
        let data = [];
        for (var i = 1; i < 10; i++) {
            data.push({ 
                id: i, 
                name: "game" + i, 
                createdby: "asdf", 
                hostdays: "MTWTF", 
                shortdescription: "" + Math.random(), datecreated: new Date().getDate().toString(), haspassword: i % 2 == 0 });
        }

        context.commit("addGames", data);
    }
}

const mutations = {
    addGames: (state: any, games: Array<Game>) => state._games = [...games, ...state._games]
}


export default {
    state,
    getters,
    actions,
    mutations
}