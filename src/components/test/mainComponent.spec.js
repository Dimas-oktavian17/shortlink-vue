/* eslint-disable no-undef */
import { shallowMount, mount, } from '@vue/test-utils'

import { http, HttpResponse } from 'msw'
import { setupServer } from 'msw/node'
import { describe } from 'node:test'
// import { server } from '../test/mockServer'
import mainComponent from '../../components/mainComponent.vue'


const posts = [{
    data: {
        tiny_url: 'https://tinyurl.com/'
    },
}
]

export const restHandler = [
    http.get(import.meta.env.VITE_API_URL, () => HttpResponse.json(posts))
]

const server = setupServer(...restHandler)

// Start server before all tests
beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))

//  Close server after all tests
afterAll(() => server.close())

// Reset handlers after each test `important for test isolation`
afterEach(() => server.resetHandlers())

// mocking tests should be result tiny_url
test('mocking test', async () => {
    // Make the request to the mocked endpoint
    const response = await fetch(import.meta.env.VITE_API_URL)
    const data = await response.json()

    // Assert the response data
    expect(data).toEqual(posts)
})

describe('testing props', () => {
    it('renders the title prop correctly', () => {
        const title = 'More than just shorter links'
        const wrapper = shallowMount(mainComponent, {
            props: {
                title: title,
            },
        })
        expect(wrapper.find('.font-semibold').text()).toBe(title)
    })
})

describe('testing data footer', () => {
    it('should render the correct number of footer features', () => {
        const footerFeatures = [
            { id: 1, title: 'Link Shortening', link: '#short' },
            { id: 2, title: 'Branded Links', link: '#short' },
            { id: 3, title: 'Analytics', link: '#short' },
        ]
        const footerResources = [
            { id: 1, title: 'Blog', link: '#blog' },
            { id: 2, title: 'Developers', link: 'https://github.com/Dimas-oktavian17' },
            { id: 3, title: 'Support', link: 'https://github.com/Dimas-oktavian17' },
        ]
        const footerCompany = [
            { id: 1, title: 'About', link: '#body' },
            { id: 2, title: 'Our Team', link: '#body' },
            { id: 3, title: 'Careers', link: '#body' },
            { id: 4, title: 'Contact', link: '#footer' },
        ]
        const wrapper = mount(mainComponent
            , {
                props: {
                    footerFeatures,
                    footerCompany,
                    footerResources
                },
            }
        )

        const featureItems = wrapper.findAll('.footerFeatures')
        const featurecompanyItems = wrapper.findAll('.footerCompany')
        const featureresourceItems = wrapper.findAll('.footerResources')
        expect(featureItems.length).toBe(3)
        expect(featurecompanyItems.length).toBe(4)
        expect(featureresourceItems.length).toBe(3)
    })
})



