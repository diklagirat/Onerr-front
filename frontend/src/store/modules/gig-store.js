import { gigService } from "../../services/gig-service.js"

export const gigStore = {
    strict: true,
    state: {
        gigs: [],
        filterBy: {
            txt: '',
        },
    },
    getters: {
        // gigs({ gigs }) {
        //     return gigs
        // },
        gigsToDisplay({ gigs, filterBy }) {
            if (!gigs) return
            const { txt } = filterBy
            const regex = new RegExp(txt, 'i')
            let filteredGigs = gigs.filter((gig) => regex.test(gig.title))
            console.log('gigsToDisplay---> gigs, filterBy', filteredGigs, filterBy)
            return filteredGigs
        }
    },
    mutations: {
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = { ...filterBy }
        },
    },
    actions: {
        async loadGigs({ commit, state }) {
            try {
                const gigs = await gigService.query()
                commit({ type: 'setGigs', gigs })
            } catch (err) {
                console.log('gigsStore: Error in loadGigs', err)
                throw err
            }
        },
        // async loadGigs({ commit, state }) {

        //     const { txt } = state.filterBy
        //     try {
        //         const gigs = await gigService.query()
        //         console.log('gigs-->', gigs)

        //         //  TODO: filter by txt 
        //         const regex = new RegExp(txt, 'i')
        //         let filteredGigs = gigs.filter((gig) => regex.test(gig.title))
        //         console.log('actions-- > filteredGigs', filteredGigs)
        //         commit({ type: 'setGigs', gigs })
        //     } catch (err) {
        //         console.log('gigsStore: Error in loadGigs', err)
        //         throw err
        //     }
        // },
    }
}