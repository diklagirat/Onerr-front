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
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },
    actions: {
        async loadGigs(context) {
            try {
                var filterBy = context.state.filterBy ? context.state.filterBy : ''
                // const gigs = await gigService.query().then(gigs => gigs)
                const gigs = await gigService.query(filterBy)
                context.commit({ type: 'setGigs', gigs })
                return gigs
            } catch (err) {
                console.log('gigsStore: Error in loadGigs', err)
                throw err
            }
        },
    }
}