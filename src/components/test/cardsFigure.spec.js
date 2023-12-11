/* eslint-disable no-undef */
import cardsFigure from '../cardsFigure.vue'
import { shallowMount } from '@vue/test-utils'

describe('ExampleComponent', () => {
    // eslint-disable-next-line no-undef
    it('renders the correct image source and alt text', () => {
        const wrapper = shallowMount(cardsFigure)

        // Assert that the image source and alt text are correct
        expect(wrapper.find('img').attributes('src')).toBe('/src/assets/icon-brand-recognition.svg')
        expect(wrapper.find('img').attributes('alt')).toBe('icon brand')
    })
})
