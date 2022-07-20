import { gigService } from "../../services/gig-service.js"

export const gigStore = {
    strict: true,
    state: {
        gigs: [],
    },
    getters: {
        gigs({ gigs }) {
            return gigs
        },
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        }
    },
    actions: {
        async loadGigs(context) {
            try {
                const gigs = await gigService.query()
                context.commit({ type: 'setGigs', gigs })
            } catch (err) {
                console.log('gigsStore: Error in loadGigs', err)
                throw err
            }
        },
        // async setFilterBy({ commit }, { filterBy }) {
        //     gigService.query(filterBy).then((gigs) => {
        //       commit({ type: 'setGigs', gigs })
        //     })
        //   },
    }
}