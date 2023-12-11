/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import mainFigure from '../../components/mainFigure.vue'

describe('mainFigure', () => {
    it('renders the image with correct props', () => {
        const wrapper = shallowMount(mainFigure)
        const img = wrapper.find('img')

        expect(img.classes()).toContain('w-full', 'h-full')
        expect(img.attributes('src')).toBe('/src/assets/illustration-working.svg')
        expect(img.attributes('alt')).toBe('workingIlustrasion')
    })
})
