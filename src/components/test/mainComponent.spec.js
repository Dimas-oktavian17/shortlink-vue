/* eslint-disable no-undef */
import { shallowMount } from '@vue/test-utils'
import { server } from './mockServer'
import mainComponent from '../../components/mainComponent.vue'

describe('mainComponent', () => {
    beforeAll(() => server.listen())
    afterAll(() => server.close())

    it('should update the result array when shortenUrl is called', async () => {
        // Mock the API response
        server.use(
            rest.post('https://your-api-url.com', (req, res, ctx) => {
                return res(
                    ctx.json({
                        // Mocked response data
                    })
                )
            })
        )

        const wrapper = shallowMount(mainComponent)
        await wrapper.vm.shortenUrl('https://example.com')

        // Assert that the result array is updated correctly
        expect(wrapper.vm.result).toHaveLength(1)
        expect(wrapper.vm.result[0]).toEqual(/* Expected mocked response data */)
    })
})
