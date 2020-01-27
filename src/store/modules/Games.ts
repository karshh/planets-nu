import axios from 'axios';


const JOINING_STATUS = 1;
const GAMES_URL = `https://api.planets.nu/games/list?status=${JOINING_STATUS}`;

export interface Game {
    id: number;
    name: string;
    shortdescription: string;
    datecreated: string;
    createdby: string;
    hostdays: string;
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

        let response = await axios.get(GAMES_URL)
        if (!response.data) return;

        data = response.data.map((dt: any): Game => {
            return {
                id: dt.id,
                name: dt.name,
                haspassword: dt.haspassword,
                hostdays: dt.hostdays,
                createdby: dt.createdby == "none" ? null : dt.createdby,
                shortdescription: dt.shortdescription,
                datecreated: dt.datecreated
            }
        })

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