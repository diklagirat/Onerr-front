import { gigService } from "../../services/gig-service.js"

export const gigStore = {
    strict: true,
    state: {
        gigs: [],
        filterBy: null
    },
    getters: {
        gigs({ gigs }) {
            return gigs
        },
        gigsToDisplay({ gigs, filterBy }) {
            console.log('gigs, filterBy', gigs, filterBy)
        }
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        }
    },
    actions: {
        async loadGigs(context) {
            try {
                const gigs = await gigService.query().then(gigs => gigs)
                context.commit({ type: 'setGigs', gigs })
            } catch (err) {
                console.log('gigsStore: Error in loadGigs', err)
                throw err
            }
        },
        setFilterBy({ commit }, { filterBy }) {
            console.log('commit,filterBy',commit,filterBy)
            gigService.query(filterBy).then((gigs) => {
              commit({ type: 'setGigs', gigs })
            })
          },
    }
}