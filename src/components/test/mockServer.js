import { rest } from 'msw'
import { setupServer } from 'msw/node'

const server = setupServer(
    rest.post(import.meta.env.VITE_API_URL, (req, res, ctx) => {
        // Mock the API response here
        return res(
            ctx.json({
                // Mocked response data
            })
        )
    })
)

export { server }
