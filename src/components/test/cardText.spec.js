/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import cardText from '../cardText.vue'
// import { describe } from 'vitest'
// import { mount } from '@vue/test-utils'


describe('cardText props check', () => {
    it('renders the title and description correctly', () => {
        const props = {
            title: 'Test Title',
            description: 'Test Description',
        }

        const wrapper = shallowMount(cardText, {
            props,
        })

        expect(wrapper.find('h1').text()).toBe(props.title)
        expect(wrapper.find('p').text()).toBe(props.description)
    })
})
