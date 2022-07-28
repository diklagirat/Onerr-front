import { gigService } from "../../services/gig-service.js"

export const gigStore = {
    strict: true,
    state: {
        gigs: [],
        allTags: [],
        filterBy: {
            txt: '',
            ownerLevel: '',
            deliveryDay: '',
            byTag: ''
        },
        observer: null
    },
    getters: {
        gigsToDisplay({ gigs, filterBy }) {
            if (!gigs) return

            const { txt, ownerLevel, deliveryDay, byTag } = filterBy
            // By txt- V
            var regex = new RegExp(txt, 'i')
            let filteredGigs = gigs.filter((gig) => regex.test(gig.title))

            // By ownerLevel - V
            if (ownerLevel) {
                filteredGigs = filteredGigs.filter((gig) => gig.owner.level === ownerLevel)
            }
            // Delivery day -V 
            if (deliveryDay) {
                filteredGigs = filteredGigs.filter((gig) => deliveryDay >= gig.daysToMake)
            }

            // Category - V
            if (byTag && byTag.length) {
                filteredGigs = filteredGigs.filter((gig) => gig.tags.includes(byTag))
            }

            return filteredGigs

            //  1.Seller Details: DONE: filterBy.ownerLevel = gig.owner.level
            // Options:
            //          Top Rated Seller
            //          Level One
            //          Level Two
            //          New Seller

            // 2. Budget: TODO: filterBy.price  = gig.price
            // Options:
            //           Between min - max

            // 3. Delivery day : DONE: filterBy.daysToMake = gig.daysToMake only /1 /3 /7
            //  Options:
            //          Express 24H == Up to 1 day
            //          Up to 3 days
            //          Up to 7 days
            //          Anytime

            // 4. Category :  TODO: filterBy.tag = gig.tags[]
            // Options:
            //          1. Architecture & Interior Design
            //          2. Logo Animation
            //          3. Family & Genealogy
            //          4. Personal Stylists
            //          5. LinkedIn Profiles
            //          6. Book Cover Design
            //          7. Logo Design
            //          8. Voice Over
            //          9. WordPress
            //          10. Social Media Marketing

        },
        getfilterBy({ filterBy }) {
            return filterBy
        },
        getAllTags({ allTags }) {
            return allTags
        },
        getObserver(state) {
            return state.observer
        }
    },
    mutations: {
        setTags(state, { tags }) {
            state.allTags = tags
        },
        setGigs(state, { gigs }) {
            state.gigs = gigs
        },
        setFilterBy(state, { filterBy }) {
            state.filterBy = { ...filterBy }
        },
        setObserver(state, { val }) {
            state.observer = val
        }
    },
    actions: {

        async loadGigs({ commit, state }) {
            try {
                const gigs = await gigService.query()
                commit({ type: 'setGigs', gigs })
            } catch (err) {
                throw err
            }
        },
        async loadTags({ commit, state }) {
            try {
                const tags = await gigService.getAllTags()
                commit({ type: 'setTags', tags })
            } catch (err) {
                throw err
            }
        }
    }
}