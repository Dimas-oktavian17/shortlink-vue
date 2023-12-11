/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import headerComponent from '../../components/headerComponent.vue'

describe('headerComponent', () => {
    it('renders the title prop correctly', () => {
        const title = 'My Title'
        const wrapper = shallowMount(headerComponent, {
            props: {
                title: title,
            },
        })

        expect(wrapper.find('.font-semibold').text()).toBe(title)
    })

    it('toggles the hamburger variable on button click', async () => {
        const wrapper = shallowMount(headerComponent)

        expect(wrapper.vm.hamburger).toBe(true)

        await wrapper.find('#hamburger').trigger('click')

        expect(wrapper.vm.hamburger).toBe(false)
    })

    it('renders the navigation links correctly', () => {
        const nav = [
            {
                id: 2,
                title: 'Features',
                link: '#features',
            },
            {
                id: 3,
                title: 'Pricing',
                link: '#pricing',
            },
            {
                id: 4,
                title: 'Resources',
                link: '#resources',
            },
        ]
        const wrapper = shallowMount(headerComponent, {
            data() {
                return {
                    nav: nav,
                }
            },
        })

        const links = wrapper.findAll('.link')
        expect(links.length).toBe(nav.length)

        for (let i = 0; i < nav.length; i++) {
            expect(links[i].text()).toBe(nav[i].title)
            expect(links[i].attributes('href')).toBe(nav[i].link)
        }
    })
})
